<script setup lang="ts">
import { useDisplay } from "vuetify";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const d = useDisplay();

// @@eos
</script>

<template>
  <AppCardSectionPrimary
    title="Vaš partner u obradi metala"
    sub-title="Od ideje do gotovog proizvoda"
    :icon="{ icon: 'local:certificate-trusted' }"
  >
  </AppCardSectionPrimary>
</template>
