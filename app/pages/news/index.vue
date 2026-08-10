<script setup lang="ts">
definePageMeta({
  context: {
    title: "pages.news.title",
    description: "pages.news.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/novosti",
      "sr-cyrl": "/novosti",
      en: "/news",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--news">
    <h2 class="text-center">strana:novosti 🚧</h2>
  </AppBoxPageWrap>
</template>
