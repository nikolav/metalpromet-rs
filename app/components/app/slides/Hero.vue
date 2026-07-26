<script setup lang="ts">
import SLIDES from "~/assets/hero-slides.json";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    interval?: string | number | undefined;
    propsItem?: any;
  }>(),
  {
    interval: 5555,
  },
);

const { $$ } = useNuxtApp();

const slides = $$.shuffle(SLIDES);

// @@eos
</script>

<template>
  <AppGridStacked class="component-AppSlidesHero">
    <VCarousel
      cycle
      :interval="props.interval"
      :show-arrows="false"
      hide-delimiters
      continuous
      crossfade
      v-bind="$attrs"
    >
      <VCarouselItem
        v-for="slide in slides"
        :key="slide.src"
        :src="slide.src"
        cover
        transition="app-transition-cross-scale"
        v-bind="props.propsItem"
      />
    </VCarousel>

    <template #overlay>
      <h1 class="!bg-white/20">🚧 :slajdovi :hero</h1>
      <div>
        <p>Od ideje do realizacije, sve na jednom mestu!</p>
      </div>
    </template>
  </AppGridStacked>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
