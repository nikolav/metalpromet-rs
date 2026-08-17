<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useCycleItems } from "~/composables/utils/use-cycle-items";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

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

const d = useDisplay();
const { $$ } = useNuxtApp();

const ctrlFrames = useCycleItems(
  $$.shuffle([
    {
      key: "BUh6hnBsD90cx7PNN",
      image: "/images/stock/013.jpg",
    },
    {
      key: "q0VgXLb7h0fYvjvV",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.02.jpg",
    },
    {
      key: "oGkSL70",
      image: "/images/hero/1-projektovanje/photorealistic-render.02.jpg",
    },
    {
      key: "nJkfDNkLnsuNKBSo",
      image: "/images/hero/2-bravarija-konstrukcije/constructions.01.jpg",
    },
    {
      key: "OjMdX9s5",
      image: "/images/hero/2-bravarija-konstrukcije/constructions.02.jpg",
    },
    {
      key: "rhrrbmqaRcqNab",
      image: "/images/hero/2-bravarija-konstrukcije/constructions.03.jpg",
    },
    {
      key: "jQLNsu7izxH1",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.04.jpg",
    },
    {
      key: "lmzw991",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.01.jpg",
    },
    {
      key: "rFX0wkTuRsG5",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.03.jpg",
    },
    {
      key: "zq4CYTSz",
      image: "/images/hero/3-stolarija-ograde-oprema/alu-stairs.01.jpg",
    },
    {
      key: "vlfWjxMj",
      image: "/images/hero/3-stolarija-ograde-oprema/canopy.01.jpg",
    },
    {
      key: "5y1ixk0jH",
      image: "/images/hero/3-stolarija-ograde-oprema/canopy.02.jpg",
    },
    {
      key: "oB1OnY1V2nQ7H",
      image: "/images/hero/3-stolarija-ograde-oprema/equipment.01.jpg",
    },
    {
      key: "OJGh8Fac7Rp4KFtD",
      image: "/images/hero/3-stolarija-ograde-oprema/stainless.01.jpg",
    },
    {
      key: "i3KfVco0NuIhFZIM6E0",
      image: "/images/stock/032.jpg",
    },
    {
      key: "HQsRp",
      image: "/images/stock/011.jpg",
    },
    {
      key: "7Wppx3ZTxC0yz83sC5",
      image: "/images/slides/gotovi-proizvodi/002.jpg",
    },
    {
      key: "PLzMe6A3tRbfXIAF",
      image: "/images/slides/gotovi-proizvodi/008.jpg",
    },
    {
      key: "SmDQYTtM01Sm55NSlOj",
      image: "/images/slides/history/006.jpg",
    },
    {
      key: "xND7UUjwCMq",
      image: "/images/slides/proizvodnja/002.jpg",
    },
    {
      key: "yDR7CVcmat0Q",
      image: "/images/slides/proizvodnja/007.jpg",
    },
    {
      key: "EWrT0TUngPNF",
      image: "/images/slides/proizvodnja/008.jpg",
    },
    {
      key: "8udUa",
      image: "/images/slides/proizvodnja/009.jpg",
    },
    {
      key: "MO5XGw5049A9lE",
      image: "/images/stock/033.jpg",
    },
    {
      key: "WlCEdb0MCkEcf",
      image: "/images/stock/034.jpg",
    },
    {
      key: "516cIoSjEq1TNspbup",
      image: "/images/stock/035.jpg",
    },
    {
      key: "jesLUnG",
      image: "/images/stock/036.jpg",
    },
    {
      key: "S0Qdw",
      image: "/images/stock/037.jpg",
    },
    {
      key: "IP9ML",
      image: "/images/stock/039.jpg",
    },
    {
      key: "4t86asBwevwNhVdqZ6",
      image: "/images/stock/040.jpg",
    },
    {
      key: "1rFWsGsIA2IxTU7xTuW",
      image: "/images/stock/041.jpg",
    },
    {
      key: "LQr1OEKyz5wQg",
      image: "/images/stock/042.jpg",
    },
  ]),
  {
    key: (node) => node.key,
  },
);
const ctrlFinish = useCycleItems(
  $$.shuffle([
    {
      key: "UK7ttMu",
      image: "/images/hero/1-projektovanje/color-study.02.jpg",
    },
    {
      key: "czAwedZ4W",
      image: "/images/hero/1-projektovanje/color-study.01.jpg",
    },
    {
      key: "RZVimsdMiV",
      image: "/images/hero/4-zastita-i-obrada-povrsina/paint.02.jpg",
    },
    {
      key: "rqQtubK2OhPmcw6",
      image: "/images/hero/4-zastita-i-obrada-povrsina/cinkovanje.01.jpg",
    },
    {
      key: "hlwdDgN1HI",
      image: "/images/hero/4-zastita-i-obrada-povrsina/peskarenje.01.jpg",
    },
    {
      key: "r5QBUJVr3KJ7",
      image: "/images/hero/4-zastita-i-obrada-povrsina/paint.03.jpg",
    },
    {
      key: "pc8JOwXmE",
      image:
        "/images/hero/4-zastita-i-obrada-povrsina/elektrostatic-pain.01.jpg",
    },
    {
      key: "yDGH9kS6gp8V",
      image: "/images/stock/008.jpg",
    },
    {
      key: "FDMBY84Xlxr4",
      image: "/images/stock/012.jpg",
    },
    {
      key: "XIss2uiB1u9mzrQxQ",
      image: "/images/slides/zavrsna-obrada/003.jpg",
    },
    {
      key: "kgpOZ",
      image: "/images/slides/zavrsna-obrada/001.jpg",
    },
    {
      key: "TRG0IB",
      image: "/images/slides/zavrsna-obrada/002.jpg",
    },
    {
      key: "cUjNtBL006T4tJB",
      image: "/images/slides/zavrsna-obrada/004.jpg",
    },
    {
      key: "5rQ4cFD08lFlmLh6",
      image: "/images/slides/zavrsna-obrada/009.jpg",
    },
    {
      key: "g09eR",
      image: "/images/slides/zavrsna-obrada/008.jpg",
    },
    {
      key: "FAMIT2lEqSR",
      image: "/images/slides/zavrsna-obrada/006.jpg",
    },
    {
      key: "4L9alSkcG57",
      image: "/images/stock/043.jpg",
    },
    {
      key: "vzIWkV6CZKD",
      image: "/images/stock/044.jpg",
    },
    {
      key: "LuXr9FfbWYwGuHqYStp",
      image: "/images/stock/045.jpg",
    },
    {
      key: "ke1c5XLYsnh",
      image: "/images/stock/046.jpg",
    },
    {
      key: "1PwhQgNsa",
      image: "/images/stock/047.jpg",
    },
    {
      key: "EzMDLBMFCHaxz",
      image: "/images/stock/048.jpg",
    },
    {
      key: "AgCftcxZXsDm3VNNhk",
      image: "/images/stock/049.jpg",
    },
    {
      key: "wiaVxH",
      image: "/images/stock/050.jpg",
    },
    {
      key: "qbfbzE9",
      image: "/images/stock/051.jpg",
    },
    {
      key: "5sl5m3fMV",
      image: "/images/stock/052.jpg",
    },
    {
      key: "OepH95lDh445L",
      image: "/images/stock/053.jpg",
    },
    {
      key: "407IULFcn1OcWq8cx",
      image: "/images/stock/054.jpg",
    },
  ]),
  {
    key: (node) => node.key,
  },
);
const ctrlMachines = useCycleItems(
  $$.shuffle([
    { key: "iwXBi", image: "/images/stock/006.jpg" },
    { key: "cGfU7x", image: "/images/stock/021.jpg" },
    {
      key: "UUQhL0uYMlWta",
      image: "/images/hero/3-stolarija-ograde-oprema/stairs.02.jpg",
    },
    { key: "Iac0qeRBLk", image: "/images/slides/history/002.jpg" },
    { key: "0f6BtnhAFgrsC", image: "/images/slides/history/003.jpg" },
    {
      key: "xHB7DQFacHMX7GQofU9S",
      image: "/images/slides/proizvodnja/001.jpg",
    },
    { key: "Dr2X52i", image: "/images/slides/zavrsna-obrada/008.jpg" },
    { key: "q6iDpih", image: "/images/stock/055.jpg" },
    { key: "w2YUiwHq", image: "/images/stock/056.jpg" },
    { key: "GuEFiqtRSIUbu", image: "/images/stock/057.jpg" },
    { key: "F5SplzBsyVgu0YEL2y", image: "/images/stock/058.jpg" },
    { key: "UEuLoIv9", image: "/images/stock/044.jpg" },
    { key: "WIrOE02lNA2HvQebi51", image: "/images/stock/059.jpg" },
    { key: "wBgeS2aDO", image: "/images/stock/060.jpg" },
    { key: "Hvdl3bvKpDr", image: "/images/stock/061.jpg" },
    { key: "iNaNzd", image: "/images/stock/062.jpg" },
  ]),
  {
    key: (node) => node.key,
  },
);

