<script setup lang="ts">
definePageMeta({
  layout: "default",
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <AppBoxContainerCentered fluid>
      <AppGridAutoCells :cell-width="100">
        <VCard height="100" v-for="i in 122">
          {{ i }}
        </VCard>
      </AppGridAutoCells>
    </AppBoxContainerCentered>
  </AppBoxPageWrap>
</template>
