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
    class="component--AppSectionServicesIndustryComponents"
    title="Industrijska oprema • Komponente"
    subtitle="Izrada po meri za potrebe proizvodnog procesa"
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
      <IconX icon="mdi:factory" size="2rem" class="opacity-[.2]" />
    </template>
    <template #default="cx">
      <AppGridTwoCells
        invert
        :stack="d.mobile.value"
        :props-text="{
          class: !d.mobile.value ? 'overflow-y-auto' : undefined,
        }"
        :props-media="{
          class: d.mobile.value ? 'h-[255px]' : undefined,
        }"
        :style="{
          height: d.smAndUp.value
            ? `calc(100svh - ${appNavBarHeight}px - ${cx.titleSize.height ?? 0}px - 2rem)`
            : undefined,
        }"
      >
        <template #media>
          <NuxtImg
            src="/images/stock/005a.jpg"
            class="w-100 fill-height object-cover object-[right_bottom]"
            sizes="100vw sm:822px md:1024px"
          />
        </template>
        <template #text>
          <VCardText
            class="indent-4 space-y-4 pb-5"
            :class="[
              d.mdAndUp.value
                ? 'text-body-1 ps-10 pt-8'
                : 'text-body-2 ps-4 pt-4',
            ]"
          >
            <AppBoxCentered class="pa-2">
              <AppAvatarIcon :icon="{ icon: 'mdi:engine' }" />
            </AppBoxCentered>
            <p>
              Nudimo kompletan inženjering i izradu industrijske opreme i
              komponenti &dash; od projektovanja, preko nabavke materijala,
              zavarivanja i kontrole kvaliteta, do završne zaštite i montaže.
              Posedujemo kapacitete za izradu reaktora, rezervoara, cevovoda i
              čeličnih konstrukcija za potrebe prozivodnog procesa.
            </p>
            <template
              v-for="item in [
                {
                  title: 'Procesna oprema',
                  text: `Izrada rezervoara, reaktora voda, posuda i komponenti pod pritiskom prema zahtevima investitora.`,
                },
                {
                  title: 'Energetika',
                  text: `Izrada i remont čeličnih konstrukcija i opreme za termoelektrane i energetska postrojenja.`,
                },
                {
                  title: 'Industrijske konstrukcije',
                  text: `Projektovanje i izrada čeličnih i aluminijumskih konstrukcija, platformi, nostrešnica i nosećih čeličnih ramova.`,
                },
                {
                  title: 'Cevovodi i instalacije',
                  text: `Izrada i montaža cevovoda, procesnih instalacija i spojnih elemenata uz zavarivanje po važećim standardima.`,
                },
                {
                  title: 'Reparacije i rekonstrukcije',
                  text: `Popravke, ojačanja i rekonstrukcije postojeće industrijske opreme i konstrukcija, uz mogućnost demontaže, ponovne izrade i zaštite površina.`,
                },
              ]"
            >
              <AppBoxBase>
                <VCardTitle class="text-h6 text-center text-wrap">
                  {{ item.title }}
                </VCardTitle>
                <p v-html="item.text" />
              </AppBoxBase>
            </template>
          </VCardText>
        </template>
      </AppGridTwoCells>
      <VCardActions class="justify-center pa-5">
        <VBtn
          tile
          variant="tonal"
          elevation="1"
          class="px-4"
          :class="[!d.mobile.value ? 'scale-[111%]' : undefined]"
          size="large"
          :to="$localePath({ name: 'contact' })"
        >
          <template #prepend>
            <IconX
              icon="mdi:pipe-wrench"
              size="1.5rem"
              class="-translate-y-[2px] opacity-[.33]"
            />
          </template>
          Zatražite ponudu</VBtn
        >
      </VCardActions>
    </template>
  </AppSheetSectionRoot>
</template>
