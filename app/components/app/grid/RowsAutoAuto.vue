<script setup lang="ts">
const props = defineProps<{
  propsTop?: any;
  propsBottom?: any;
}>();

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridRowsAutoAuto grid grid-cols-1 rows-auto-auto gap-0"
  >
    <AppBoxBase v-bind="props.propsTop">
      <slot name="top" />
    </AppBoxBase>
    <AppBoxBase v-bind="props.propsBottom">
      <slot />
    </AppBoxBase>
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped>
.rows-auto-auto {
  grid-template-rows: auto auto;
}
</style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
