<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";

definePageMeta({
  layout: "default",
  i18n: {
    paths: {
      sr: "/o-nama",
      "sr-cyrl": "/o-nama",
      en: "/about-us",
    },
  },
  context: {
    title: "pages.about.title",
    description: "pages.about.description",
  },
});

const d = useDisplay();
const theme = useTheme();
const { $$ } = useNuxtApp();

const mp_facts = [
  {
    icon: "local:tree-of-life",
    header: "1988.",
    description: "Godina osnivanja",
  },
  {
    icon: "material-symbols:rocket-launch",
    header: "80+",
    description: "Uspešnih projekata godišnje",
  },
  {
    icon: "mdi:crown",
    header: "200+",
    description: "Broj zadovoljnih klijenata",
  },
  {
    icon: "mdi:earth",
    header: "15+",
    description: "Broj zemalja u koje izvozimo",
  },
  {
    icon: "mdi:toolbox",
    header: "18",
    description: "Broj delatnosti u okviru Metal-Prometa",
  },
  {
    icon: "mdi:size-xl",
    header: "7.8m",
    description: "Dužina peći za plastifikaciju",
  },
  {
    icon: "material-symbols:siren-outline",
    header: "24/7",
    description: "Radna spremnost za hitne intervencije i montaže",
  },
  {
    icon: "$ratingFull",
    header: "AA+",
    description: "Bonitetna ocena firme",
  },
  {
    icon: "mdi:chart-line",
    header: "+71%",
    description: "Stabilan trend poslovanja",
    optional: undefined,
  },
  {
    icon: "mdi:shield-check",
    header: "100%",
    description: "Garantovan kvalitet svake izrade",
    optional: true,
  },
];

const isDark = computed(() => theme.global.current.value.dark);
const H = computed(() =>
  d.smAndUp.value
    ? `calc(100vh - ${$$.config("layout.component.AppNavAppBar.height")!}px)`
    : 422,
);

