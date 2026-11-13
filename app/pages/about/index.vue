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

const { $$ } = useNuxtApp();
const d = useDisplay();
const theme = useTheme();

const MP_FACTS = [
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
  },
  {
    icon: "mdi:shield-check",
    header: "100%",
    description: "Garantovan kvalitet svake izrade",
    optional: true,
  },
];
const mp_facts = computed(() =>
  MP_FACTS.filter((node) => (d.sm.value ? true !== node.optional : true)),
);

const appNavHeight = computed(() =>
  $$.config("layout.component.AppNavAppBar.height"),
);
const isDark = computed(() => theme.global.current.value.dark);
const H = computed(() =>
  d.smAndUp.value ? `calc(100dvh - ${appNavHeight.value ?? 0}px)` : 422,
);

// yt-id: idxkQgb5KNA; provider="youtube"
// @@eos
</script>
<template>
  <AppBoxPageWrap class="page--about">
    <AppSlidesHero
      :height="H"
      cta="Zatražite ponudu"
      class="mt-0"
      :props-action="{
        tile: true,
      }"
    />
    <!-- mp-facts -->
    <AppGridAutoCells
      :cell-width="
        d.mdAndUp.value
          ? $$.Math.floor((d.width.value - 16 - 3) / 5)
          : d.smAndUp.value
            ? $$.Math.floor((d.width.value - 16 - 2) / 3)
            : $$.Math.floor((d.width.value - 16 - 1) / 2)
      "
      class="gap-px !py-px"
    >
      <VCard
        v-for="(fact, idx) in mp_facts"
        tile
        variant="flat"
        color="ui"
        class="text-center fill-height py-4"
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
    </AppGridAutoCells>

    <!-- about -->
    <AppCardSectionPrimary variant="flat">
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

      <!-- intro -->
      <AppBoxContainerCentered fluid :max-width="undefined">
        <template
          :key="item.html"
          v-for="(item, idx) in [
            {
              image: '/images/stock/013.jpg',
              html: `<p>Neki sviraju gitaru, mi <em>&quot;sviramo&quot;</em> čelik i aluminijum. I to već decenijama. Od 1988. godine, u srcu Šumadije, u Mladenovcu, mi smo <strong>firma koja od metala pravi pouzdana rešenja</strong> &dash; specijalizovani smo za izradu industrijske opreme, metalnih konstrukcija i stolarije po merilima klijenata.</p><p> Počeli smo kao mala radionica, a danas smo prepoznatljiv brend ne samo u Beogradu i Šumadiji, već širom cele Srbije i Evrope &dash; partner na kog se industrija oslanja kada je u pitanju oprema i konstrukcije izrađeni po meri.</p>`,
            },
            {
              image: '/images/stock/023.jpg',
              html: `Srce naše firme nisu mašine &dash; to su ljudi. Goran Milenković i Dušan Milenković, diplomirani mašinski inženjer i inženjer zavarivanja, predvode tim vrhunskih majstora. Izrađujemo industrijsku opremu i metalne konstrukcije po meri &dash; <strong>naši inženjeri modele pretvaraju u stvarnost</strong>, uz CNC obradu, lasersko sečenje, peskarenje i plastifikaciju.</p><p> Ali bez našeg jakog tima &dash; to je samo gomila hladnog gvožđa. Zato volimo da čujemo svaku vašu ideju uz kafu i kažemo &dash; možemo.</p>`,
            },
            {
              image: '/images/stock/025.jpg',
              html: `<p>Iako radimo sa ozbiljnom opremom, negujemo otvoren i direktan pristup &dash; slušamo šta vam  treba i odgovaramo konkretno, bilo da je reč o maloj žardinjeri ili zahtevnom komadu industrijske opreme. Iza nas su projekti u termoelektrani Kostolac, reaktoru vode u Kruševcu, i na brojnim luksuznim objektima kod nas i preko.</p><p><strong>Metal-Promet je pouzdan partner za izradu industrijske opreme i metalnih konstrukcija</strong>, i zato obratite nam se za rešenje koje je po vašim merilima i potrebama.</p>`,
            },
            //
          ]"
        >
          <VCard
            variant="text"
            tile
            :style="[
              d.mdAndUp.value
                ? {
                    height: `calc(81dvh - ${appNavHeight ?? 0}px - 2rem)`,
                  }
                : undefined,
            ]"
            :class="{
              '!bg-[rgb(var(--v-theme-surface-variant))]': $$.isOdd(idx),
            }"
          >
            <AppGridTwoCells
              :stack="!d.mdAndUp.value"
              class="h-full"
              :invert="!$$.isOdd(idx)"
            >
              <template #media>
                <NuxtImg
                  :src="item.image"
                  :class="[
                    'w-full object-cover object-top',
                    d.mdAndUp.value ? 'h-full' : 'h-[44dvh]',
                  ]"
                />
              </template>
              <template #text>
                <VCardText
                  class="indent-4"
                  :class="[
                    d.smAndUp.value ? 'pa-12 text-h6' : 'pa-4 text-body-1',
                  ]"
                >
                  <AppBoxBase
                    v-html="item.html"
                    :class="[
                      'space-y-4',
                      !d.mdAndUp.value ? 'pb-10' : undefined,
                    ]"
                  />
                </VCardText>
              </template>
            </AppGridTwoCells>
          </VCard>
        </template>
      </AppBoxContainerCentered>
    </AppCardSectionPrimary>

    <!-- istorijat -->
    <VSpacer class="mt-px" />
    <AppCardSectionPrimary variant="flat">
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
            style: `height: calc(100svh - ${$$.config('layout.component.AppNavAppBar.height')}px - ${ctx.titleSize.height ?? 0}px - 2rem) !important;`,
          }"
        />

        <!-- vrednosti -->
        <AppBoxBase
          class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 px-5 py-10"
          :class="[
            { 'space-y-10': !d.smAndUp.value },
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
      </template>
    </AppCardSectionPrimary>

    <!-- jos odlika; more props -->
    <VSpacer class="mt-px" />
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
                  'Proizvodnja industrijske opreme po meri',
                  'Izrada čeličnih konstrukcija i nadstrešnica',
                  'Metalna stolarija, kovano gvožđe',
                  'Uslužno plastificiranje metala',
                  'CNC obrada metala',
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
                  'Reaktor otpadnih voda, Kruševac',
                  'Remont u termoelektrana Kostolac',
                  'Brojni projekti u Beču, Austrija, Švajcarskoj, Engleskoj',
                  'Luksuzne kuće i vile, centralna Srbija',
                  'Vrtić &quot;Oblak sreće&quot; - Mladenovac',
                  'Plastifikacija auto delova',
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
                  'Linija za hemijsku pripremu',
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
                :height="211"
                cover
                :src="node.image.src"
                v-bind="node.image.props"
              >
                <AppBoxBase class="opacity-[.5] h-full bg-ui" />
              </VImg>
              <VCardTitle class="text-center pt-4">{{ node.title }}</VCardTitle>
              <VCardText class="!ps-[1em]">
                <VList bg-color="transparent" variant="text">
                  <VListItem
                    prepend-gap="1em"
                    :key="item"
                    v-for="item in node.items"
                    slim
                    class="ps-0 text-body-1"
                  >
                    <template #prepend>
                      <IconX
                        icon="$complete"
                        size="1.5rem"
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
