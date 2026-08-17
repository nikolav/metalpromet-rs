<script setup lang="ts">
definePageMeta({
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  // locales: ["fr", "es"]
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <AppGridAutoCells :cell-width="100" class="*w-[555px] gap-1">
      <VCard :key="i" v-for="i in 122" height="100" link>
        {{ i }}
      </VCard>
    </AppGridAutoCells>
  </AppBoxPageWrap>
</template>
