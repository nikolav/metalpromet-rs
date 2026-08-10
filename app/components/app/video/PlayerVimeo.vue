<script setup lang="ts">
const props = defineProps<{
  // 76979871
  sources: { src: string }[];
  propsFrame?: any;
}>();

const { $$ } = useNuxtApp();

// @@eos
</script>

<template>
  <AppBoxBase class="plyr__video-embed">
    <iframe
      :src="`https://player.vimeo.com/video/${$$.get(props.sources, '0.src')}??byline=0&portrait=0&title=0&loop=0&transparent=0&dnt=1&speed=1&gesture=media&origin=${encodeURIComponent($$.config('public.siteUrl') ?? '')}`"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
      frameborder="0"
      v-bind="props.propsFrame"
    />
  </AppBoxBase>
</template>
