<script setup lang="ts">
import { IconX } from "#components";

definePageMeta({
  context: {
    title: "pages.projects.title",
    description: "pages.projects.description",
  },
  layout: "default",
  i18n: {
    // locales: ["sr", "en"],
    paths: {
      sr: "/projekti",
      "sr-cyrl": "/projekti",
      en: "/projects",
    },
  },
});

const { $$ } = useNuxtApp();

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--projects">
    <AppGridStacked
      class="!bg-sky-200"
      :props-stack="{
        class: 'position-relative',
      }"
      :style="{
        height: `calc(100vh - ${$$.config('layout.component.AppNavAppBar.height')}px)`,
      }"
    >
      <template #stack>
        <AppBoxHeroLine
          h2="Izrada i montaža metalnih konstrukcija i plastifikacija"
          title="Naši projekti"
          subtitle="Pregled radova u Srbiji i inostranstvu."
        >
          <template #icon>
            <IconX
              icon="mdi:eiffel-tower"
              size="2.22rem"
              class="opacity-[.33]"
            />
          </template>
        </AppBoxHeroLine>
        <VCardTitle
          class="font-weight-semibold text-end text-v-on-ui text-shadow-sm position-absolute inset-x-0 bottom-0 z-[1] !bg-gradient-to-t !from-v-ui/50 !to-v-ui/0"
        >
          <em>&ldquo;Ne gledaj u reč, nego u delo&ldquo;</em>
        </VCardTitle>
      </template>
      <NuxtImg
        src="/images/stock/002.jpg"
        sizes="100vw sm:720px lg:1024px"
        class="w-full fill-height object-cover"
      />
    </AppGridStacked>
    <VSpacer class="mt-12" />
    <h2 class="text-center">strana:projekti 🚧</h2>
    <VList
      :items="[
        {
          title: 'OGRADE, KAPIJE I OGRADNI SISTEMI',
          props: {
            subtitle:
              'kuce i luksuzne vile u u regionu Sumadije centralne Srbije',
          },
        },
        {
          title: 'KONSTRUKCIJE I NOSAČI',
          props: {
            subtitle: 'industrijski i stambeni objekti na teritoriji srije',
          },
        },
        {
          title: 'USLUGE ZAVRŠNE OBRADE METALA',
          props: {
            subtitle: 'za klijente iz cele srbije',
          },
        },
        {
          title: 'INDUSTRIJSKA OPREMA I MAŠINSTVO',
          props: {
            subtitle: 'srbija i inostranstvo',
          },
        },
        {
          title: 'PROIZVODI PO MERI',
          props: {
            subtitle: 'izrada i montaza metalnih delova i galanterije',
          },
        },
      ]"
    />
  </AppBoxPageWrap>
</template>
