<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
const props = withDefaults(
  defineProps<{
    centered?: boolean;
  }>(),
  {
    centered: true,
  },
);

const { $$ } = useNuxtApp();

// @@eos
</script>

<template>
  <VContainer
    class="app-container-reset ma-0 pa-0 component--AppBoxContainerCentered"
    :class="{ 'mx-auto': props.centered }"
    :max-width="$$.config('layout.component.AppBoxContainerCentered.maxWidth')!"
  >
    <slot />
  </VContainer>
</template>
