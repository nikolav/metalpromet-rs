<script setup lang="ts">
definePageMeta({
  context: {
    title: "pages.projects.title",
    description: "pages.projects.description",
  },
  layout: "default",
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/projekti",
      "sr-cyrl": "/projekti",
      en: "/projects",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--projects">
    <h2 class="text-center">strana:projekti 🚧</h2>
  </AppBoxPageWrap>
</template>
