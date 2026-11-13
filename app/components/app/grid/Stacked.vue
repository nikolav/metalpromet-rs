<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    stack?: boolean;

    propsContent?: any;
    propsStack?: any;
  }>(),
  {
    stack: false,
  },
);

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridStacked"
    :class="[props.stack ? undefined : 'app-grid-area-stack-container grid']"
  >
    <AppBoxBase
      :class="{ 'app-grid-area-stack-cell': !props.stack }"
      v-bind="props.propsContent"
    >
      <slot />
    </AppBoxBase>
    <AppBoxBase
      :class="{ 'app-grid-area-stack-cell': !props.stack }"
      v-bind="props.propsStack"
    >
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
