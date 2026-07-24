import { AppBoxPageWrap } from "../../../.nuxt/components";
<script setup lang="ts">
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

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--dashboard">
    <h2 class="text-center">page:dashboard 🚧</h2>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
