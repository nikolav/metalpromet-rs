<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
definePageMeta({
  context: {
    title: "pages.engineering.title",
    description: "pages.engineering.description",
  },
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/delatnosti/inzenjering",
      "sr-cyrl": "/delatnosti/inzenjering",
      en: "/services/engineering",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--engineering">
    <AppBoxCentered>
      <h2>📃inzenjering 🚧</h2>
    </AppBoxCentered>
  </AppBoxPageWrap>
</template>
