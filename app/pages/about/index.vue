<script setup lang="ts">
definePageMeta({
  layout: "default",
  i18n: {
    paths: {
      sr: "/o-nama",
      "sr-cyrl": "/o-nama",
      en: "/about-us",
    },
  },
  context: {
    title: "pages.about.title",
    description: "pages.about.description",
  },
});

// yt-id: idxkQgb5KNA; provider="youtube"
// @@eos
</script>
<template>
  <AppBoxPageWrap class="page--about">
    <AppSlidesHero cta="Zatražite ponudu" :height="444" class="mt-0" />
    <h2 class="text-center">strana:o-nama 🚧</h2>
  </AppBoxPageWrap>
</template>
