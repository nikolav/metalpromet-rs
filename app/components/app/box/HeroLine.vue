<script setup lang="ts">
// defineOptions({
//   inheritAttrs: false,
// });

const props = withDefaults(
  defineProps<{
    h1?: string;
    h2?: string;
    title: string;
    subtitle: string;
  }>(),
  {
    h1: "Metal-Promet",
  },
);

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppBoxHeroLine">
    <VSheet
      tile
      color="rgba(var(--v-theme-ui), .88)"
      class="!text-v-on-ui backdrop-blur-sm"
    >
      <VCardText class="text-center">
        <h1 class="text-shadow-sm">{{ props.h1 }}</h1>
        <h2 class="text-body-1">
          {{ props.h2 }}
        </h2>
      </VCardText>
    </VSheet>

    <VSheet
      tile
      elevation="1"
      class="!text-v-on-ui backdrop-blur-sm"
      color="rgba(var(--v-theme-ui), .66)"
    >
      <VCardItem class="ps-2 text-center">
        <template v-if="$slots.icon" #prepend>
          <slot name="icon" />
        </template>
        <VCardTitle class="text-shadow-sm"> {{ props.title }}</VCardTitle>
        <VCardSubtitle>{{ props.subtitle }}</VCardSubtitle>
      </VCardItem>
    </VSheet>
  </AppBoxBase>
</template>
