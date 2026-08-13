<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();

// @@eos
</script>

<template>
  <h2
    class="component--AppCardSectionPrimaryTitle"
    :class="{ 'text-h5': !d.smAndUp.value }"
  >
    <slot />
  </h2>
</template>
