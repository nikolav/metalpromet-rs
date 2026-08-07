<script setup lang="ts">
const props = defineProps<{
  sources: { src: string; type: string; size?: number }[];
  propsIframe?: any;
}>();

// @@eos
</script>

<template>
  <video
    playsinline
    controls
    preload="metadata"
    :data-title="props.propsIframe.title"
    crossorigin="anonymous"
  >
    <source v-for="s in props.sources" :src="s.src" :type="s.type" />
  </video>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
