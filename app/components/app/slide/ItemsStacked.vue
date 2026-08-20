<script setup lang="ts">
import type { TOrNoValue } from "~/types";
import { default as TElementSize } from "~/components/app/provides/ElementSize.vue";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    cellMinHeight?: number;
    cellWidth?: any;
    gap?: any;

    items: any[];

    propsContainer?: any;
    propsItem?: any;
    propsCell?: any;
  }>(),
  { cellMinHeight: 100, cellWidth: 100 },
);

const { $$ } = useNuxtApp();

const target = useTemplateRef<TOrNoValue<InstanceType<typeof TElementSize>>>(
  "target:82e89875-def6-58f8-b206-903539f581d1",
);
const H = computed(() => target.value?.height);

const chunkLength = computed(() =>
  $$.isPresent(H.value)
    ? props.cellMinHeight < H.value
      ? Math.floor(H.value / props.cellMinHeight)
      : 1
    : 1,
);

const cells = computed(() => $$.chunk(props.items, chunkLength.value));

const cw = computed(() =>
  $$.isNumeric(props.cellWidth) ? `${props.cellWidth}px` : props.cellWidth,
);

const _gap_ = computed(() =>
  $$.isNumeric(props.gap) ? `${props.gap}px` : props.gap,
);

// @@eos
</script>

<template>
  <AppProvidesElementSize
    class="component--AppSlideItemsStacked"
    ref="target:82e89875-def6-58f8-b206-903539f581d1"
    v-bind="props.propsContainer"
  >
    <VSlideGroup class="fill-height" v-bind="$attrs">
      <VSlideGroupItem v-for="(cell, itemIndex) in cells">
        <AppBoxBase
          :style="[
            {
              width: cw,
            },
            props.gap ? `gap: ${_gap_}` : undefined,
          ]"
          class="d-flex flex-col"
          v-bind="props.propsItem"
        >
          <AppBoxBase
            v-for="(item, index) in cell"
            class="flex-1"
            v-bind="props.propsCell"
          >
            <slot name="item" :item :itemIndex :index />
          </AppBoxBase>
          <template v-if="cell.length < chunkLength">
            <VSpacer v-for="_i in chunkLength - cell.length" />
          </template>
        </AppBoxBase>
      </VSlideGroupItem>
    </VSlideGroup>
  </AppProvidesElementSize>
</template>

<style lang="scss">
.component--AppSlideItemsStacked .v-slide-group__content {
  gap: v-bind(_gap_);
}
</style>
