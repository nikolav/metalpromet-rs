<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();
// @@eos
</script>
<template>
  <AppBoxLayoutWrap>
    <AppNavAppBar :location="d.smAndUp.value ? 'top' : 'bottom'" />
    <VMain>
      <slot />
    </VMain>
    <AppFooterMain />
  </AppBoxLayoutWrap>
</template>
