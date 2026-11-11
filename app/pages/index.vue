<script setup lang="ts">
import { useDisplay } from "vuetify";
import { UseElementBounding } from "@vueuse/components";

import DELATNOSTI from "~/assets/sve-delatnosti.json";
import SLIDES_PRIPREMA from "~/assets/slides-priprema.json";
import SLIDES_PROIZVODNJA from "~/assets/slides-proizvodnja.json";
import SLIDES_GOTOVI_PROIZVODI from "~/assets/slides-gotovi-proizvodi.json";
import SLIDES_ZAVRSNA_OBRADA from "~/assets/slides-zavrsna-obrada.json";
import PROJECTS from "~/assets/projects.proto.json";
import SERVICE_CATEGORIES from "~/assets/service-categories.json";

import type { TOrNoValue } from "~/types";
import type { default as TAppSlideItemsStacked } from "~/components/app/slide/ItemsStacked.vue";

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
const { $$, $lightbox } = useNuxtApp();

const targetSlider = useTemplateRef<
  TOrNoValue<InstanceType<typeof TAppSlideItemsStacked>>
>("target:e08fd902-882e-5071-a8bb-2a3770776090");

const slideshow = <any>{
  priprema: () => {
    $lightbox({ slides: $$.shuffle(SLIDES_PRIPREMA) }).open();
  },
  proizvodnja: () => {
    $lightbox({ slides: $$.shuffle(SLIDES_PROIZVODNJA) }).open();
  },
  "gotovi-proizvodi": () => {
    $lightbox({ slides: $$.shuffle(SLIDES_GOTOVI_PROIZVODI) }).open();
  },
  "zavrsna-obrada": () => {
    $lightbox({ slides: $$.shuffle(SLIDES_ZAVRSNA_OBRADA) }).open();
  },
};

