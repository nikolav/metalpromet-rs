<script setup lang="ts">
definePageMeta({
  context: {
    title: "pages.products.title",
    description: "pages.products.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti/stolarija",
      "sr-cyrl": "/delatnosti/stolarija",
      en: "/services/products",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--products">
    <AppSectionServicesCarpentry />
  </AppBoxPageWrap>
</template>
