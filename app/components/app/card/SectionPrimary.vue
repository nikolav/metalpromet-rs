<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
const props = defineProps<{
  propsTitle?: any;
  propsActions?: any;
}>();

// @@eos
</script>

<template>
  <VCard
    tile
    border="t-md primary-darken-1"
    class="component--AppCardSectionPrimary"
  >
    <VCardTitle
      class="text-shadow-sm text-center bg-primary-variant bg-[url('/images/stock/004.png')] bg-blend-multiply bg-cover position-relative"
      v-bind="props.propsTitle"
    >
      <slot name="title" />
    </VCardTitle>

    <slot />

    <VCardActions v-bind="props.propsActions">
      <slot name="actions" />
    </VCardActions>
  </VCard>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
