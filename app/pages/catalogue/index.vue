<script setup lang="ts">
definePageMeta({
  context: {
    title: "pages.catalogue.title",
    description: "pages.catalogue.description",
  },
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/katalog",
      "sr-cyrl": "/katalog",
      en: "/catalogue",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--catalogue">
    <AppBoxCentered>
      <h2>📃katalog 🚧</h2>
    </AppBoxCentered>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
