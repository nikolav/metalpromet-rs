<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    root?: boolean;
  }>(),
  {
    root: true,
  },
);

// @@eos
</script>

<template>
  <VSheet
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
