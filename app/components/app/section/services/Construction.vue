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
    title="Konstrukcije • Nosači"
    subtitle="Gde metal dobija oblik"
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
        icon="material-symbols:home-outline"
        size="2rem"
        class="opacity-[.2]"
      />
    </template>
    <template #default="cx">
      <AppGridTwoCells
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
            src="/images/stock/007a.jpg"
            class="w-100 fill-height object-cover object-[left_top]"
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
              <AppAvatarIcon
                :icon="{
                  icon: 'mdi:wrench-outline',
                }"
              />
            </AppBoxCentered>
            <p>
              Od najjednostavnije ograde do složenih nosivih konstrukcija, naši
              majstori vladaju svim tehnikama. Svaki šav je čist, pravilan i
              jači od samog metala. Aluminijumske konstrukcije su nam posebno
              drage &dash; lake su, moderne i ne rđaju.
            </p>
            <template
              v-for="item in [
                {
                  title: 'Čeliče konstrukcije',
                  text: `Postavljanje nosivih okvira za hale, mostove i nadstrešnice &dash; sve što zahteva snagu i stabilnost. Naši timovi za montažu rade širom Srbije i Evrope, sa garancijom da sve stoji čvrsto kao kamen.`,
                },
                {
                  title: 'Aluminijumske konstrukcije',
                  text: `Lake, izdržljive i nerđajuće &dash; savršene za moderne ograde i kapije koje traju bez održavanja. Aluminijum je materijal budućnosti, a mi ga obrađujemo kao specijalnost &dash; jer to i jeste.`,
                },
                {
                  title: 'Zavarivanje',
                  text: `Spajanje metala na način koji je jači od samog metala. Naši zavarivači su majstori svog zanata &dash; svaki šav je čist, pravilan i siguran. Bilo da je reč o tankom aluminijumskom profilu ili debelom čeličnom nosaču, kvalitet zavara je neupitan.`,
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
