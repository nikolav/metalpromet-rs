<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppNavLine inline-flex gap-2">
    <NuxtLinkLocale :to="{ name: 'demo' }">demo</NuxtLinkLocale>
    <span> • </span>
    <NuxtLinkLocale :to="{ name: 'index' }">home</NuxtLinkLocale>
    <span> • </span>
    <NuxtLinkLocale :to="{ name: 'about' }">about</NuxtLinkLocale>
    <span> • </span>
    <NuxtLinkLocale :to="{ name: 'dashboard' }">dashboard</NuxtLinkLocale>
    <span> • </span>
    <NuxtLinkLocale :to="{ name: 'contact' }">contact</NuxtLinkLocale>
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