const appNavHeight = computed(() =>
  $$.config("layout.component.AppNavAppBar.height"),
);

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--index *space-y-20">
    <!-- section: hero -->
    <AppGridStackedFrames>
      <AppGridStackedFramesItem>
        <AppVideoPlayer
          class="!object-cover"
          :style="{
            height: `calc(100dvh - ${appNavHeight ?? 0}px)`,
          }"
          :sources="[{ src: '/vid-promo-01.mp4', type: 'video/mp4' }]"
          :props-frame="{
            autoplay: true,
            loop: true,
          }"
          :config="{
            muted: true,
            controls: [],
            clickToPlay: false,
          }"
        />
      </AppGridStackedFramesItem>
      <AppGridStackedFramesItem class="!bg-[rgba(var(--v-theme-ui),.22)]">
        <VCard
          class="!text-[rgb(var(--v-theme-on-ui))] h-full d-flex flex-col"
          variant="text"
          tile
        >
          <AppBoxBase class="pa-0 ma-0">
            <VCardTitle
              class="bg-[rgba(var(--v-theme-ui),.5)] backdrop-blur-sm py-5 shadow px-0"
              :class="{
                'ps-12': d.mdAndUp.value,
                'text-center': !d.mdAndUp.value,
              }"
            >
              <h1
                class="text-shadow-md font-weight-bold"
                :class="[
                  d.smAndUp.value
                    ? d.mdAndUp.value
                      ? 'text-h2'
                      : 'text-h3'
                    : 'text-h4',
                ]"
              >
                <span>Metal-Promet</span
                ><span v-if="!d.mobile.value"> Mladenovac</span>
              </h1>
            </VCardTitle>
            <VCardSubtitle
              class="mt-10 space-y-5"
              :class="{
                'ps-12': d.smAndUp.value,
                'px-1 text-center': !d.smAndUp.value,
              }"
            >
              <p
                v-for="item in [
                  {
                    icon: 'mdi:wrench-outline',
                    text: d.mdAndUp.value
                      ? 'Kompletne metaloprerađivačke usluge'
                      : 'Metaloprerađivačke usluge',
                  },
                  {
                    icon: 'mdi:sync',
                    text: 'Od ideje do montaže',
                  },
                  {
                    icon: 'mdi:package-variant-closed-check',
                    text: 'Sve na jednom mestu',
                  },
                ]"
                class="text-shadow-md font-weight-bold"
                :class="[d.smAndUp.value ? 'text-h4' : 'text-h5']"
              >
                <IconX
                  v-if="d.smAndUp.value"
                  :icon="item.icon"
                  class="opacity-50"
                  size="3.33rem"
                />
                <span :class="[{ 'ms-6': d.smAndUp.value }]">{{
                  item.text
                }}</span>
              </p>
            </VCardSubtitle>
          </AppBoxBase>
          <VSpacer />
          <VCardActions
            :class="{ 'mb-12': !d.mobile.value, 'mb-5': d.mobile.value }"
          >
            <VSpacer />
            <VBtn
              tile
              size="x-large"
              color="ui"
              variant="elevated"
              class="text-shadow-sm !text-v-on-ui px-4"
              :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
              :to="$localePath({ name: 'contact' })"
            >
              <strong class="text-[122%] me-3">🤝</strong>
              Započnimo saradnju</VBtn
            >
            <VSpacer />
          </VCardActions>
        </VCard>
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>

    <!-- trust ceo -->
    <VCard tile class="!text-[rgb(var(--v-theme-on-ui))] text-shadow-sm">
      <VRow no-gutters>
        <VCol
          sm="6"
          md="3"
          class="!bg-cover bg-[rgb(var(--v-theme-ui))] *bg-blend-multiply pt-12 !pb-24 px-4"
          :class="{
            [`${node.bgImage}`]: true,
          }"
          :key="node.title"
          v-for="node in [
            {
              title: 'Kvalitet i pouzdanost',
              text: 'Posvećeni smo savršenstvu od sirovine do gotovog proizvoda. Visoki standardi definišu naš radni vek.',
              bgImage: `bg-[url('/images/stock/015.png')]`,
              icon: {
                icon: '$ratingFull',
                size: '2.5rem',
              },
            },
            {
              title: 'Bezbednost i odgovornost',
              text: 'Odgovorno planiramo, izrađujemo i montiramo. Bezbednost korisnika nam je uvek prioritet.',
              bgImage: `bg-[url('/images/stock/016.png')]`,
              icon: {
                icon: 'mdi:security',
                size: '2.22rem',
              },
            },
            {
              title: 'Integritet i poverenje',
              text: 'Poverenje gradimo kroz godine i završene projekte. Posvećenost kvalitetu je ono što nas definiše.',
              bgImage: `bg-[url('/images/stock/017.png')]`,
              icon: {
                icon: 'local:certificate-trusted',
                size: '2.5rem',
              },
            },
            {
              title: 'Inovacije i rešenja',
              text: 'Povezujemo nove tehnologije i provereno znanje. Razvijamo rešenja koja odgovaraju izazovima.',
              bgImage: `bg-[url('/images/stock/018.png')]`,
              icon: {
                icon: 'local:robot-cute-head',
                size: '2.22rem',
              },
            },
          ]"
        >
          <AppBoxBase class="space-y-4 text-center">
            <AppBoxCentered>
              <IconX v-bind="node.icon" size="4rem" class="!opacity-[.88]" />
            </AppBoxCentered>
            <p class="font-weight-bold !text-[133%]">
              {{ node.title }}
            </p>
            <p class="text-body-1">
              {{ node.text }}
            </p>
          </AppBoxBase>
        </VCol>
      </VRow>
    </VCard>

    <!-- section: novosti, trendovi -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary variant="text">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:bullhorn"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20 -rotate-12"
          size="2.22rem"
        />
        <AppCardSectionPrimaryTitle>
          Novosti, Trendovi
        </AppCardSectionPrimaryTitle></template
      >
      <template #default="cx">
        <VContainer fluid>
          <VRow dense>
            <VCol sm="6" md="4">
              <VCard
                link
                height="712"
                :to="$localePath({ name: 'projects' })"
                class="d-flex flex-col"
              >
                <NuxtImg
                  src="/images/stock/010.jpg"
                  class="object-cover w-full h-1/2"
                />
                <VCardTitle
                  class="font-weight-bold text-center"
                  :class="[d.smAndUp.value ? 'pt-5' : 'pt-10']"
                >
                  Reaktor otpadnih voda
                </VCardTitle>
                <VCardText class="space-y-4 indent-4 text-body-1">
                  <p>
                    Kruševac je dobio reaktor otpadnih voda, a Metal-Promet
                    dokaz da <strong>ambicije nisu prazna priča</strong>. Tri
                    meseca rada, zahtevni kriterijumi i standard koji ne trpi
                    <em>&quot;dovoljno dobro&quot;</em>.
                  </p>
                  <p>
                    Metal-Promet još jednom potvrđuje da ume da odgovori na
                    složene zahteve industrijskog sektora.
                  </p>
                </VCardText>
                <VSpacer />
                <VCardActions>
                  <VSpacer />
                  <VBtn
                    tile
                    class="ps-4"
                    size="large"
                    :to="$localePath({ name: 'projects' })"
                    >Saznajte više
                    <template #append>
                      <IconX icon="$next" class="opacity-50" size="1.5rem" />
                    </template>
                  </VBtn>
                  <VSpacer />
                </VCardActions>
              </VCard>
            </VCol>
            <VCol sm="6" md="4">
              <VCard height="712">
                <NuxtImg src="/logo.2.jpg" class="object-cover w-full h-1/2" />
                <VCardTitle
                  class="font-weight-bold text-center"
                  :class="{ 'pt-8': !d.smAndUp.value }"
                >
                  Zaštitni znak
                </VCardTitle>
                <VCardText class="space-y-4 indent-4 text-body-1">
                  <p>
                    Znak Metal-Prometa od sada nosi novi prepoznatljiv logo, u
                    skladu sa onim što radimo: čelične konstrukcije, teška
                    industrija, aluminijumske ograde i vrhunsku plastifikaciju
                    metala. To je <strong>simbol kontinuiteta</strong> i
                    spremnosti za nove industrijske izazove, u Srbiji i
                    inostranstvu.
                  </p>
                </VCardText>
              </VCard>
            </VCol>
            <VCol sm="6" md="4">
              <VCard height="712">
                <NuxtImg
                  src="/images/stock/012.jpg"
                  class="object-cover w-full h-1/2"
                />
                <VCardTitle
                  class="font-weight-bold text-center"
                  :class="{ 'pt-8': !d.smAndUp.value }"
                >
                  Web sajt Metal-Prometa
                </VCardTitle>
                <VCardText class="space-y-4 indent-4 text-body-1">
                  <p>
                    Zvanični sajt Metal-Prometa mesto je gde se na jednom mestu
                    predstavljaju naše usluge i stečeno iskustvo. Informišite se
                    o ponudi, pogledajte primere radova i
                    <strong>kontaktirajte nas</strong>.
                  </p>
                  <p>Tu smo za svaku ideju, od skice do realizacije.</p>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VContainer>
      </template>
    </AppCardSectionPrimary>

    <!-- section:projekti -->
    <AppCardSectionPrimary :props-actions="{ class: 'pt-5' }">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:eiffel-tower"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2.22rem"
        />
        <AppCardSectionPrimaryTitle> Projekti </AppCardSectionPrimaryTitle>
      </template>
      <template #actions>
        <VSpacer />
        <VBtn
          tile
          class="ps-4"
          size="large"
          :to="$localePath({ name: 'projects' })"
          >Saznajte više
          <template #append>
            <IconX icon="$next" class="opacity-50" size="1.5rem" />
          </template>
        </VBtn>
        <VSpacer v-if="d.mobile.value" />
      </template>
      <template #default="ctx">
        <AppGridStackedFrames>
          <AppGridStackedFramesItem>
            <AppSlideItemsStacked
              ref="target:e08fd902-882e-5071-a8bb-2a3770776090"
              show-arrows="never"
              :cell-min-height="240"
              :cell-width="320"
              :items="$$.shuffle(PROJECTS)"
              :props-container="{
                style: {
                  height: `calc(100svh - ${ctx.titleSize.height ?? 0}px - ${$$.config('layout.component.AppNavAppBar.height') ?? 0}px - 2rem)`,
                },
              }"
              gap="1"
            >
              <template #item="cx">
                <VCard
                  flat
                  link
                  tile
                  class="fill-height !bg-no-repeat !bg-cover !bg-bottom"
                  :to="$localePath({ name: 'projects' })"
                  :style="{
                    'background-image': `url(${cx.item.image ?? '/images/stock/010.jpg'}) !important`,
                  }"
                >
                  <AppBoxFlex
                    col
                    class="!text-white text-shadow-sm fill-height !cursor-pointer"
                  >
                    <AppBoxFlex class="items-center pa-5">
                      <IconX
                        size="1.5rem"
                        :icon="
                          $$.get(SERVICE_CATEGORIES, `${cx.item.category}.icon`)
                        "
                        class="opacity-50"
                      />
                      <VSpacer />
                      <AppBoxFlex class="items-center gap-1">
                        <IconX
                          icon="mdi:map-marker"
                          size="1.66rem"
                          class="opacity-50"
                        />
                        <small class="text-body-2 font-italic">
                          {{ cx.item.location }}
                        </small>
                      </AppBoxFlex>
                    </AppBoxFlex>
                    <VSpacer />
                    <h2
                      class="text-body-1 !min-h-[25%] pa-2 !bg-[rgba(var(--v-theme-ui),.5)] backdrop-blur-sm"
                    >
                      {{ cx.item.title }}
                    </h2>
                  </AppBoxFlex>
                </VCard>
              </template>
            </AppSlideItemsStacked>
          </AppGridStackedFramesItem>
          <AppGridStackedFramesItem
            class="pointer-events-none d-flex items-center justify-between px-2"
          >
            <AppBtnPager
              prev
              @click.stop="targetSlider?.slider?.scrollTo('prev')"
              variant="elevated"
              color="ui"
              :disabled="!targetSlider?.slider?.hasPrev"
              :props-icon="{
                size: '2rem',
              }"
            />
            <AppBtnPager
              @click.stop="targetSlider?.slider?.scrollTo('next')"
              variant="elevated"
              color="ui"
              :disabled="!targetSlider?.slider?.hasNext"
              :props-icon="{
                size: '2rem',
              }"
            />
          </AppGridStackedFramesItem>
        </AppGridStackedFrames>
      </template>
    </AppCardSectionPrimary>

    <!-- section: delatnosti -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary variant="text" class="pb-2">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:package-variant-closed-check"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <AppCardSectionPrimaryTitle>
          Kompletno rešenje<template v-if="d.smAndUp.value"> za metal</template>
        </AppCardSectionPrimaryTitle>
      </template>
      <template #default="cx">
        <AppBoxContainerCentered :max-width="undefined" fluid>
          <tempalte
            :key="item.title"
            v-for="(item, i) in [
              {
                icon: {
                  name: 'material-symbols:id-card-outline',
                  size: '2.5rem',
                },
                title: 'Upoznajte Metal-Promet',
                image: {
                  src: '/images/stock/013.jpg',
                  classes: 'object-[44%_top]',
                },
                link: {
                  to: 'about',
                  text: 'Saznajte više',
                },
                text: `Mi smo <strong>Metal-Promet iz Mladenovca</strong> &dash; porodična firma specijalizovana za kompletne metaloprerađivačke radove, od projektovanja i obrade do zaštite i montaže industrijskih komponenti i metalnih konstrukcija. Poslujemo nekoliko decenija i danas smo prepoznatljivi po vrhunskom kvalitetu, inženjerskoj preciznosti i usluzi plastifikacije u sopstvenoj peći. Izvodimo projekte u Srbiji i Evropi, sa fokusom na dugovečnost i estetiku svakog proizvoda. Kvalitet koji stvaramo traje &dash; zato nam se mnogi vraćaju.`,
              },
              {
                icon: { name: 'local:conveyor-belt-box', size: '2rem' },
                title: 'Zatvoren tehnološki krug',
                image: {
                  src: '/images/stock/015.jpg',
                  classes: '',
                },
                link: {
                  to: 'services',
                  text: 'Saznajte više',
                },
                text: `Od inženjerske ideje, kroz preciznu proizvodnju i zaštitu, do profesionalne montaže &dash; bez   <span class='italic'>outsourcinga</span>, <strong>nudimo sve usluge prerade metala pod jednim krovom</strong>. To znači da svaki projekat, od skice do monaže, prolazi kroz ruke stručnjaka, bez posrednika i bez kompromisa u kvalitetu.`,
              },
              {
                icon: { name: 'mdi:toolbox', size: '2.5rem' },
                title: 'Rešenje za svaki zahtev',
                image: {
                  src: '/images/stock/016.jpg',
                  classes: 'object-top',
                },
                link: {
                  to: 'projects',
                  text: 'Saznajte više',
                },
                text: `Specijalizovani smo za izradu komponenti i jedinica za industrijski sektor i metalnih konstrukcija visoke nosivosti prilagođenih najstrožim standardima čvrstoće i bezbednosti. Svaki proizvod prolazi hemijsko čišćenje i obradu, uz mogućnost nanošenja prajmera, čime obezbeđujemo vrhunsku otpornost na koroziju i habanje. Od kapija i ograda do reaktora i rezervoara procesne opreme &dash; <strong>nudimo kompletna rešenja od ideje do montaže</strong>, u zemlji i inostranstvu.`,
              },
              {
                icon: { name: 'local:certificate-trusted', size: '2.5rem' },
                title: 'Partner za Vaš projekat',
                image: {
                  src: '/images/stock/018.jpg',
                  classes: 'object-[right_top]',
                },
                link: {
                  to: 'contact',
                  text: 'Zatražite ponudu',
                },
                text: `Proizvodna baza u Mladenovcu, sa svojim integrisanim pristupom, predstavlja središte sa kojeg upravljamo efikasnom realizacijom projekata u Šumadiji i okruženju. Ovakav organizacioni model čini nas <strong>pouzdanim partnerom za kompletnu izradu i montažu industrijske opreme i metalnih konstrukcija</strong> u opštinama centralne Srbije.`,
              },
              {
                icon: { name: 'mdi:truck-flatbed', size: '2.5rem' },
                title: `Vaša ideja &dash; naša briga`,
                image: {
                  src: '/images/stock/019.jpg',
                  classes: 'object-[45%_center]',
                },
                link: {
                  to: 'contact',
                  text: 'Zakažite montažu',
                },
                text: `Naši montažni timovi dostupni su u svim većim gradovima Srbije, uključujući Beograd, Novi Sad i Niš, kao i u okolnim mestima poput Avale, Kosmaja, Aranđelovca i Sopota, čime <strong>osiguravamo da kvalitetna izrada bude praćena i profesionalnom montažom</strong> &dash; gde god da se vaš objekat nalazi.`,
              },

              {
                icon: { name: 'mdi:diamond-stone', size: '2.5rem' },
                title: 'Kvalitet zagarantovan',
                image: {
                  src: '/images/stock/017.jpg',
                  classes: '',
                },
                link: {
                  to: 'about',
                  text: 'Saznajte više',
                },
                text: `Donosimo vrhunske standarde izrade i zaštite metala na tržište Srbije. Kontrola izrade, procesi  hemijske pripreme i plastifikacije garantuju dugovečnost, dugotrajnu korozionu postojanost i besprekornu estetsku završnicu, bez obzira na vrstu i veličinu projekta. <strong>Sa nama, vaša ideja dobija pravu formu i domaću posvećenost</strong> &dash; od Mladenovca do svakog kraja Srbije.`,
              },
              //
            ]"
          >
            <VCard
              :style="[
                d.mdAndUp.value
                  ? {
                      height: `calc(99dvh - ${appNavHeight ?? 0}px - ${cx.titleSize.height ?? 0}px - 2rem)`,
                    }
                  : undefined,
              ]"
              :class="{
                'pb-16': !d.mdAndUp.value,
              }"
              tile
              variant="flat"
              :color="0 != i % 2 ? 'surface-variant' : undefined"
            >
              <AppGridTwoCells
                :invert="0 == i % 2"
                class="h-full"
                :stack="!d.mdAndUp.value"
              >
                <template #media>
                  <NuxtImg
                    :src="item?.image?.src ?? '/logo.jpg'"
                    :class="[
                      'w-full',
                      'object-cover',
                      item.image.classes,
                      d.mdAndUp.value ? 'h-full' : 'h-[33dvh]',
                    ]"
                  />
                </template>
                <template #text>
                  <AppBoxBase class="space-y-5 pt-8 h-full d-flex flex-col">
                    <AppBoxCentered>
                      <VAvatar
                        color="rgba(var(--v-theme-primary-variant), .122)"
                        size="4.22rem"
                      >
                        <IconX
                          :icon="item.icon.name"
                          :size="item.icon.size"
                          class="opacity-20"
                        />
                      </VAvatar>
                    </AppBoxCentered>
                    <VCardTitle
                      class="text-center text-shadow-sm position-relative"
                      :class="[d.mdAndUp.value ? 'text-h4' : undefined]"
                    >
                      <span v-if="!d.mdAndUp.value"> {{ item.title }} </span>
                      <UseElementBounding
                        v-else
                        class="d-inline-block px-0 mx-0"
                        v-slot="cx"
                      >
                        <span> {{ item.title }} </span>
                        <AppShapeLineH
                          :width="
                            0 == i % 2 ? cx.right : d.width.value - cx.left - 16
                          "
                          :height="1"
                          :props-canvas="{
                            class: `text-v-on-surface/[.5] position-absolute bottom-3 ${0 == i % 2 ? 'start-0' : 'end-0'}`,
                          }"
                        />
                      </UseElementBounding>
                    </VCardTitle>
                    <VCardText
                      :class="[
                        'indent-5',
                        d.smAndUp.value ? 'px-10' : undefined,
                        d.mdAndUp.value ? 'text-h6' : 'text-body-1',
                      ]"
                    >
                      <p v-html="item.text" />
                    </VCardText>
                    <VSpacer />
                    <VCardActions class="pb-5">
                      <VSpacer />
                      <VBtn
                        :size="d.mdAndUp.value ? 'x-large' : 'large'"
                        tile
                        class="ps-4"
                        :to="$localePath({ name: item.link.to })"
                      >
                        <template #append>
                          <IconX icon="$next" class="opacity-50" />
                        </template>
                        {{ item.link.text }}
                      </VBtn>
                      <VSpacer />
                    </VCardActions>
                  </AppBoxBase>
                </template>
              </AppGridTwoCells>
            </VCard>
          </tempalte>
          <!-- delatnosti:pregled -->
          <AppGridRowsAutoAuto
            class="mt-16"
            :props-top="{ class: 'd-flex justify-center' }"
          >
            <template #top>
              <VAvatar
                color="rgba(var(--v-theme-primary-variant), .122)"
                size="4.22rem"
              >
                <IconX icon="mdi:toolbox" size="2.5rem" class="opacity-20" />
              </VAvatar>
            </template>
            <VCardTitle class="text-h4 text-center text-shadow-sm">
              Naše delatnosti
            </VCardTitle>
          </AppGridRowsAutoAuto>
          <VSpacer class="mt-10" />
          <VRow dense class="px-2">
            <VCol
              sm="6"
              md="3"
              align-self="stretch"
              :key="item.key"
              v-for="item in DELATNOSTI"
            >
              <VCard
                height="100%"
                class="space-y-2 pb-2"
                :class="{ 'd-flex flex-col': d.smAndUp.value }"
              >
                <AppBoxBase class="h-[222px] mt-0">
                  <VImg :src="item.image" cover height="100%">
                    <AppBoxBase
                      class="w-full h-full !bg-[rgba(var(--v-theme-ui),.52)]"
                    >
                      <VCardActions
                        class="pt-0 pe-0 text-[rgba(var(--v-theme-on-ui),1)]"
                      >
                        <IconX
                          :icon="item.icon"
                          size="1.22rem"
                          class="-translate-y-[2px] opacity-[.52]"
                        />
                        <VSpacer />
                        <VBtn
                          icon
                          color="current"
                          rounded="circle"
                          variant="text"
                          class="*:filter-shadow-sm"
                          title="Slike"
                          @click="slideshow[item.key]()"
                        >
                          <IconX icon="mdi:animation-play" size="1.5rem" />
                        </VBtn>
                      </VCardActions>
                    </AppBoxBase>
                  </VImg>
                </AppBoxBase>
                <VCardTitle class="text-center font-weight-bold">
                  {{ item.title }}
                </VCardTitle>
                <VCardText class="text-body-1">
                  <p v-html="item.description" />
                  <VList slim bg-color="transparent" class="mt-5">
                    <VListItem
                      :key="service"
                      v-for="service in item.services"
                      class="ps-0"
                    >
                      <template #prepend>
                        <IconX
                          icon="$complete"
                          class="text-success"
                          size="1.22rem"
                        />
                      </template>
                      {{ service }}
                    </VListItem>
                  </VList>
                </VCardText>
                <VSpacer v-if="d.smAndUp.value" />
                <VCardActions>
                  <VSpacer />
                  <VBtn tile class="ps-4" :to="$localePath({ name: item.to })">
                    Saznajte više
                    <template #append>
                      <IconX icon="$next" class="opacity-50" />
                    </template>
                  </VBtn>
                  <VSpacer />
                </VCardActions>
              </VCard>
            </VCol>
          </VRow>
        </AppBoxContainerCentered>
      </template>
    </AppCardSectionPrimary>

    <template v-if="false">
      <!-- @TODOs -->
      <VSpacer class="mt-12" />
      <AppBoxContainerCentered class="d-flex flex-col items-center">
        <h2 class="text-center">&#64;TODO; sekcije sajta; 🚧</h2>
        <ul>
          <li>✔ HERO</li>
          <li>✔ kratko o nama</li>
          <li>✔ radovi, projekti, (galerija)</li>
          <li>✔ delatnosti</li>
          <li>- zašto baš mi? (trust seo)</li>
          <li>- licence, priznanja (trust seo)</li>
          <li>- novosti</li>
          <li>✔ SEO footer</li>
          <li>- chat</li>
          <li>✔ strana: kontakt</li>
          <li>✔ strana: o nama</li>
        </ul>
      </AppBoxContainerCentered>
    </template>
  </AppBoxPageWrap>
</template>
