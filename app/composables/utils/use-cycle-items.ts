import _ from "lodash";

import type { TJsonLiteral, TOrNoValue, TRecordJson } from "~/types";
import { isPresent } from "~/utils/is-present";

interface IUseCycleItemsOptions<TNode = unknown, TKey = unknown> {
  // calc key for node
  key: (node: TNode) => TKey;
  initial?: TOrNoValue<TKey>;
}

export const useCycleItems = <TNode = TRecordJson>(
  items: TNode[],
  options: IUseCycleItemsOptions<TNode, TJsonLiteral> = {
    key: (node) => items.indexOf(node),
  },
) => {
  const ll = _(items);

  const current = shallowRef<TOrNoValue<TNode>>(
    options.initial
      ? ll.find((node) => options.initial === options.key(node))
      : ll.isEmpty()
        ? undefined
        : ll.first(),
  );
  const currentKey = computed(() =>
    isPresent(current.value) ? options.key(current.value) : undefined,
  );

  const isFirst = computed(
    () => isPresent(current.value) && current.value === ll.first(),
  );

  const isLast = computed(
    () => isPresent(current.value) && current.value === ll.last(),
  );

  const next = () => {
    if (ll.isEmpty()) return;
    current.value = isPresent(current.value)
      ? isLast.value
        ? ll.first()
        : items[
            ll.findIndex((node) => currentKey.value === options.key(node)) + 1
          ]
      : ll.first();
  };

  const prev = () => {
    if (ll.isEmpty()) return;
    current.value = isPresent(current.value)
      ? isFirst.value
        ? ll.last()
        : items[
            ll.findIndex((node) => currentKey.value === options.key(node)) - 1
          ]
      : ll.last();
  };

  const random = (sameKeyAllowed = false) => {
    if (ll.isEmpty()) return;

    if (!isPresent(current.value)) {
      current.value = ll.sample();
      return;
    }

    if (!(1 < ll.size())) return;

    let node = ll.sample();

    if (sameKeyAllowed) {
      current.value = node;
      return;
    }

    for (; currentKey.value === options.key(node!); node = ll.sample());
    current.value = node;
  };

  const active = (key: TJsonLiteral) => {
    current.value = ll.find((node) => key === options.key(node));
  };

  return {
    current,
    currentKey,
    isFirst,
    isLast,
    items: [...items],

    // setters
    prev,
    next,
    random,
    active,
  };
};
