<script setup lang="ts">
const props = defineProps<{
  sources: { src: string }[];
  propsFrame?: any;
}>();

const { $$ } = useNuxtApp();

// src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;"
// @@eos
</script>

<template>
  <AppBoxBase class="plyr__video-embed">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${$$.get(props.sources, '0.src')}?playsinline=1&modestbranding=1&rel=0&enablejsapi=1&iv_load_policy=3&showinfo=0&origin=${encodeURIComponent($$.config('public.siteUrl') ?? '')}`"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
      v-bind="props.propsFrame"
    />
  </AppBoxBase>
</template>
