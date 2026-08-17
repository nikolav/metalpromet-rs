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
    <AppGridStackedFrames class="h-[255px]">
      <AppGridStackedFramesItem>
        <NuxtImg
          src="/logo.jpg"
          class="w-full fill-height object-cover opacity-20"
        />
      </AppGridStackedFramesItem>
      <AppGridStackedFramesItem>
        1
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>
  </AppBoxPageWrap>
</template>
