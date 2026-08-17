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

const props = withDefaults(
  defineProps<{
    stack?: boolean;
  }>(),
  {
    stack: true,
  },
);

provide("AppGridStackedFrames_context", <TAppGridStackedFramesContext>{
  stack: props.stack,
});

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridStackedFrames"
    :class="{ 'grid app-grid-stacked-frames': props.stack }"
  >
    <slot />
  </AppBoxBase>
</template>

<style lang="scss" scoped>
.app-grid-stacked-frames {
  grid-template-areas: "stack";
}
</style>