const ctrl = useCycleItems(
  $$.shuffle([
    { key: "8tcuT45t", image: "/images/stock/007.jpg" },
    {
      key: "iO3ebuoni372",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.02.jpg",
    },
    {
      key: "AkYh5XefSnK",
      image: "/images/hero/2-bravarija-konstrukcije/smith.02.jpg",
    },
    {
      key: "Zzqtu8nX0bDEAc9PR",
      image: "/images/hero/2-bravarija-konstrukcije/smith.01.jpg",
    },
    {
      key: "Rm1hTfg4wlDlkVt",
      image: "/images/hero/2-bravarija-konstrukcije/smith.03.jpg",
    },
    {
      key: "o24NXOwgENQ9o1ubt",
      image: "/images/hero/3-stolarija-ograde-oprema/alu-fences.01.jpg",
    },
    {
      key: "gejIUnc8PdvFzioTd",
      image: "/images/hero/3-stolarija-ograde-oprema/alu-fences.02.jpg",
    },
    {
      key: "FQFaJ",
      image: "/images/hero/3-stolarija-ograde-oprema/fence.01.jpg",
    },
    {
      key: "0R3ttkLsSo3hynfIp",
      image: "/images/hero/3-stolarija-ograde-oprema/fence.02.jpg",
    },
    {
      key: "KRAgDvUu76FZv",
      image: "/images/hero/3-stolarija-ograde-oprema/gates.01.jpg",
    },
    {
      key: "JJZkRPH6Oep",
      image: "/images/hero/3-stolarija-ograde-oprema/gates.02.jpg",
    },
    {
      key: "9M3hGQ6phtWqMAXmK",
      image: "/images/hero/3-stolarija-ograde-oprema/gates.03.jpg",
    },
    {
      key: "TOkDwSdKI",
      image: "/images/hero/3-stolarija-ograde-oprema/panel.01.jpg",
    },
    {
      key: "OnFeZoonQGCnR",
      image: "/images/hero/3-stolarija-ograde-oprema/panel.03.jpg",
    },
    {
      key: "ityp28rewu22LA9U32",
      image: "/images/hero/3-stolarija-ograde-oprema/stainless.02.jpg",
    },
    {
      key: "dViBrAUb2",
      image: "/images/stock/027.jpg",
    },
    {
      key: "QeCR5",
      image: "/images/stock/028.jpg",
    },
    {
      key: "nyxxNOn3KqhKo1O2gh",
      image: "/images/stock/029.jpg",
    },
    {
      key: "YSCGtLSsmNvqOy1CK",
      image: "/images/stock/030.jpg",
    },
  ]),
  {
    key: (node) => node.key,
  },
);

