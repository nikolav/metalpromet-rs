<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();
// @@eos
</script>
<template>
  <AppBoxLayoutWrap class="layout--default">
    <AppNavAppBar :location="d.smAndUp.value ? 'top' : 'bottom'" />
    <VMain>
      <slot />
      <AppFooterMain />
    </VMain>
  </AppBoxLayoutWrap>
</template>
