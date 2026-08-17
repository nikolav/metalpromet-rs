<script setup lang="ts">
import type { TAppGridStackedFramesContext } from "~/types";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
// definePageMeta({
//   context: {
//     title: "pages.NAME.title",
//     description: "pages.NAME.description",
//   },
//   layout: "default",
//   // middleware: ["auth"],
//   // validate: (route) => {},
//   i18n: {
//     // locales: ["sr", "en"],
//     paths: {
//       sr: "/strana/[slug]",
//       "sr-cyrl": "/strana/[slug]",
//       en: "/page/[slug]",
//     },
//   },
// });

const context = inject<TAppGridStackedFramesContext>(
  "AppGridStackedFrames_context",
);

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridStackedFramesItem"
    :class="{ 'app-grid-stacked-frames-item': context?.stack }"
  >
    <slot />
  </AppBoxBase>
</template>

<style lang="scss" scoped>
.app-grid-stacked-frames-item {
  grid-area: stack;
}
</style>
