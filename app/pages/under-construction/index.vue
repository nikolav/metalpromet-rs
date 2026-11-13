<script setup lang="ts">
definePageMeta({
  layout: "default",
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <VSpacer class="mt-1" />
    <AppSheetSectionRoot
      title="Lorem"
      subtitle="lorem ipsum"
      :props-item="{
        class: 'pb-2',
      }"
    >
      <template #icon> 🚧 </template>
      <AppGridTwoCells>
        <template #text>-text-</template>
        <template #media>-media-</template>
      </AppGridTwoCells>
    </AppSheetSectionRoot>
  </AppBoxPageWrap>
</template>
