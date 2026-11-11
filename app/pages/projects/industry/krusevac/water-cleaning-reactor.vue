<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useCycleItems } from "~/composables/utils/use-cycle-items";

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

const d = useDisplay();
const { $$ } = useNuxtApp();

const appNavHeight = computed(() =>
  $$.config("layout.component.AppNavAppBar.height"),
);

const ctrl = useCycleItems(
  $$.shuffle(
    [
      {
        src: "/images/slides/project-water-reactor/01.jpg",
        show: true,
      },
      {
        src: "/images/slides/project-water-reactor/02.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/03.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/04.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/05.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/06.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/07.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/08.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/09.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/10.jpg",
      },
      {
        src: "/images/slides/project-water-reactor/11.jpg",
      },
    ].filter((node) => false !== node?.show),
  ),
  {
    key: (node) => node.src,
  },
);

// @@eos
</script>

<template>
  <AppBoxPageWrap
    class="page--projects-industry-krusevac-water-cleaning-reactor"
  >
    <!-- section: slides.hero -->
    <AppGridStackedFrames>
      <!-- slides -->
      <AppGridStackedFramesItem>
        <VCarousel
          cycle
          :interval="9012"
          :show-arrows="false"
          hide-delimiters
          continuous
          crossfade
          :model-value="ctrl.currentKey.value"
          :style="{
            height: `calc(${d.mobile.value ? '50dvh' : '100dvh'} - ${appNavHeight ?? 0}px)`,
          }"
          @update:model-value="ctrl.active"
        >
          <VCarouselItem
            v-for="slide in ctrl.items"
            :key="slide.src"
            :src="slide.src"
            :value="slide.src"
            cover
            transition="app-transition-cross-scale"
          />
        </VCarousel>
      </AppGridStackedFramesItem>

      <!-- meta -->
      <AppGridStackedFramesItem class="z-[1] d-flex flex-col">
        <VCard
          tile
          color="rgba(var(--v-theme-ui),.5)"
          class="backdrop-blur-sm !text-[rgb(var(--v-theme-on-ui))]"
        >
          <VCardItem class="position-relative">
            <IconX
              v-if="!d.mobile.value"
              icon="mdi:engine"
              size="2rem"
              class="opacity-[.33] position-absolute left-4 top-[50%] -translate-y-[50%]"
            />
            <VCardTitle
              class="text-shadow-sm text-center"
              :class="[d.mobile.value ? undefined : 'text-h4']"
              >Reaktor otpadnih voda</VCardTitle
            >
          </VCardItem>
        </VCard>
        <VSpacer v-if="d.mobile.value" />
        <AppBoxFlex class="pa-4">
          <VSpacer />
          <AppBoxBase class="d-flex gap-4">
            <VBtn
              @click="ctrl.prev"
              size="large"
              color="white"
              variant="plain"
              icon
              rounded="circle"
            >
              <IconX size="3rem" icon="$prev" class="*:!filter-shadow-sharp" />
            </VBtn>
            <VBtn
              @click="ctrl.next"
              size="large"
              color="white"
              variant="plain"
              icon
              rounded="circle"
            >
              <IconX size="3rem" icon="$next" class="*:!filter-shadow-sharp" />
            </VBtn>
          </AppBoxBase>
          <VSpacer v-if="d.mobile.value" />
        </AppBoxFlex>
        <VSpacer v-if="!d.mobile.value" />
        <AppUiBoxWaterCleaningReactor v-if="!d.mobile.value" />
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>
    <AppUiBoxWaterCleaningReactor
      color="rgba(var(--v-theme-ui),.81)"
      v-if="d.mobile.value"
    />

    <!-- section: project.meta -->
    <AppBoxBase
      :key="item.title"
      v-for="(item, idx) in [
        {
          title: 'Pregled',
          icon: '$info',
          description: `<p>MBBR <em>(Moving Bed Biofilm Reactor)</em> reaktor je ključna komponenta postrojenja za prečišćavanje otpadnih voda &dash; služi za biološku obradu otpadnih voda pomoću pokretnog sloja biofilma, gde mikroorganizmi razgrađuju zagađivače i time omogućavaju ekološki prihvatljivo ispuštanje prečišćene vode u okolinu. Namenjen je gradskoj kanalizacionoj infrastrukturi Kruševca i predstavlja deo sistema za zaštitu životne sredine.</p><p>Obim projekta obuhvatao je kompletnu nabavku materijala, zavarivanje i plastifikaciju svih komponenti, kontrolu kvaliteta svakog pojedinačnog dela, kao i izradu i isporuku gotovog reaktora u roku od tri meseca, sve prema zahtevima klijenta.</p>`,
          steps: null,
        },
        {
          title: 'Realizacija',
          icon: 'material-symbols:stairs',
          description: null,
          steps: [
            {
              title: 'Inženjering i dokumentacija',
              description: 'Tehnička priprema prema zahtevima klijenta',
            },
            {
              title: 'Nabavka i sečenje materijala',
              description:
                'Čelični limovi, profili i cevi prema radioničkim crtežima',
            },
            {
              title: 'Izrada rama i tela reaktora',
              description:
                'Montaža konstrukcije, postavljanje limova, pregradnih komora i cevnih prolaza',
            },
            {
              title: 'Zavarivanje i ispitivanja',
              description: 'VT, PT i RT kontrole svih zavara',
            },
            {
              title: 'Montaža unutrašnje opreme',
              description:
                'MBBR mediji, cevni razvod, prirubnice, zatvarači i ventilacija',
            },
            {
              title: 'Zaštita od korozije',
              description:
                'Troslojni sertifikovani sistem premaza, prajmer + međusloj + završni',
            },
            {
              title: 'Platforma, ograda i merdevine',
              description: 'Za bezbedan pristup vrhu reaktora',
            },
            {
              title: 'Hidrostatičko ispitivanje',
              description: 'Provera integriteta cevi i komora pod pritiskom',
            },
            {
              title: 'Transport i montaža',
              description: 'Povezivanje sa infrastrukturom u Kruševcu',
            },
            {
              title: 'Završna kontrola i predaja',
              description: 'QA/QC dokumentacija i puštanje u probni rad',
            },
          ],
        },
        {
          title: 'Isporuke',
          icon: 'mdi:clipboard-text',
          description: null,
          steps: [
            {
              title: 'Projektovanje i realizacija',
              description:
                'Izrada kompletnog reaktora dimenzionisanog prema zahtevima klijenta',
            },
            {
              title: 'Izrada i zavarivanje',
              description:
                'Precizna izrada i zavarivanje čeličnih panela i noseće konstrukcije',
            },
            {
              title: 'Montaža i integracija',
              description:
                'Postavljanje procesne opreme, uključujući cevovode, mlaznice i sisteme za distribuciju vode',
            },
            {
              title: 'Zaštita',
              description:
                'Antikorozivna priprema u skladu sa industrijskim standardima za opremu za prečišćavanje',
            },
            {
              title: 'Kompletna realizacija',
              description:
                'Predaja gotovog proizvoda po sistemu <em>&quot;ključ u ruke&quot;</em> u roku od 3 meseca',
            },
          ],
        },
        {
          title: 'Ishod',
          icon: 'mdi:package-variant-closed-check',
          description: `<p>Projekat je rezultirao potpuno funkcionalnim MBBR reaktorom za otpadne vode, izrađenim u celosti prema zahtevima investitora. Precizna izrada, od nabavke materijala preko zavarivanja i farbanja do kontrole kvaliteta svake pojedine komponente, obezbedila je tehničku usklađenost i pouzdanost sistema. </p><p>Ovaj projekat realizovan u roku od tri meseca, <strong>potvrdio je inženjersko i majstorsko znanje tima</strong> i otvorio put ka daljem razvoju u industrijskoj proizvodnji procesne opreme.</p>`,
          steps: null,
        },
        {
          title: 'Značaj',
          icon: '$ratingFull',
          description: `<p>Realizacija projekta predstavlja potvrdu tehničke i organizacione kompetencije našeg tima za izvođenje krupnih industrijskih projekata. Ovaj projekat dokazuje da <strong>posedujemo kapacitete da odgovorimo na zahteve složenih inženjerskih zadataka</strong> &dash; od projektovanja i koordinacije do isporuke u zadatim rokovima i standardima kvaliteta.</p><p>Uspešna implementacija učvršćuje našu poziciju pouzdanog partnera za zahtevne industrijske poduhvate.</p>`,
          steps: null,
        },
      ]"
      :class="[
        $$.isOdd(idx) ? '!bg-[rgb(var(--v-theme-surface-variant))]' : undefined,
      ]"
    >
      <AppBoxContainerCentered :class="d.smAndUp.value ? 'pa-12' : 'px-2 py-5'">
        <VCard tile variant="text">
          <VCardItem class="border-b">
            <template #prepend>
              <IconX :icon="item.icon" size="2rem" class="!opacity-[.22]" />
            </template>
            <VCardTitle class="text-h4 ms-4">{{ item.title }}</VCardTitle>
          </VCardItem>
          <VCardText
            v-if="item.description"
            class="indent-4 space-y-5"
            :class="[
              d.smAndUp.value ? 'text-h6 pa-5' : 'text-body-1 px-0 pt-2',
            ]"
            v-html="item.description"
          />
          <VList
            v-if="!$$.isEmpty(item.steps)"
            tile
            variant="text"
            bg-color="transparent"
            lines="three"
          >
            <VListItem v-for="(node, idx) in item.steps">
              <template v-if="d.smAndUp.value" #prepend>
                <IconX icon="$complete" size="2rem" class="text-success" />
              </template>
              <VListItemTitle
                class="text-shadow-sm *font-weight-bold text-h6"
                >{{ node.title }}</VListItemTitle
              >
              <VListItemSubtitle
                class="text-body-1 pt-1"
                v-html="node.description"
              />
            </VListItem>
          </VList>
        </VCard>
      </AppBoxContainerCentered>
    </AppBoxBase>
  </AppBoxPageWrap>
</template>
