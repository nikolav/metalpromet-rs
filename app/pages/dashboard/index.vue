<script setup lang="ts">
import { useDocs } from "~/composables/docs/use-docs";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

definePageMeta({
  context: {
    title: "pages.dashboard.title",
    description: "pages.dashboard.description",
  },
  layout: "default",
  // middleware: ["auth"],
  i18n: {
    paths: {
      sr: "/panel",
      "sr-cyrl": "/panel",
      en: "/dashboard",
    },
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
  <AppBoxPageWrap class="page--dashboard">
    <h2 class="text-center">page:dashboard 🚧</h2>
    <small>
      <pre>{{ logsMain.data }}</pre>
    </small>
  </AppBoxPageWrap>
</template>
