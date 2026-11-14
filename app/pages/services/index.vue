<script setup lang="ts">
import { useDisplay } from "vuetify";

definePageMeta({
  context: {
    title: "pages.services.title",
    description: "pages.services.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti",
      "sr-cyrl": "/delatnosti",
      en: "/services",
    },
  },
});

const { $$ } = useNuxtApp();
const d = useDisplay();

const heightAppNavBar = computed(
  () => $$.config("layout.component.AppNavAppBar.height") ?? 0,
);

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--services">
    <!-- section: hero -->
    <AppGridStacked
      :props-stack="{
        class: 'position-relative',
      }"
      :style="{
        height: `calc(100dvh - ${heightAppNavBar}px)`,
      }"
    >
      <template #stack>
        <AppBoxHeroLine
          h2="Kompletno rešenje za metal"
          title="Delatnosti, usluge"
          subtitle="Od kapije do elektrane!"
        >
          <template #icon>
            <IconX icon="mdi:toolbox" size="2rem" class="opacity-[.33]" />
          </template>
        </AppBoxHeroLine>
      </template>
      <NuxtImg
        src="/images/stock/114.jpg"
        sizes="100vw sm:822px lg:1024px"
        class="w-100 fill-height object-[82%_top] object-cover"
      />
    </AppGridStacked>

    <AppSectionServicesIntro />

    <VSpacer class="mt-px" />
    <AppSectionServicesIndustryComponents />

    <VSpacer class="mt-px" />
    <AppSectionServicesConstruction />

    <VSpacer class="mt-px" />
    <AppSectionServicesCarpentry />

    <VSpacer class="mt-px" />
    <AppSectionServicesFinish />
  </AppBoxPageWrap>
</template>
