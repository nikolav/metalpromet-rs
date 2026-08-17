<script setup lang="ts">
import type { TAppGridStackedFramesContext } from "~/types";

const props = withDefaults(
  defineProps<{
    stack?: boolean;
  }>(),
  {
    stack: true,
  },
);

provide("AppGridStackedFrames_context", <TAppGridStackedFramesContext>{
  stack: props.stack,
});

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridStackedFrames"
    :class="{ 'grid app-grid-stacked-frames': props.stack }"
  >
    <slot />
  </AppBoxBase>
</template>

<style lang="scss" scoped>
.app-grid-stacked-frames {
  grid-template-areas: "stack";
}
</style>
