<script setup lang="ts">
import type { TVueInstance } from "~/types";

const props = withDefaults(
  defineProps<{
    root?: boolean;
  }>(),
  {
    root: true,
  },
);

const target = useTemplateRef("target:f1847335-8d55-5ef9-a5c9-8b296bffe7b7");
const el_ = useCurrentElement((<unknown>target) as TVueInstance);
const size = useElementSize(el_);

defineExpose({ size });

// @@eos
</script>

<template>
  <VSheet
    ref="target:f1847335-8d55-5ef9-a5c9-8b296bffe7b7"
    class="component--AppBoxRoot"
    position="relative"
    :class="{
      'app-container--root': props.root,
    }"
  >
    <slot />
  </VSheet>
</template>

<style lang="scss" scoped>
.app-container--root {
  display: flow-root;
}
</style>