const toggleTabs = useToggleFlag();
const toggleTabsFrames = useToggleFlag();
const toggleTabsFinish = useToggleFlag();
const toggleTabsMachines = useToggleFlag();

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--projects">
    <AppGridStacked
      class="*!bg-sky-200"
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

    <!-- section: ogradni sistemi -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary :props-title="{ class: 'pb-4' }">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:shield-home"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2.5rem"
        />
        <AppCardSectionPrimaryTitle>
          Ograde, kapije i ogradni sistemi
        </AppCardSectionPrimaryTitle>
        <VCardSubtitle class="opacity-80">
          <h4>
            Kuće i luksuzne vile u regionu <br v-if="d.mobile.value" />Šumadije
            i centralne Srbije
          </h4>
        </VCardSubtitle>
      </template>

      <!-- grid -->
      <AppGridTwoCells
        invert
        :stack="!d.smAndUp.value"
        cols-class="grid-cols-[1fr_1.33fr]"
        :style="{
          height: d.smAndUp.value
            ? `calc(100vh - ${$$.config('layout.component.AppNavAppBar.height')}px - 122px - 1rem)`
            : undefined,
        }"
      >
        <template #media>
          <AppGridStacked
            class="fill-height"
            :props-stack="{ class: 'd-flex flex-col' }"
          >
            <template #stack>
              <VSpacer />
              <VCardActions>
                <VSpacer />
                <AppBoxBase class="d-flex gap-5">
                  <VBtn
                    @click="ctrl.prev"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$prev"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                  <VBtn
                    @click="ctrl.next"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$next"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                </AppBoxBase>
                <VSpacer />
              </VCardActions>
            </template>
            <VCarousel
              :height="d.smAndUp.value ? '100%' : 333"
              :show-arrows="false"
              hide-delimiters
              crossfade
              :model-value="ctrl.currentKey.value"
              @update:model-value="(v) => v && ctrl.active(`${v}`)"
            >
              <VCarouselItem
                v-for="slide in ctrl.items"
                :key="slide.key"
                :src="slide.image"
                :value="slide.key"
                cover
                transition="app-transition-cross-scale"
                image-class="*object-bottom"
              />
            </VCarousel>
          </AppGridStacked>
        </template>
        <template #text>
          <VCard
            variant="text"
            class="pb-2"
            :class="{
              'd-flex flex-col fill-height': d.smAndUp.value,
            }"
          >
            <AppBoxTwoRowsAutoMain footer-first class="*fill-height">
              <template #footer>
                <!-- Tab Headers -->
                <VTabs
                  stacked
                  grow
                  density="comfortable"
                  :model-value="toggleTabs.isActive.value"
                  @update:model-value="
                    (v) => (v ? toggleTabs.on() : toggleTabs.off())
                  "
                >
                  <VTab :value="false" text="Ograde">
                    <template #prepend>
                      <IconX icon="$info" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                  <VTab :value="true" text="Modeli">
                    <template #prepend>
                      <IconX icon="mdi:tag" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                </VTabs>
              </template>

              <!-- Tab Content -->
              <VTabsWindow :model-value="toggleTabs.isActive.value" crossfade>
                <VTabsWindowItem :value="false">
                  <VCardText class="indent-4 space-y-4 text-body-2 ps-5">
                    <p>
                      U Metal-Prometu smo svesni da ograda nije samo granica
                      vašeg imanja &dash; ona je
                      <strong
                        >vizit-karta, znak dobrodošlice i čuvar vaše
                        privatnosti.</strong
                      >
                      Zato svaku ogradu i kapiju izrađujemo sa podjednakom
                      pažnjom, bilo da se radi o skromnoj gradskoj kući ili
                      luksuznoj vili na obroncima Avale ili Kosmaja.
                    </p>
                    <p>
                      Bilo da želite elegantnu aluminijumsku ogradu koja će se
                      uklopiti u moderan ambijent, kovanu kapiju koja odiše
                      tradicijom, ili panelnu ogradu koja nudi sigurnost i brzu
                      montažu &dash; kod nas ćete pronaći ono što tražite.
                      <strong
                        >Sve naše proizvode možete prilagoditi vašim
                        željama</strong
                      >, uz širok dijapazon RAL boja i različitih modela.
                    </p>
                    <p>
                      Montaže vršimo širom Mladenovca, Beograda, cele Šumadije i
                      centralne Srbije, ali i van granica naše zemlje, što
                      svedoči o poverenju koje nam klijenti ukazuju. Naš tim
                      iskusnih majstora i inženjera
                      <strong
                        >garantuje da će vaša ograda biti postavljena precizno,
                        čvrsto i trajno.</strong
                      >
                    </p>
                  </VCardText>
                </VTabsWindowItem>
                <VTabsWindowItem :value="true">
                  <VCardText class="text-body-1 py-0">
                    <VList
                      lines="three"
                      :items="[
                        {
                          title: 'ALU ograde',
                          props: {
                            subtitle:
                              'Moderne, lagane, otporne na koroziju. Razni modeli, sa &quot;S&quot; odliscima, RAL boje po želji.',
                          },
                        },
                        {
                          title: 'Čelične ograde',
                          props: {
                            subtitle:
                              'Čvrste i dugotrajne. 2D/3D panelne, laserski sečene, kovane i prohromske.',
                          },
                        },
                        {
                          title: 'Dvorišne kapije',
                          props: {
                            subtitle:
                              'Krilne i klizne, velikih dimenzija. Moguća automatizacija.',
                          },
                        },
                        {
                          title: 'Panelne ograde',
                          props: {
                            subtitle:
                              'Brzomontažni sistemi. 2D i 3D paneli, različiti dezeni i boje.',
                          },
                        },
                        {
                          title: 'Ostali tipovi ograda i elemenata',
                          props: {
                            subtitle:
                              'Stepenice, gelenderi, zaštitne ograde, ukrasni elementi od kovanog gvožđa.',
                          },
                        },
                      ]"
                    />
                  </VCardText>
                </VTabsWindowItem>
              </VTabsWindow>
            </AppBoxTwoRowsAutoMain>
            <VSpacer />
            <VCardActions :class="{ 'mt-5': !d.smAndUp.value }">
              <VSpacer />
              <VBtn
                tile
                variant="tonal"
                elevation="1"
                class="*text-shadow-sm px-4"
                :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
                size="large"
                :to="$localePath({ name: 'contact' })"
              >
                <template #prepend>
                  <IconX
                    icon="mdi:fence"
                    size="1.5rem"
                    class="-translate-y-[2px] opacity-[.33]"
                  />
                </template>
                Zakažite ugradnju</VBtn
              >
              <VSpacer />
            </VCardActions>
          </VCard>
        </template>
      </AppGridTwoCells>
    </AppCardSectionPrimary>

    <!-- section: konstrukcije i nosači -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary :props-title="{ class: 'pb-4' }">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="local:iron-bar"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <AppCardSectionPrimaryTitle>
          Konstrukcije i nosači
        </AppCardSectionPrimaryTitle>
        <VCardSubtitle class="opacity-80">
          <h4>
            Metalne konstrukcije za industrijske <br v-if="d.mobile.value" />i
            stambene objekte u Srbiji
          </h4>
        </VCardSubtitle>
      </template>

      <!-- grid -->
      <AppGridTwoCells
        :stack="!d.smAndUp.value"
        cols-class="grid-cols-[1.33fr_1fr]"
        :style="{
          height: d.smAndUp.value
            ? `calc(100vh - ${$$.config('layout.component.AppNavAppBar.height')}px - 122px - 1rem)`
            : undefined,
        }"
      >
        <template #media>
          <AppGridStacked
            class="fill-height"
            :props-stack="{ class: 'd-flex flex-col' }"
          >
            <template #stack>
              <VSpacer />
              <VCardActions>
                <VSpacer />
                <AppBoxBase class="d-flex gap-5">
                  <VBtn
                    @click="ctrlFrames.prev"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$prev"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                  <VBtn
                    @click="ctrlFrames.next"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$next"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                </AppBoxBase>
                <VSpacer />
              </VCardActions>
            </template>
            <VCarousel
              :height="d.smAndUp.value ? '100%' : 333"
              :show-arrows="false"
              hide-delimiters
              crossfade
              :model-value="ctrlFrames.currentKey.value"
              @update:model-value="(v) => v && ctrlFrames.active(`${v}`)"
            >
              <VCarouselItem
                v-for="slide in ctrlFrames.items"
                :key="slide.key"
                :src="slide.image"
                :value="slide.key"
                cover
                transition="app-transition-cross-scale"
                image-class="*object-bottom"
              />
            </VCarousel>
          </AppGridStacked>
        </template>
        <template #text>
          <VCard
            variant="text"
            class="pb-2"
            :class="{
              'd-flex flex-col fill-height': d.smAndUp.value,
            }"
          >
            <AppBoxTwoRowsAutoMain footer-first class="*fill-height">
              <template #footer>
                <!-- Tab Headers -->
                <VTabs
                  stacked
                  grow
                  density="comfortable"
                  :model-value="toggleTabsFrames.isActive.value"
                  @update:model-value="
                    (v) => (v ? toggleTabsFrames.on() : toggleTabsFrames.off())
                  "
                >
                  <VTab :value="false" text="Nosači">
                    <template #prepend>
                      <IconX icon="$info" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                  <VTab :value="true" text="Tipovi">
                    <template #prepend>
                      <IconX icon="mdi:tag" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                </VTabs>
              </template>
              <!-- Tab Content -->
              <VTabsWindow
                :model-value="toggleTabsFrames.isActive.value"
                crossfade
              >
                <VTabsWindowItem :value="false">
                  <VCardText class="indent-4 space-y-4 text-body-2 ps-5">
                    <p>
                      Metalne konstrukcije su kičma svakog ozbiljnog objekta
                      &dash; bilo da se radi o stambenom objektu, poslovnom
                      prostoru ili industrijskom pogonu. U Metal-Prometu
                      <strong
                        >gradimo čvrstoću, sigurnost i dugotrajnost u svaki
                        projekat</strong
                      >, koristeći vrhunske materijale i preciznu inženjersku
                      obradu.
                    </p>
                    <p>
                      Bilo da su vam potrebne nadstrešnice za zaštitu vozila ili
                      đakuzija, krovne konstrukcije za luksuzne vile, ili
                      metalne stepenice i gelenderi &dash;
                      <strong
                        >kod nas ćete pronaći rešenje koje će trajati
                        decenijama.</strong
                      >
                      Svi elementi se mogu dodatno plastificirati, uz opciju
                      cink prajmera za vrhunsku zaštitu od korozije.
                    </p>
                    <p>
                      Naš tim majstora pristupa svakom projektu pažljivo &dash;
                      od ideje i izrade, do montaže na vašoj lokaciji. Radovi se
                      izvode po sistemu
                      <strong>&ldquo;ključ u ruke&rdquo;</strong>, što znači da
                      ste oslobođeni bilo kakve brige oko koordinacije izvođača.
                    </p>
                  </VCardText>
                </VTabsWindowItem>
                <VTabsWindowItem :value="true">
                  <VCardText class="text-body-1 py-0">
                    <VList
                      lines="three"
                      :items="[
                        {
                          title: 'Krovne konstrukcije',
                          props: {
                            subtitle:
                              'Čelične krovne noseće konstrukcije za stambene, poslovne i industrijske objekte. Precizno projektovane i izrađene da izdrže najveća opterećenja.',
                          },
                        },
                        {
                          title: 'Nadstrešnice',
                          props: {
                            subtitle:
                              'Za luksuzne kuće, parking mesta, terase i ulaze. Izrađene od čelika ili aluminijuma, sa mogućnošću plastifikacije u željenoj boji.',
                          },
                        },
                        {
                          title: 'Metalne stepenice i gelenderi',
                          props: {
                            subtitle:
                              'Prohromske, čelične i aluminijumske stepenice za unutrašnju i spoljašnju upotrebu. Po meri, sa staklom, drvetom ili drugim materijalima.',
                          },
                        },
                      ]"
                    />
                  </VCardText>
                </VTabsWindowItem>
              </VTabsWindow>
            </AppBoxTwoRowsAutoMain>
            <VSpacer />
            <VCardActions :class="{ 'mt-5': !d.smAndUp.value }">
              <VSpacer />
              <VBtn
                tile
                variant="tonal"
                elevation="1"
                class="*text-shadow-sm px-4"
                :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
                size="large"
                :to="$localePath({ name: 'contact' })"
              >
                <template #prepend>
                  <IconX
                    icon="mdi:tools"
                    size="1.5rem"
                    class="-translate-y-[2px] opacity-[.33]"
                  />
                </template>
                Zakažite montažu</VBtn
              >
              <VSpacer />
            </VCardActions>
          </VCard>
        </template>
      </AppGridTwoCells>
    </AppCardSectionPrimary>

    <!-- section: finis, plastifikacija -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary :props-title="{ class: 'pb-4' }">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:security"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2.5rem"
        />
        <AppCardSectionPrimaryTitle>
          Završna obrada, plastifikacija
        </AppCardSectionPrimaryTitle>
        <VCardSubtitle class="opacity-80">
          <h4>
            Vrhunska zaštita i estetika za <br v-if="d.mobile.value" />klijente
            iz cele Srbije
          </h4>
        </VCardSubtitle>
      </template>

      <!-- grid -->
      <AppGridTwoCells
        invert
        :stack="!d.smAndUp.value"
        cols-class="grid-cols-[1fr_1.33fr]"
        :style="{
          height: d.smAndUp.value
            ? `calc(100vh - ${$$.config('layout.component.AppNavAppBar.height')}px - 122px - 1rem)`
            : undefined,
        }"
      >
        <template #media>
          <AppGridStacked
            class="fill-height"
            :props-stack="{ class: 'd-flex flex-col' }"
          >
            <template #stack>
              <VSpacer />
              <VCardActions>
                <VSpacer />
                <AppBoxBase class="d-flex gap-5">
                  <VBtn
                    @click="ctrlFinish.prev"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$prev"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                  <VBtn
                    @click="ctrlFinish.next"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$next"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                </AppBoxBase>
                <VSpacer />
              </VCardActions>
            </template>
            <VCarousel
              :height="d.smAndUp.value ? '100%' : 333"
              :show-arrows="false"
              hide-delimiters
              crossfade
              :model-value="ctrlFinish.currentKey.value"
              @update:model-value="(v) => v && ctrlFinish.active(`${v}`)"
            >
              <VCarouselItem
                v-for="slide in ctrlFinish.items"
                :key="slide.key"
                :src="slide.image"
                :value="slide.key"
                cover
                transition="app-transition-cross-scale"
                image-class="*object-bottom"
              />
            </VCarousel>
          </AppGridStacked>
        </template>
        <template #text>
          <VCard
            variant="text"
            class="pb-2"
            :class="{
              'd-flex flex-col fill-height': d.smAndUp.value,
            }"
          >
            <AppBoxTwoRowsAutoMain footer-first class="*fill-height">
              <template #footer>
                <!-- Tab Headers -->
                <VTabs
                  stacked
                  grow
                  density="comfortable"
                  :model-value="toggleTabsFinish.isActive.value"
                  @update:model-value="
                    (v) => (v ? toggleTabsFinish.on() : toggleTabsFinish.off())
                  "
                >
                  <VTab :value="false" text="Finiš">
                    <template #prepend>
                      <IconX icon="$info" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                  <VTab :value="true" text="Usluge">
                    <template #prepend>
                      <IconX icon="mdi:tag" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                </VTabs>
              </template>

              <!-- Tab Content -->
              <VTabsWindow
                :model-value="toggleTabsFinish.isActive.value"
                crossfade
              >
                <VTabsWindowItem :value="false">
                  <VCardText class="indent-4 space-y-4 text-body-2 ps-5">
                    <p>
                      Plastifikacija je jedan od najefikasnijih načina za
                      zaštitu metalnih površina, uz istovremeno postizanje
                      izuzetno lepog estetskog izgleda. U Metal-Prometu ovu
                      uslugu podižemo na viši nivo &dash; svaki komad, bilo da
                      je od aluminijuma ili čelika, prethodno hemijski
                      tretiramo, čime
                      <strong
                        >obezbeđujemo savršeno prianjanje boje i dugotrajnost
                        završne obrade.</strong
                      >
                    </p>
                    <p>
                      Bilo da su u pitanju ograde, kapije, nameštaj, mašinski
                      delovi, felne ili industrijske konstrukcije &dash; naš tim
                      <strong
                        >garantuje vrhunski kvalitet, brzu izradu i pristupačne
                        cene.</strong
                      >
                      Uslugu plastifikacije pružamo kako za naše proizvode, tako
                      i za kompletno uslužno farbanje vaših delova.
                    </p>
                    <p>
                      Naša industrijska peć
                      <strong>omogućava obradu i najvećih konstrukcija</strong>,
                      dok visina komore pruža fleksibilnost za različite
                      profile. U ponudi imamo širok dijapazon RAL boja &dash; od
                      klasičnih nijansi do strukturnih i metalik efekata, uz
                      opciju cink prajmera za dodatnu antikorozivnu zaštitu.
                    </p>
                  </VCardText>
                </VTabsWindowItem>
                <VTabsWindowItem :value="true">
                  <VCardText class="text-body-1 py-0">
                    <VList
                      lines="three"
                      :items="[
                        {
                          title: 'Ograde i konstrukcije',
                          props: {
                            subtitle:
                              'Plastifikacija aluminijumskih i čeličnih ograda, kapija, stepenica, gelendera, i drugih konstruktivnih elemenata.',
                          },
                        },
                        {
                          title: 'Nameštaj i predmeti',
                          props: {
                            subtitle:
                              'Školske klupe i stolice, baštenski setovi, stolovi, stolice, žardinjere, klupe za parkove i druge metalne predmete.',
                          },
                        },
                        {
                          title: 'Industrija i auto',
                          props: {
                            subtitle:
                              'Felne, mašinski delovi, postolja za mašine, rolo vrata, okapnice, rezervoari i drugi industrijski elementi.',
                          },
                        },
                        {
                          title: 'Kovano gvožđe',
                          props: {
                            subtitle:
                              'Zaštita i dekorativna obrada kovanih ograda, kapija, prozorskih rešetki i ukrasnih elemenata.',
                          },
                        },
                        {
                          title: 'Specijalni tretmani',
                          props: {
                            subtitle:
                              'Cink prajmer za vrhunsku zaštitu, hemijska priprema pre farbanja, kombinovanje sa strukturnim i metalik efektima.',
                          },
                        },
                      ]"
                    />
                  </VCardText>
                </VTabsWindowItem>
              </VTabsWindow>
            </AppBoxTwoRowsAutoMain>
            <VSpacer />
            <VCardActions :class="{ 'mt-5': !d.smAndUp.value }">
              <VSpacer />
              <VBtn
                tile
                variant="tonal"
                elevation="1"
                class="*text-shadow-sm px-4"
                :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
                size="large"
                :to="$localePath({ name: 'contact' })"
              >
                <template #prepend>
                  <IconX
                    icon="mdi:shield-check"
                    size="1.5rem"
                    class="opacity-[.33]"
                  />
                </template>
                Zakažite uslugu</VBtn
              >
              <VSpacer />
            </VCardActions>
          </VCard>
        </template>
      </AppGridTwoCells>
    </AppCardSectionPrimary>

    <!-- section: masinstvo, ind. oprema -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary :props-title="{ class: 'pb-4' }">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:engine"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2.5rem"
        />
        <AppCardSectionPrimaryTitle>
          Industrijska oprema i mašinstvo
        </AppCardSectionPrimaryTitle>
        <VCardSubtitle class="opacity-80">
          <h4>
            Za potrebe industrije u <br v-if="d.mobile.value" />
            Srbiji i inostranstvu
          </h4>
        </VCardSubtitle>
      </template>

      <!-- grid -->
      <AppGridTwoCells
        :stack="!d.smAndUp.value"
        cols-class="grid-cols-[1.33fr_1fr]"
        :style="{
          height: d.smAndUp.value
            ? `calc(100vh - ${$$.config('layout.component.AppNavAppBar.height')}px - 122px - 1rem)`
            : undefined,
        }"
      >
        <template #media>
          <AppGridStacked
            class="fill-height"
            :props-stack="{ class: 'd-flex flex-col' }"
          >
            <template #stack>
              <VSpacer />
              <VCardActions>
                <VSpacer />
                <AppBoxBase class="d-flex gap-5">
                  <VBtn
                    @click="ctrlMachines.prev"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$prev"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                  <VBtn
                    @click="ctrlMachines.next"
                    variant="tonal"
                    elevation="1"
                    icon
                    rounded="circle"
                    color="ui"
                  >
                    <IconX
                      icon="$next"
                      size="2rem"
                      class="filter-shadow-sm text-v-on-ui"
                    />
                  </VBtn>
                </AppBoxBase>
                <VSpacer />
              </VCardActions>
            </template>
            <VCarousel
              :height="d.smAndUp.value ? '100%' : 333"
              :show-arrows="false"
              hide-delimiters
              crossfade
              :model-value="ctrlMachines.currentKey.value"
              @update:model-value="(v) => v && ctrlMachines.active(`${v}`)"
            >
              <VCarouselItem
                v-for="slide in ctrlMachines.items"
                :key="slide.key"
                :src="slide.image"
                :value="slide.key"
                cover
                transition="app-transition-cross-scale"
                image-class="*object-bottom"
              />
            </VCarousel>
          </AppGridStacked>
        </template>
        <template #text>
          <VCard
            variant="text"
            class="pb-2"
            :class="{
              'd-flex flex-col fill-height': d.smAndUp.value,
            }"
          >
            <AppBoxTwoRowsAutoMain footer-first class="*fill-height">
              <template #footer>
                <!-- Tab Headers -->
                <VTabs
                  stacked
                  grow
                  density="comfortable"
                  :model-value="toggleTabsMachines.isActive.value"
                  @update:model-value="
                    (v) =>
                      v ? toggleTabsMachines.on() : toggleTabsMachines.off()
                  "
                >
                  <VTab :value="false" text="Industrija">
                    <template #prepend>
                      <IconX icon="$info" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                  <VTab :value="true" text="Usluge">
                    <template #prepend>
                      <IconX icon="mdi:tag" size="1.5rem" class="opacity-20" />
                    </template>
                  </VTab>
                </VTabs>
              </template>

              <!-- Tab Content -->
              <VTabsWindow
                :model-value="toggleTabsMachines.isActive.value"
                crossfade
              >
                <VTabsWindowItem :value="false">
                  <VCardText class="indent-4 space-y-4 text-body-2 ps-5">
                    <p>
                      Industrijska oprema i mašinstvo predstavljaju
                      najzahtevniji segment našeg poslovanja &dash; oblast u
                      kojoj se znanje, iskustvo i preciznost spajaju u
                      funkcionalne celine koje pokreću industriju.
                      <strong>U Metal-Prometu ne bežimo od izazova</strong>;
                      naprotiv, specijalizovani smo za projekte koji zahtevaju
                      pouzdanost, sigurnost i dugotrajan vek trajanja.
                    </p>
                    <p>
                      Bilo da se radi o reaktorima za vodu, rezervoarima
                      otpadnih voda, cevovodima ili kapitalnim remontima &dash;
                      naš pristup je uvek isti:
                      <strong
                        >maksimalna odgovornost, vrhunski kvalitet i poštovanje
                        rokova</strong
                      >. Zato su nam klijenti iz energetskog, hemijskog i
                      mašinskog sektora u Srbiji i inostranstvu ukazali
                      poverenje koje decenijama opravdavamo.
                    </p>
                    <p>
                      Naš tim inženjera mašinstva i zavarivača radi po najvišim
                      standardima, koristeći savremenu opremu i proverene
                      materijale. Posebnu pažnju posvećujemo zavarivanju pod
                      nadzorom, ispitivanju bez razaranja i
                      <strong
                        >poštovanju svih tehničkih normi koje propisuje
                        industrija</strong
                      >.
                    </p>
                  </VCardText>
                </VTabsWindowItem>
                <VTabsWindowItem :value="true">
                  <VCardText class="text-body-1 py-0">
                    <VList
                      lines="three"
                      :items="[
                        {
                          title: 'Procesna oprema',
                          props: {
                            subtitle:
                              'Izrada reaktora za vodu, industrijsih rezervoara, tlačnih posuda, i druge opreme po zahtevima investitora. Projekti koji zahtevaju preciznost, ispitivanje i poštovanje normi.',
                          },
                        },
                        {
                          title: 'Energetika',
                          props: {
                            subtitle:
                              'Projekti od nacionalnog značaja koji zahtevaju stručnost i odgovornost. Termoelektrane, cevovodi, nosači i elemenati za potrebe energetskih postrojenja.',
                          },
                        },
                        {
                          title: 'Industrijske konstrukcije',
                          props: {
                            subtitle:
                              'Izrada čeličnih konstrukcija za fabričke hale, postrojenja i industrijske pogone. Noseće konstrukcije za teške mašine, transportne sisteme i opremu.',
                          },
                        },
                        {
                          title: 'Cevovodi i instalacije',
                          props: {
                            subtitle:
                              'Izrada i montaža cevovoda za industrijske potrebe, uključujući vodovodne, hemijske i energetske instalacije. Zavarivanje pod nadzorom, hidrotestiranje i puštanje u rad.',
                          },
                        },
                        {
                          title: 'Reparacije i rekonstrukcije',
                          props: {
                            subtitle:
                              'Sanacija, popravka, rekonstrukcija, i produženje veka trajanja industrijske opreme, mašina i postrojenja.',
                          },
                        },
                      ]"
                    />
                  </VCardText>
                </VTabsWindowItem>
              </VTabsWindow>
            </AppBoxTwoRowsAutoMain>
            <VSpacer />
            <VCardActions :class="{ 'mt-5': !d.smAndUp.value }">
              <VSpacer />
              <VBtn
                tile
                variant="tonal"
                elevation="1"
                class="*text-shadow-sm px-4"
                :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
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
              <VSpacer />
            </VCardActions>
          </VCard>
        </template>
      </AppGridTwoCells>
    </AppCardSectionPrimary>
  </AppBoxPageWrap>
</template>
