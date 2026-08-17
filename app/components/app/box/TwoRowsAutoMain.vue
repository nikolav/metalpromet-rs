<script setup lang="ts">
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
    footerFirst?: boolean;
    propsMain?: any;
    propsBottom?: any;
  }>(),
  {
    footerFirst: false,
  },
);

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppBoxTwoRowsAutoMain d-flex flex-col">
    <AppBoxBase class="flex-1 overflow-y-auto" v-bind="props.propsMain">
      <slot />
    </AppBoxBase>
    <AppBoxBase
      class="grow-0"
      :class="{ 'order-first': props.footerFirst }"
      v-bind="props.propsBottom"
    >
      <slot name="footer" />
    </AppBoxBase>
  </AppBoxBase>
</template>
