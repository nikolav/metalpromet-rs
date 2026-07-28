<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const { $$ } = useNuxtApp();

// @@eos
</script>

<template>
  <VContainer
    fluid
    class="app-container-reset ma-0 pa-0 mx-auto component--AppBoxContainerCentered"
    :max-width="$$.config('layout.component.AppBoxContainerCentered.maxWidth')!"
  >
    <slot />
  </VContainer>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
