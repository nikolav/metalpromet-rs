<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppGridStacked grid">
    <AppBoxBase class="content">
      <slot />
    </AppBoxBase>
    <AppBoxBase class="overlay">
      <slot name="overlay" />
    </AppBoxBase>
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped>
.component--AppGridStacked {
  grid-template-areas: "overlay";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.content,
.overlay {
  grid-area: overlay;
}
</style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
