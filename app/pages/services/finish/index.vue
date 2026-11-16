<script setup lang="ts">
definePageMeta({
  context: {
    title: "pages.finish.title",
    description: "pages.finish.description",
  },
  layout: "default",
  i18n: {
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
    <AppSectionServicesFinish />
  </AppBoxPageWrap>
</template>
