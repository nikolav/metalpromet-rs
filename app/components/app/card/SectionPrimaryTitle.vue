<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();

// @@eos
</script>

<template>
  <h2
    class="component--AppCardSectionPrimaryTitle"
    :class="[d.mobile.value ? 'text-h5' : 'text-h4']"
  >
    <slot />
  </h2>
</template>
