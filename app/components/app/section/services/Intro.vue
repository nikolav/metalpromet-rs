<script setup lang="ts">
import { useDisplay } from "vuetify";

const { $$ } = useNuxtApp();
const d = useDisplay();

const appNavBarHeight = computed(
  () => $$.config("layout.component.AppNavAppBar.height") ?? 0,
);

// @@eos
</script>

<template>
  <AppSheetSectionRoot
    class="component--AppSectionServicesIntro"
    title="Vaš partner u obradi metala"
    subtitle="Od projektovanja do gotovog proizvoda"
    :props-title="{
      class: `text-wrap ${d.mobile.value ? 'text-h5' : 'text-h4'}`,
    }"
    :props-subtitle="{
      class: `text-wrap ${d.mobile.value ? '' : 'text-h6'}`,
    }"
    :props-item="{
      class: 'pb-2',
    }"
  >
    <template v-if="d.smAndUp.value" #icon>
      <IconX
        icon="local:certificate-trusted"
        size="2rem"
        class="opacity-[.2]"
      />
    </template>
    <template #default="cx">
      <AppGridStackedFrames
        :style="{
          height: `calc(100svh - ${appNavBarHeight}px)`,
        }"
      >
        <AppGridStackedFramesItem
          class="z-[1] bg-gradient-to-t !from-[rgb(var(--v-theme-ui))] !to-transparent d-flex flex-col"
        >
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <AppBoxContainerCentered
            class="text-v-on-ui text-shadow-md space-y-5"
            :class="{ 'pb-5': d.mobile.value }"
          >
            <VCardTitle
              class="text-h3 text-wrap"
              :class="{
                'text-h5 text-center': !d.smAndUp.value,
              }"
              >Od ideje do montaže</VCardTitle
            >
            <VCardText
              class="text-h4 indent-4"
              :class="{ 'text-h6': !d.smAndUp.value }"
            >
              Sa više od tri decenije iskustva u obradi metala i
              plastificiranju, nudimo kompletne usluge u metaloprerađivačkoj
              industriji &dash; sve pod jednim krovom.
            </VCardText>
            <VCardActions class="justify-center">
              <AppBtnCtaContact color="primary">
                <template #prepend>
                  <strong class="text-[150%]">🤝</strong>
                </template>
              </AppBtnCtaContact>
            </VCardActions>
          </AppBoxContainerCentered>
          <VSpacer v-if="!d.mobile.value" />
        </AppGridStackedFramesItem>
        <AppGridStackedFramesItem>
          <NuxtImg
            src="/images/stock/115.jpg"
            class="w-100 fill-height object-cover"
            sizes="100vw sm:822px md:1024px"
          />
        </AppGridStackedFramesItem>
      </AppGridStackedFrames>
      <AppGridStackedFrames
        :style="{
          height: `calc(100svh - ${appNavBarHeight}px)`,
        }"
      >
        <AppGridStackedFramesItem
          class="z-[1] bg-gradient-to-t !from-[rgb(var(--v-theme-ui))] !to-transparent d-flex flex-col"
        >
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <AppBoxContainerCentered
            class="text-v-on-ui text-shadow-md space-y-5"
            :class="{ 'pb-5': d.mobile.value }"
          >
            <VCardTitle
              class="text-h3 text-wrap"
              :class="{
                'text-h5 text-center': !d.smAndUp.value,
              }"
              >Precizna proizvodnja</VCardTitle
            >
            <VCardText
              class="text-h4 indent-4"
              :class="{ 'text-h6': !d.smAndUp.value }"
            >
              U radionici CNC mašinama obrađujemo metal, a naši majstori
              zavarivanjem spajaju industrijsku opremu i konstrukcije.
            </VCardText>
            <VCardActions class="justify-center">
              <AppBtnCtaContact color="primary">
                <template #prepend>
                  <IconX
                    icon="mdi:pipe-wrench"
                    size="2rem"
                    class="opacity-[.2]"
                  />
                </template>
                <span>Zatražite ponudu</span>
              </AppBtnCtaContact>
            </VCardActions>
          </AppBoxContainerCentered>
          <VSpacer v-if="!d.mobile.value" />
        </AppGridStackedFramesItem>
        <AppGridStackedFramesItem>
          <NuxtImg
            src="/images/stock/116.jpg"
            class="w-100 fill-height object-cover"
            :class="{ 'object-[66%]': !d.mdAndUp.value }"
            sizes="100vw sm:822px md:1024px"
          />
        </AppGridStackedFramesItem>
      </AppGridStackedFrames>
      <AppGridStackedFrames
        :style="{
          height: `calc(100svh - ${appNavBarHeight}px)`,
        }"
      >
        <AppGridStackedFramesItem
          class="z-[1] bg-gradient-to-t !from-[rgb(var(--v-theme-ui))] !to-transparent d-flex flex-col"
        >
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <AppBoxContainerCentered
            class="text-v-on-ui text-shadow-md space-y-5"
            :class="{ 'pb-5': d.mobile.value }"
          >
            <VCardTitle
              class="text-h3 text-wrap"
              :class="{
                'text-h5 text-center': !d.smAndUp.value,
              }"
              >Priprema i završna obrada</VCardTitle
            >
            <VCardText
              class="text-h4 indent-4"
              :class="{ 'text-h6': !d.smAndUp.value }"
            >
              Proizvode hemijski tretiramo i peskarimo, zatim ih plastificiramo
              u velikoj peći &dash; birajući boju iz preko 200 RAL nijansi, od
              antracita do sjajnih metalik tonova.
            </VCardText>
            <VCardActions class="justify-center">
              <AppBtnCtaContact color="primary">
                <template #prepend>
                  <IconX icon="mdi:security" size="2rem" class="opacity-[.2]" />
                </template>
                <span>Zakažite uslugu</span>
              </AppBtnCtaContact>
            </VCardActions>
          </AppBoxContainerCentered>
          <VSpacer v-if="!d.mobile.value" />
        </AppGridStackedFramesItem>
        <AppGridStackedFramesItem>
          <NuxtImg
            src="/images/stock/117.jpg"
            class="w-100 fill-height object-cover"
            :class="{ 'object-[40%]': !d.mdAndUp.value }"
            sizes="100vw sm:822px md:1024px"
          />
        </AppGridStackedFramesItem>
      </AppGridStackedFrames>
      <AppGridStackedFrames
        :style="{
          height: `calc(100svh - ${appNavBarHeight}px)`,
        }"
      >
        <AppGridStackedFramesItem
          class="z-[1] bg-gradient-to-t !from-[rgb(var(--v-theme-ui))] !to-transparent d-flex flex-col"
        >
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <VSpacer />
          <AppBoxContainerCentered
            class="text-v-on-ui text-shadow-md space-y-5"
            :class="{ 'pb-5': d.mobile.value }"
          >
            <VCardTitle
              class="text-h3 text-wrap"
              :class="{
                'text-h5 text-center': !d.smAndUp.value,
              }"
              >Montaža na licu mesta</VCardTitle
            >
            <VCardText
              class="text-h4 indent-4"
              :class="{ 'text-h6': !d.smAndUp.value }"
            >
              Na kraju, naš tim montira gotov proizvod na vašoj lokaciji &dash;
              u Srbiji ili inostranstvu &dash; i predaje vam ključeve.
            </VCardText>
            <VCardActions class="justify-center">
              <AppBtnCtaContact color="primary">
                <template #prepend>
                  <IconX icon="mdi:wrench" size="2rem" class="opacity-[.2]" />
                </template>
                <span>Zakažite montažu</span>
              </AppBtnCtaContact>
            </VCardActions>
          </AppBoxContainerCentered>
          <VSpacer v-if="!d.mobile.value" />
        </AppGridStackedFramesItem>
        <AppGridStackedFramesItem>
          <NuxtImg
            src="/images/stock/118.jpg"
            class="w-100 fill-height object-cover"
            sizes="100vw sm:822px md:1024px"
          />
        </AppGridStackedFramesItem>
      </AppGridStackedFrames>
    </template>
  </AppSheetSectionRoot>
</template>
