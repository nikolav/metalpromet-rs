<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
definePageMeta({
  layout: "default",
  i18n: {
    paths: {
      sr: "/projekti/industrija/krusevac/reaktor-otpadnih-voda",
      "sr-cyrl": "/projekti/industrija/krusevac/reaktor-otpadnih-voda",
      en: "/projects/industry/krusevac/water-cleaning-reactor",
    },
  },
  context: {
    title: "pages.projects-industry-krusevac-water-cleaning-reactor.title",
    description:
      "pages.projects-industry-krusevac-water-cleaning-reactor.description",
  },
});

const { $$ } = useNuxtApp();

const appNavHeight = computed(() =>
  $$.config("layout.component.AppNavAppBar.height"),
);

// @@eos
</script>

<template>
  <AppBoxPageWrap
    class="page--projects-industry-krusevac-water-cleaning-reactor"
  >
    <template
      :key="item.title"
      v-for="(item, idx) in [
        {
          title: 'foo-1',
        },
        {
          title: 'foo-2',
        },
        {
          title: 'foo-3',
        },
      ]"
    >
      <VCard tile :color="!$$.isOdd(idx) ? undefined : 'surface-variant'">
        <AppGridTwoCells
          :invert="!$$.isOdd(idx)"
          :style="[{ height: `calc(99dvh - ${appNavHeight ?? 0}px - 2rem)` }]"
        >
          <template #media>2</template>
          <template #text>1</template>
        </AppGridTwoCells>
      </VCard>
    </template>
  </AppBoxPageWrap>
</template>
