<script setup lang="ts">
const props = defineProps<{
  propsTop?: any;
  propsBottom?: any;
}>();

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridRowsAutoAuto grid grid-cols-1 grid-rows-[auto_auto] gap-0"
  >
    <AppBoxBase v-bind="props.propsTop">
      <slot name="top" />
    </AppBoxBase>
    <AppBoxBase v-bind="props.propsBottom">
      <slot />
    </AppBoxBase>
  </AppBoxBase>
</template>
