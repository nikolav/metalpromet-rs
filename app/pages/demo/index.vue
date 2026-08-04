<script setup lang="ts">
import { useTheme } from "vuetify";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const t = useTheme();
const themeToggle = () => {
  t.change(t.global.current.value.dark ? "light" : "dark");
};

const togglePopup = useToggleFlag();

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--demo">
    <h2 class="text-center">strana:demo 🚧</h2>
    <AppUtilVuetifyConfig />
  </AppBoxPageWrap>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
