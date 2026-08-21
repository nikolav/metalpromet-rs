<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppNavLine flex items-center gap-4 pe-2">
    <NuxtLinkLocale :to="{ name: 'index' }">🏠 Početna</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'projects' }">🗼 Projekti</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'services' }">👷‍♂️ Delatnosti</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'about' }">📃 O nama</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'contact' }">📞 Kontakt</NuxtLinkLocale>
  </AppBoxBase>
</template>
