<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
definePageMeta({
  context: {
    title: "pages.finish.title",
    description: "pages.finish.description",
  },
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/delatnosti/zavrsna-obrada",
      "sr-cyrl": "/delatnosti/zavrsna-obrada",
      en: "/services/finish",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--finish">
    <AppBoxCentered>
      <h2>📃zavrsna-obrada 🚧</h2>
    </AppBoxCentered>
  </AppBoxPageWrap>
</template>
