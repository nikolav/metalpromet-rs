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

const d = useDisplay();
const { $$ } = useNuxtApp();

const heightAppNavAppBar = computed(() =>
  $$.config("layout.component.AppNavAppBar.height", 0),
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
        height: `calc(100svh - ${heightAppNavAppBar}px)`,
      }"
    >
      <template #stack>
        <AppBoxHeroLine
          h2="Kompletno rešenje za metal"
          title="Naše delatnosti i usluge"
          subtitle="Radimo sve od kapije do elektrane!"
        >
          <template #icon>
            <IconX icon="mdi:toolbox" size="2.22rem" class="opacity-[.33]" />
          </template>
        </AppBoxHeroLine>
        <VCardTitle
          class="font-weight-semibold text-end text-v-on-ui text-shadow-sm position-absolute inset-x-0 bottom-0 z-[1] !bg-gradient-to-t !from-v-ui/75 !to-v-ui/0"
        >
          <em>&ldquo;Ko dobro traži, dobro i nađe.&ldquo;</em>
        </VCardTitle>
      </template>
      <NuxtImg
        src="/images/stock/004.jpg"
        sizes="100vw sm:720px lg:1024px"
        class="w-100 fill-height object-cover object-right"
      />
    </AppGridStacked>

    <AppSectionServicesIntro
      :style="[
        !d.mobile.value
          ? {
              height: `calc(100svh - ${heightAppNavAppBar}px - 2rem)`,
            }
          : undefined,
      ]"
    />

    <VSpacer class="mt-12" />
    <AppSectionServicesModeling
      :style="[
        !d.mobile.value
          ? {
              height: `calc(100svh - ${heightAppNavAppBar}px - 2rem)`,
            }
          : undefined,
      ]"
    />

    <VSpacer class="mt-12" />
    <AppSectionServicesConstruction
      :style="[
        !d.mobile.value
          ? {
              height: `calc(100svh - ${heightAppNavAppBar}px - 2rem)`,
            }
          : undefined,
      ]"
    />

    <VSpacer class="mt-12" />
    <AppSectionServicesCarpentry
      :style="[
        !d.mobile.value
          ? {
              height: `calc(100svh - ${heightAppNavAppBar}px - 2rem)`,
            }
          : undefined,
      ]"
    />

    <VSpacer class="mt-12" />
    <AppSectionServicesFinish
      :style="[
        !d.mobile.value
          ? {
              height: `calc(100svh - ${heightAppNavAppBar}px - 2rem)`,
            }
          : undefined,
      ]"
    />
  </AppBoxPageWrap>
</template>
