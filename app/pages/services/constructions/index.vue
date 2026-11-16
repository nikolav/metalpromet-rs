<script setup lang="ts">
definePageMeta({
  context: {
    title: "pages.constructions.title",
    description: "pages.constructions.description",
  },
  layout: "default",
  i18n: {
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
    <AppSectionServicesConstruction />
  </AppBoxPageWrap>
</template>
