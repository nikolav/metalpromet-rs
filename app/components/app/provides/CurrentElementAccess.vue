<script setup lang="ts">
import type { TCash, TOrNoValue } from "~/types";
import { useDom } from "~/composables/dom/use-dom";

const target = useTemplateRef("target:1f18defa-4fbb-5884-aee8-ec26fb7c4e07");

const exposed = {
  target: shallowRef<TOrNoValue<TCash>>(null),
};

onMounted(() => {
  useSubscription(
    useDom(() => target.value?.$el).subscribe(($coll) => {
      exposed.target.value = $coll;
    }),
  );
});

defineExpose(exposed);

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppProvidesCurrentElementAccess"
    ref="target:1f18defa-4fbb-5884-aee8-ec26fb7c4e07"
  >
    <slot />
  </AppBoxBase>
</template>
