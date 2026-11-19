<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{ propsContent?: any }>(), {
  propsContent: {},
});
// @@eos
</script>

<template>
  <ClientOnly class="component--AppOverlayScreen">
    <VDialog
      fullscreen
      :scrim="false"
      transition="app-transition-slide-y-r"
      v-bind="$attrs"
    >
      <VCard
        variant="flat"
        tile
        class="position-relative pa-0 ma-0"
        v-bind="props.propsContent"
      >
        <slot />
      </VCard>
    </VDialog>
  </ClientOnly>
</template>