// yt-id: idxkQgb5KNA; provider="youtube"
// @@eos
</script>
<template>
  <AppBoxPageWrap class="page--about">
    <AppSlidesHero :height="H" cta="Zatražite ponudu" class="mt-0" />

    <!-- ko smo -->
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="material-symbols:id-card-outline"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />

        <AppCardSectionPrimaryTitle>
          Tradicija, znanje &dash; naš put
        </AppCardSectionPrimaryTitle>
      </template>
      <VContainer fluid>
        <VRow dense>
          <VCol md="7">
            <template
              :key="node.html"
              v-for="(node, idx) in [
                {
                  bg: `bg-[url('/images/stock/020.jpg')] bg-[right_top]`,
                  html: `Neki sviraju gitaru, mi <em>&ldquo;sviramo&rdquo;</em> čelik i aluminijum. I to već decenijama. Od <strong>1988.</strong> godine, u srcu Šumadije, u Mladenovcu, mi smo firma koja od hladnog metala pravi tople priče - ograde koje čuvaju, kapije koje dočekuju, stepenice koje vode gore, metalne konstrukcije koje nose, štite i krase. Počeli smo kao mala radionica, a <strong>danas smo prepoznatljiv brend</strong> ne samo u Beogradu i Šumadiji, već širom cele Srbije i Evrope.`,
                },
                {
                  bg: `bg-[url('/images/stock/021.jpg')] bg-[center_top]`,
                  html: `Srce naše firme nisu mašine &dash; to su ljudi. Goran Milenković, naš predstavnik, i Dušan Milenković, diplomirani mašinski inženjer i inženjer zavarivanja, predvode tim vrhunskih majstora koji umeju sa svakim metalom. Naši inženjeri <em>3D</em> modele pretvaraju u stvarnost, a mi pazimo na  svaki detalj. Imamo veliku peć za plastifikaciju, radimo <em>CNC</em> obradu, lasersko sečenje, peskarenje, hladno cinkovanje. Ali bez tima &dash; to je samo gvožđe. Zato <strong>volimo da čujemo svaku vašu ideju uz kafu</strong> i kažemo &dash; možemo.`,
                },
                {
                  bg: `bg-[url('/images/stock/022.jpg')] bg-[left_top]`,
                  html: `Iako radimo sa ozbiljnim mašinama, ne volimo ozbiljne face. Više volimo da popričamo sa vama i da <strong>iz prve ruke čujemo šta vam treba</strong>. Od male žardinjere, preko kapije i <em>RAL</em> karti, do velike industrijske konstrukcije za Beč ili London. Radili smo u Termoelektrani Kostolac, na luksuznim vilama na Kosmaju, u Austriji, Švajcarskoj, Nemačkoj, pa čak i  u Engleskoj. Naši radovi su godinama prepoznatljivi u Srbiji i van nje.`,
                },
              ]"
            >
              <VCard
                variant="text"
                :tile="!d.smAndUp.value"
                :rounded="
                  d.smAndUp.value
                    ? 0 < idx % 2
                      ? '0 ts-xl'
                      : '0 te-xl'
                    : undefined
                "
              >
                <AppGridTwoCells
                  :stack="!d.smAndUp.value"
                  :invert="!(0 < idx % 2)"
                  :props-text="{
                    class: d.smAndUp.value ? 'pb-5' : undefined,
                  }"
                  :props-media="{
                    class: [
                      `bg-cover ${node.bg}`,
                      { '!min-h-[248px]': !d.smAndUp.value },
                    ],
                  }"
                >
                  <template #text>
                    <VCardText
                      class="indent-4"
                      :class="{
                        'px-0 pb-0': !d.smAndUp.value,
                        'min-h-[248px]': d.smAndUp.value,
                      }"
                    >
                      <p v-html="node.html" />
                    </VCardText>
                  </template>
                </AppGridTwoCells>
              </VCard>
              <AppBoxBase
                class="d-flex"
                :class="[
                  d.smAndUp.value
                    ? idx == 2
                      ? !d.mdAndUp.value
                        ? 'mb-16'
                        : 'mb-2'
                      : 'mb-16'
                    : '',
                  {
                    'my-16': !d.smAndUp.value,
                  },
                ]"
              >
                <VSpacer v-if="d.smAndUp.value ? 0 < idx % 2 : true" />
                <IconX
                  :icon="
                    d.smAndUp.value ? 'local:line-art-02' : 'local:line-art-01'
                  "
                  :size="d.smAndUp.value ? '3.33rem' : '1.5rem'"
                  class="opacity-[.122]"
                  :class="[
                    d.smAndUp.value
                      ? 0 < idx % 2
                        ? 'rotate-180'
                        : '-rotate-90'
                      : undefined,
                  ]"
                />
                <VSpacer v-if="!d.smAndUp.value" />
              </AppBoxBase>
            </template>
          </VCol>
          <VCol md="5">
            <AppBoxContainerCentered fluid>
              <VRow dense>
                <template :key="fact.description" v-for="fact in mp_facts">
                  <VCol
                    v-if="!d.sm.value ? true : !fact.optional"
                    cols="6"
                    sm="4"
                    md="6"
                    align-self="stretch"
                  >
                    <VCard
                      class="text-center fill-height"
                      :class="[d.smAndUp.value ? 'py-2' : 'pt-2']"
                      color="ui"
                      :rounded="false"
                    >
                      <VCardItem>
                        <IconX
                          :icon="fact.icon ?? '$info'"
                          class="text-on-ui opacity-20"
                          size="3rem"
                        />
                      </VCardItem>
                      <VCardTitle
                        class="text-accent text-shadow-sm"
                        :class="d.lgAndUp.value ? 'text-h4' : 'text-h5'"
                      >
                        <strong>{{ fact.header }}</strong>
                      </VCardTitle>
                      <VCardText>{{ fact.description }}</VCardText>
                    </VCard>
                  </VCol>
                </template>
              </VRow>
            </AppBoxContainerCentered>
          </VCol>
        </VRow>
      </VContainer>
    </AppCardSectionPrimary>

    <!-- istorijat -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:book-open-outline"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <AppCardSectionPrimaryTitle>
          Od iskre do Evrope
        </AppCardSectionPrimaryTitle>
      </template>

      <template #default="ctx">
        <!-- slides:history -->
        <AppSlidesHistory
          :props-carousel="{
            style: `height: calc(100vh - ${$$.config('layout.component.AppNavAppBar.height')}px - ${ctx.titleSize.height ?? 0}px - 2rem) !important;`,
          }"
        />
      </template>
    </AppCardSectionPrimary>

    <!-- vrednosti -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:podium-gold"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <AppCardSectionPrimaryTitle>
          Naše vrednosti
        </AppCardSectionPrimaryTitle>
      </template>

      <AppBoxBase
        class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 pa-5"
        :class="[
          { 'space-y-5': !d.smAndUp.value },
          d.smAndUp.value
            ? `!bg-[url('/images/stock/024.png')] !bg-cover ${
                isDark
                  ? '!bg-[rgba(var(--v-theme-ui),.122)] !bg-blend-color-dodge'
                  : '!bg-[rgba(var(--v-theme-surface-light),.122)] !bg-blend-overlay'
              }`
            : `!bg-[url('/images/stock/000-1.png')] !bg-[rgba(var(--v-theme-ui),.1)] bg-blend-overlay bg-repeat`,
        ]"
      >
        <AppBoxCentered
          :key="node.title"
          v-for="node in [
            {
              icon: '$ratingFull',
              title: 'Kvalitet i pouzdanost',
              text: 'Posvećeni smo savršenstvu u svakoj fazi projekta.',
            },
            {
              icon: 'local:certificate-trusted',
              title: 'Integritet i poverenje',
              text: 'Poverenje gradimo otvorenošću i iskrenim odnosom.',
            },
            {
              icon: 'mdi:security',
              title: 'Bezbednost i odgovornost',
              text: 'Bezbednost je uvek na prvom mestu.',
            },
            {
              icon: 'local:tree-of-life',
              title: 'Tradicija i iskustvo',
              text: 'Svaki projekat nosi pečat iskustva i posvećenosti zanatu.',
            },
            {
              icon: 'mdi:trophy',
              title: 'Timski duh i posvećenost',
              text: 'Verujemo da je dobar tim ključ svakog uspešnog projekta.',
            },
            {
              icon: 'local:robot-cute-head',
              title: 'Inovacije i rešenja',
              text: 'Povezujemo savremenu tehnologiju i praktično znanje.',
            },
          ]"
        >
          <AppBoxBase
            class="d-flex flex-col items-center justify-center text-center pa-5 gap-1"
          >
            <IconX
              :icon="node.icon"
              :size="d.smAndUp.value ? '4rem' : '3rem'"
              class="!opacity-[.33]"
            />
            <VCardTitle class="text-h5 text-accent text-shadow-sm">{{
              node.title
            }}</VCardTitle>
            <p class="text-body-1">
              {{ node.text }}
            </p>
          </AppBoxBase>
        </AppBoxCentered>
      </AppBoxBase>
    </AppCardSectionPrimary>

    <!-- jos odlika; more props -->
    <VSpacer class="mt-12" />
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:package-variant-closed-check"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <AppCardSectionPrimaryTitle>
          Sve na jednom mestu
        </AppCardSectionPrimaryTitle>
      </template>

      <VContainer fluid class="pa-2">
        <VRow dense>
          <VCol
            align-self="stretch"
            sm="6"
            md="3"
            :key="node.title"
            v-for="node in [
              {
                title: 'Šta radimo',
                image: {
                  src: '/images/stock/023.jpg',
                  bg: `!bg-[url('/images/stock/000-1.png')] !bg-[rgba(var(--v-theme-ui),.1)] bg-blend-overlay`,
                  props: {},
                },
                items: [
                  'Izrada čeličnih konstrukcija',
                  'Metalne ograde, kapije i nadstrešnice',
                  'Uslužno plastificiranje metala',
                  'Kovano gvožđe, stepenice, nameštaj',
                  'CNC obrada metala i peskarenje',
                  '3D modelovanje, renderi i projektovanje',
                  'Montaže u Srbiji i inostranstvu',
                ],
              },
              {
                title: 'Projekti',
                image: {
                  src: '/images/stock/025.jpg',
                  bg: `!bg-[url('/images/stock/000-1.png')] !bg-[rgba(var(--v-theme-ui),.1)] bg-blend-overlay`,
                  props: {
                    position: 'bottom',
                  },
                },
                items: [
                  'Termoelektrana Kostolac',
                  'Vrtić &quot;Oblak sreće&quot; - Mladenovac',
                  'Brojni projekti u Beču, Austrija, Švajcarskoj, Engleskoj',
                  'Luksuzne kuće i vile na Kosmaju i Avali',
                  'Plastifikacija felni za automobile',
                ],
              },
              {
                title: 'Oprema i tehnologije',
                image: {
                  src: '/images/stock/026.jpg',
                  bg: `!bg-[url('/images/stock/000-1.png')] !bg-[rgba(var(--v-theme-ui),.1)] bg-blend-overlay`,
                  props: {},
                },
                items: [
                  'Komora za plastifikaciju',
                  'Peć za polimerizaciju',
                  'Linija za hemijsku pripremu i cink prajmer',
                  'CNC mašine za obradu metala',
                  'Oprema za peskarenje',
                  'Lasersko sečenje panela',
                ],
              },
              {
                title: 'Zašto Metal-Promet?',
                image: {
                  src: '/images/stock/013.jpg',
                  bg: `!bg-[url('/images/stock/000-1.png')] !bg-[rgba(var(--v-theme-ui),.1)] bg-blend-overlay`,
                  props: {
                    position: 'top',
                  },
                },
                items: [
                  'Tradicija i pouzdanost',
                  'Kvalitet izrade',
                  'Sopstvena proizvodnja',
                  'Moćan pogon',
                  'Izvozno iskustvo',
                  'Tim stručnjaka',
                ],
              },
            ]"
          >
            <VCard
              class="fill-height"
              :class="{ [`${node.image.bg}`]: !d.smAndUp.value }"
            >
              <VImg
                v-if="d.smAndUp.value"
                :height="192"
                cover
                :src="node.image.src"
                v-bind="node.image.props"
              >
                <AppBoxBase class="opacity-[.5] h-full bg-ui" />
              </VImg>
              <VCardTitle class="text-center pt-4">{{ node.title }}</VCardTitle>
              <VCardText class="!ps-[1em]">
                <VList
                  :items="node.items"
                  bg-color="transparent"
                  variant="text"
                >
                  <VListItem
                    prepend-gap="1em"
                    :key="item"
                    v-for="item in node.items"
                    slim
                    class="ps-0"
                  >
                    <template #prepend>
                      <IconX
                        icon="$complete"
                        size="1.22rem"
                        class="text-success"
                      />
                    </template>
                    <span class="text-body-2">{{ item }}</span>
                  </VListItem>
                </VList>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </AppCardSectionPrimary>
  </AppBoxPageWrap>
</template>
