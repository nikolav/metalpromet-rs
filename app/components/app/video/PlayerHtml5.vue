<script setup lang="ts">
const props = defineProps<{
  sources: { src: string; type: string; size?: number }[];
  propsFrame?: any;
}>();

// @@eos
</script>

<template>
  <video
    playsinline
    controls
    preload="metadata"
    :data-title="props.propsFrame.title"
    crossorigin="anonymous"
    v-bind="props.propsFrame"
  >
    <source
      :key="s.src"
      v-for="s in props.sources"
      :src="s.src"
      :type="s.type"
    />
  </video>
</template>
