<script setup lang="ts">
import { useDisplay } from "vuetify";

definePageMeta({
  layout: "default",
  i18n: {
    paths: {
      sr: "/dobrodosli",
      "sr-cyrl": "/dobrodosli",
      en: "/welcome",
    },
  },
  context: {
    title: "pages.index.title",
    description: "pages.index.description",
  },
});

const d = useDisplay();
const { $$ } = useNuxtApp();
const H = computed(() =>
  d.smAndUp.value
    ? `calc(100vh - ${$$.config("layout.component.AppNavAppBar.height")!}px)`
    : 345,
);

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--index">
    <AppSlidesHero :height="H" />
    <AppBoxContainerCentered>
      <div>
        <h2>sekcije sajta, @TODO</h2>
        <ul>
          <li>HERO</li>
          <li>kratko o nama</li>
          <li>delatnoasti</li>
          <li>radovi (galerija)</li>
          <li>zašto baš mi? (trust seo)</li>
          <li>kontakt</li>
        </ul>
      </div>
    </AppBoxContainerCentered>
    <AppCardMetalprometInfo />
  </AppBoxPageWrap>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
