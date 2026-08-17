<script setup lang="ts">
const props = defineProps<{
  propsContent?: any;
  propsStack?: any;
}>();

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridStacked app-grid-area-stack-container grid"
  >
    <AppBoxBase class="app-grid-area-stack-cell" v-bind="props.propsContent">
      <slot />
    </AppBoxBase>
    <AppBoxBase class="app-grid-area-stack-cell" v-bind="props.propsStack">
      <slot name="stack" />
    </AppBoxBase>
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped>
.app-grid-area-stack-container {
  grid-template-areas: "stack";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.app-grid-area-stack-cell {
  grid-area: stack;
}
</style>
