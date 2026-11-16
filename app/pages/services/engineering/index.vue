<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
definePageMeta({
  context: {
    title: "pages.engineering.title",
    description: "pages.engineering.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti/industrijska-oprema",
      "sr-cyrl": "/delatnosti/industrijska-oprema",
      en: "/services/engineering",
    },
  },
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--engineering">
    <AppSectionServicesIndustryComponents />
  </AppBoxPageWrap>
</template>
