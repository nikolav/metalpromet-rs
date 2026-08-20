<script setup lang="ts">
definePageMeta({
  layout: "default",
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <AppSlideItemsStacked
      show-arrows="never"
      :cell-min-height="240"
      :cell-width="320"
      :items="Array.from({ length: 55 }, (_, i) => ({ i }))"
      :props-container="{
        style: { height: `calc(100vh - 122px)` },
      }"
    >
      <template #item="ctx">
        <VCard class="fill-height">{{ ctx.item.i }}</VCard>
      </template>
    </AppSlideItemsStacked>
  </AppBoxPageWrap>
</template>
