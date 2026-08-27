<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    footerFirst?: boolean;
    propsMain?: any;
    propsBottom?: any;
  }>(),
  {
    footerFirst: false,
  },
);

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppBoxTwoRowsAutoMain d-flex flex-col">
    <AppBoxBase class="flex-1 overflow-y-auto" v-bind="props.propsMain">
      <slot />
    </AppBoxBase>
    <AppBoxBase
      class="grow-0"
      :class="{ 'order-first': props.footerFirst }"
      v-bind="props.propsBottom"
    >
      <slot name="footer" />
    </AppBoxBase>
  </AppBoxBase>
</template>
