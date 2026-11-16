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
    <AppSheetSectionRoot
      title="Metal-Promet"
      subtitle="Kompletno rešenje za metal"
      :border="0"
      :props-item="{
        class: 'pb-2',
      }"
      :props-title="{
        class: d.mobile.value ? 'text-h6' : 'text-h4',
      }"
      :props-subtitle="{
        class: d.mobile.value ? 'text-body-1' : 'text-h6',
      }"
    >
      <template v-if="d.smAndUp.value" #icon>
        <IconX
          icon="mdi:package-variant-closed-check"
          size="2rem"
          class="opacity-[.2]"
        />
      </template>
      <template #default="cx">
        <AppGridCellsTwoByTwo
          :stack="!d.smAndUp.value"
          :style="[
            d.smAndUp.value
              ? {
                  height: `calc(100svh - ${heightAppNavBar}px - ${cx.titleSize.height ?? 0}px)`,
                }
              : undefined,
          ]"
          :props-cells="{
            class: !d.smAndUp.value ? 'h-[55svh]' : undefined,
          }"
        >
          <template #top-left>
            <VCard
              class="fill-height !text-v-on-ui text-shadow-md"
              tile
              variant="flat"
              :to="$localePath({ name: 'services-engineering' })"
            >
              <AppGridStackedFrames class="fill-height">
                <AppGridStackedFramesItem
                  class="z-[1] bg-gradient-to-t !from-v-ui !to-v-ui/25 d-flex flex-col cursor-pointer pb-16"
                >
                  <VSpacer />
                  <VCardTitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h4' : 'text-h5']"
                    >Industrijska oprema</VCardTitle
                  >
                  <VCardSubtitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h6' : 'text-body-1']"
                    >Izrada po meri za potrebe proizvodnog
                    procesa</VCardSubtitle
                  >
                </AppGridStackedFramesItem>
                <AppGridStackedFramesItem>
                  <NuxtImg
                    src="/images/stock/119.jpg"
                    class="w-100 fill-height object-cover"
                    sizes="100vw sm:480px md:822px"
                  />
                </AppGridStackedFramesItem>
              </AppGridStackedFrames>
            </VCard>
          </template>
          <template #top-right>
            <VCard
              class="fill-height !text-v-on-ui text-shadow-md"
              tile
              variant="flat"
              :to="$localePath({ name: 'services-constructions' })"
            >
              <AppGridStackedFrames class="fill-height">
                <AppGridStackedFramesItem
                  class="z-[1] bg-gradient-to-t !from-v-ui !to-v-ui/25 d-flex flex-col cursor-pointer pb-16"
                >
                  <VSpacer />
                  <VCardTitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h4' : 'text-h5']"
                    >Metalne konstrukcije</VCardTitle
                  >
                  <VCardSubtitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h6' : 'text-body-1']"
                    >Gde metal dobija oblik</VCardSubtitle
                  >
                </AppGridStackedFramesItem>
                <AppGridStackedFramesItem>
                  <NuxtImg
                    src="/images/stock/120.jpg"
                    class="w-100 fill-height object-cover *object-[left_top] -scale-x-100"
                    sizes="100vw sm:480px md:822px"
                  />
                </AppGridStackedFramesItem>
              </AppGridStackedFrames>
            </VCard>
          </template>
          <template #bottom-left>
            <VCard
              class="fill-height !text-v-on-ui text-shadow-md"
              tile
              variant="flat"
              :to="$localePath({ name: 'services-products' })"
            >
              <AppGridStackedFrames class="fill-height">
                <AppGridStackedFramesItem
                  class="z-[1] bg-gradient-to-t !from-v-ui !to-v-ui/25 d-flex flex-col cursor-pointer pb-16"
                >
                  <VSpacer />
                  <VCardTitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h4' : 'text-h5']"
                    >Ogradni sistemi</VCardTitle
                  >
                  <VCardSubtitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h6' : 'text-body-1']"
                    >Vaš prostor, naša briga</VCardSubtitle
                  >
                </AppGridStackedFramesItem>
                <AppGridStackedFramesItem>
                  <NuxtImg
                    src="/images/stock/083.jpg"
                    class="w-100 fill-height object-cover *object-[left_top] -scale-x-100"
                    sizes="100vw sm:480px md:712px"
                  />
                </AppGridStackedFramesItem>
              </AppGridStackedFrames>
            </VCard>
          </template>
          <template #bottom-right>
            <VCard
              class="fill-height !text-v-on-ui text-shadow-md"
              tile
              variant="flat"
              :to="$localePath({ name: 'services-finish' })"
            >
              <AppGridStackedFrames class="fill-height">
                <AppGridStackedFramesItem
                  class="z-[1] bg-gradient-to-t !from-v-ui !to-v-ui/25 d-flex flex-col cursor-pointer pb-16"
                >
                  <VSpacer />
                  <VCardTitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h4' : 'text-h5']"
                    >Plastifikacija</VCardTitle
                  >
                  <VCardSubtitle
                    class="text-wrap text-center"
                    :class="[d.mdAndUp.value ? 'text-h6' : 'text-body-1']"
                    >Čuvamo ono što stvaramo</VCardSubtitle
                  >
                </AppGridStackedFramesItem>
                <AppGridStackedFramesItem>
                  <NuxtImg
                    src="/images/stock/122.jpg"
                    class="w-100 fill-height object-cover object-[center_25%]"
                    sizes="100vw sm:480px md:822px"
                  />
                </AppGridStackedFramesItem>
              </AppGridStackedFrames>
            </VCard>
          </template>
        </AppGridCellsTwoByTwo>
      </template>
    </AppSheetSectionRoot>

    <AppSectionServicesIntro />
  </AppBoxPageWrap>
</template>
