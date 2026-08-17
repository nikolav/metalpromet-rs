<script setup lang="ts">
import type { TAppGridStackedFramesContext } from "~/types";

const context = inject<TAppGridStackedFramesContext>(
  "AppGridStackedFrames_context",
);

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridStackedFramesItem"
    :class="{ 'app-grid-stacked-frames-item': context?.stack }"
  >
    <slot />
  </AppBoxBase>
</template>

<style lang="scss" scoped>
.app-grid-stacked-frames-item {
  grid-area: stack;
}
</style>
