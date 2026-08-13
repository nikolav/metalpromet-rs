<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
definePageMeta({
  context: {
    title: "pages.products.title",
    description: "pages.products.description",
  },
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/delatnosti/gotovi-proizvodi",
      "sr-cyrl": "/delatnosti/gotovi-proizvodi",
      en: "/services/products",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--products">
    <AppBoxCentered>
      <h2>📃gotovi-proizvodi 🚧</h2>
    </AppBoxCentered>
  </AppBoxPageWrap>
</template>
