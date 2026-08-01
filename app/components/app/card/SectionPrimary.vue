<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

// @@eos
</script>

<template>
  <VCard
    tile
    border="t-md primary-darken-1"
    class="component--AppCardSectionPrimary"
  >
    <VCardTitle
      class="text-shadow-sm text-center bg-primary-variant position-relative bg-gradient-to-r from-v-primary to-v-primary-variant"
    >
      <slot name="title" />
    </VCardTitle>

    <slot />

    <VCardActions>
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
