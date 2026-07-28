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
    interval: 9012,
  },
);

const d = useDisplay();

const { t } = useI18n();
const localePath = useLocalePath();

const { $$ } = useNuxtApp();

const slides = $$.shuffle(SLIDES);

const currentSlide = ref<any>();

const updateModelValue = (i: unknown) => {
  currentSlide.value = $$.get(slides, `[${i}]`);
};

// @@eos
</script>

<template>
  <AppGridStacked
    class="component-AppSlidesHero"
    :props-stack="{
      class: 'flex flex-col *justify-between',
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
      @update:model-value="updateModelValue"
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
      <!-- header line -->
      <VCard
        color="rgba(var(--v-theme-primary-variant), .88)"
        tile
        elevation="1"
        class="!grow-0 !text-v-on-primary backdrop-blur-sm"
      >
        <VCardText class="text-center">
          <h1 class="text-shadow-sm">
            {{ t("Metal-Promet") }}
            <template v-if="d.smAndUp.value">
              - <em>{{ t("Od ideje do realizacije.") }}</em></template
            >
          </h1>
          <template v-if="d.smAndUp.value">
            <p class="*text-body-1 max-w-md mx-auto !text-[122%]">
              {{ t("Nemojte tražiti bravara, farbera i projektanta posebno.") }}
              <br />
              {{ t("Mi smo sve to na jednom mestu!") }} 📦
            </p>
          </template>
        </VCardText>
      </VCard>

      <!-- druga linija; delatnost i opis  -->
      <VCard
        v-if="currentSlide"
        tile
        elevation="1"
        class="text-center text-background backdrop-blur-sm"
        color="rgba(var(--v-theme-on-background), .66)"
      >
        <IconX
          v-if="d.smAndUp.value"
          :icon="currentSlide.icon"
          size="1.88rem"
          class="opacity-25 position-absolute top-[50%] -translate-y-[50%] start-5 z-[1]"
        />
        <VCardTitle class="text-shadow-sm">
          <em>{{ currentSlide.title }}</em></VCardTitle
        >
        <VCardText v-if="d.smAndUp.value">{{
          currentSlide.description
        }}</VCardText>
      </VCard>

      <!-- cta -->
      <VSpacer />
      <VCardActions
        class="!grow-0"
        :class="[d.smAndUp.value ? 'mb-20' : 'mb-5']"
      >
        <VSpacer />
        <AppVBtn
          class="text-shadow-sm"
          :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
          size="x-large"
          color="primary-variant"
          :to="localePath({ name: 'contact' })"
        >
          <strong class="text-[122%] me-3">🤝</strong>
          {{ t("Započnimo saradnju") }}</AppVBtn
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
