<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
definePageMeta({
  context: {
    title: "pages.constructions.title",
    description: "pages.constructions.description",
  },
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/delatnosti/metalne-konstrukcije",
      "sr-cyrl": "/delatnosti/metalne-konstrukcije",
      en: "/services/constructions",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--constructions">
    <AppBoxCentered>
      <h2>📃metalne-konstrukcije 🚧</h2>
    </AppBoxCentered>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
