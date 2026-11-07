<script setup lang="ts">
const props = defineProps<{
  propsTop?: any;
  propsBottom?: any;
}>();

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridRowsFullAuto grid grid-cols-1 grid-rows-[1fr_auto] gap-0"
  >
    <AppBoxBase v-bind="props.propsTop">
      <slot />
    </AppBoxBase>
    <AppBoxBase v-bind="props.propsBottom">
      <slot name="bottom" />
    </AppBoxBase>
  </AppBoxBase>
</template>
