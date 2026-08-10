<script setup lang="ts">
import { useDisplay } from "vuetify";

import SLIDES from "~/assets/hero-slides.json";
import { useCycleItems } from "~/composables/utils/use-cycle-items";
import { onDebug } from "~/utils/on-debug";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    interval?: string | number | undefined;
    propsItem?: any;
    cta?: string;
  }>(),
  {
    interval: 8901,
    cta: "Započnimo saradnju",
  },
);

const d = useDisplay();

const { t } = useI18n();
const localePath = useLocalePath();

const { $$ } = useNuxtApp();

const ctrl = useCycleItems(
  $$.shuffle(SLIDES.filter((node) => true === node.show)),
  {
    key: (node) => node.src,
  },
);

watch(ctrl.current, (slide) => {
  onDebug({ "hero:slide": slide });
});

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
      :model-value="ctrl.currentKey.value"
      v-bind="$attrs"
      @update:model-value="ctrl.active"
    >
      <VCarouselItem
        v-for="slide in ctrl.items"
        :key="slide.src"
        :src="slide.src"
        :value="slide.src"
        cover
        transition="app-transition-cross-scale"
        v-bind="props.propsItem"
      />
    </VCarousel>

    <template #stack>
      <!-- header line -->
      <VCard
        color="rgba(var(--v-theme-ui), .88)"
        tile
        elevation="1"
        class="!grow-0 !text-v-on-ui backdrop-blur-sm"
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
        v-if="ctrl.current"
        tile
        elevation="1"
        class="text-center !text-v-on-ui backdrop-blur-sm"
        color="rgba(var(--v-theme-ui), .66)"
      >
        <IconX
          v-if="d.smAndUp.value"
          :icon="ctrl.current.value?.icon"
          size="1.88rem"
          class="opacity-25 position-absolute top-[50%] -translate-y-[50%] start-5 z-[1]"
        />
        <VCardTitle class="text-shadow-sm">
          <em>{{ ctrl.current.value?.title }}</em></VCardTitle
        >
        <VCardText v-if="d.smAndUp.value">{{
          ctrl.current.value?.description
        }}</VCardText>
      </VCard>
      <AppBoxBase class="d-flex justify-end pa-1">
        <VBtn
          @click="ctrl.prev"
          color="white"
          variant="plain"
          icon
          rounded="circle"
        >
          <IconX size="2rem" icon="$prev" class="*:!filter-shadow-sharp" />
        </VBtn>
        <VBtn
          @click="ctrl.next"
          color="white"
          variant="plain"
          icon
          rounded="circle"
        >
          <IconX size="2rem" icon="$next" class="*:!filter-shadow-sharp" />
        </VBtn>
      </AppBoxBase>

      <!-- cta -->
      <VSpacer />
      <VCardActions
        class="!grow-0"
        :class="[d.smAndUp.value ? 'mb-20' : 'mb-5']"
      >
        <VSpacer />
        <VBtn
          variant="elevated"
          class="text-shadow-sm !text-v-on-ui px-4"
          :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
          size="x-large"
          color="ui"
          :to="localePath({ name: 'contact' })"
        >
          <strong class="text-[122%] me-3">🤝</strong>
          {{ t(props.cta) }}</VBtn
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
