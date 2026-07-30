<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();
// @@eos
</script>
<template>
  <AppBoxBase>
    <AppNavAppBar :location="d.smAndUp.value ? 'top' : 'bottom'" />
    <VMain>
      <slot />
    </VMain>
    <AppFooterMain
      class="*:scale-[.9] !pt-5 !pb-32 !border-t-4 !border-t-v-primary-variant *opacity-85 *!border-opacity-50"
    />
  </AppBoxBase>
</template>
<style lang="scss" scoped></style>
<style module></style>
<style lang="scss"></style>
