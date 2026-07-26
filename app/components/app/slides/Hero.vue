<script setup lang="ts">
import { useDisplay } from "vuetify";
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

const d = useDisplay();

const { $$ } = useNuxtApp();

const slides = $$.shuffle(SLIDES);

// @@eos
</script>

<template>
  <AppGridStacked
    class="component-AppSlidesHero"
    :props-stack="{
      class: 'flex flex-col justify-between',
    }"
  >
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

    <template #stack>
      <VCard
        color="rgba(var(--v-theme-primary-variant), .82)"
        tile
        elevation="1"
        class="!grow-0 !text-v-on-primary"
      >
        <VCardText class="text-center">
          <h1>
            Metal-Promet
            <template v-if="d.smAndUp.value">
              - <em>Od ideje do realizacije.</em></template
            >
          </h1>
          <template v-if="d.smAndUp.value">
            <p class="text-body-1 max-w-md mx-auto">
              Nemojte tražiti bravara, farbera i projektanta posebno. <br />
              Mi smo sve to na jednom mestu!
            </p>
          </template>
        </VCardText>
      </VCard>
      <VCardActions
        class="!grow-0"
        :class="[d.smAndUp.value ? 'mb-20' : 'mb-5']"
      >
        <VSpacer />
        <AppVBtn size="x-large" color="primary-variant"
          >Zatražite ponudu</AppVBtn
        >
        <VSpacer />
      </VCardActions>
    </template>
  </AppGridStacked>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
