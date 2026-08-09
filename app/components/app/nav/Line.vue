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
    <NuxtLinkLocale :to="{ name: 'about' }">📃 O nama</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'dashboard' }">👷‍♂️ Usluge</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'contact' }">📞 Kontakt</NuxtLinkLocale>
    <NuxtLinkLocale :to="{ name: 'demo' }" class="opacity-50"
      >🚧 Demo</NuxtLinkLocale
    >
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
