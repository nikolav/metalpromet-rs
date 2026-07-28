<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();
// @@eos
</script>
<template>
  <AppNavAppBar :location="d.smAndUp.value ? 'top' : 'bottom'" />
  <VMain>
    <slot />
  </VMain>
</template>
<style lang="scss" scoped></style>
<style module></style>
<style lang="scss"></style>
