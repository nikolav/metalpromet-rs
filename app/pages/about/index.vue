<script setup lang="ts">
import { useDocs } from "~/composables/docs/use-docs";

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

const logsMain = useDocs("main", "logs");

onNuxtReady(async () => {
  console.log("logsMain.start");
  await logsMain.start();
});

// @@eos
</script>
<template>
  <AppBoxPageWrap class="page--about">
    <h2 class="text-center">strana:o-nama 📃</h2>
    <small>
      <pre>{{ logsMain.data }}</pre>
    </small>
  </AppBoxPageWrap>
</template>
<style lang="scss" scoped></style>
<style module></style>
<style lang="scss"></style>
