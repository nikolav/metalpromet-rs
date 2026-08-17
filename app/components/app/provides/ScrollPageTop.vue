<script setup lang="ts">
import { useGoTo } from "vuetify";

const goto = useGoTo();

const scrollPageTop = async (duration = 2345) =>
  await goto(0, { duration, easing: "easeOutCubic" });

// @@eos
</script>

<template>
  <slot :provides="{ scrollPageTop }" />
</template>
