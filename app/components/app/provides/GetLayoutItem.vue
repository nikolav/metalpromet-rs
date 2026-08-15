<script setup lang="ts">
import { useLayout } from "vuetify";

const { getLayoutItem } = useLayout();

// @@eos
</script>

<template>
  <slot :provides="{ getLayoutItem }" />
</template>
