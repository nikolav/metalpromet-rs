<script setup lang="ts">
import { useDisplay } from "vuetify";

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
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="material-symbols:id-card-outline"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <h2>Ko smo &dash; Šta radimo</h2>
      </template>
      <AppBoxBase>
        <VContainer fluid>
          <VRow dense>
            <VCol md="7">
              <template
                :key="node.html"
                v-for="(node, idx) in [
                  {
                    bg: `bg-[url('/images/stock/020.jpg')] bg-[center_top]`,
                    html: `Neki sviraju gitaru, mi <em>&ldquo;sviramo&rdquo;</em> čelik i aluminijum. I to već decenijama. Od <strong>1988.</strong> godine, u srcu Šumadije, u Mladenovcu, mi smo firma koja od hladnog metala pravi tople priče - ograde koje čuvaju, kapije koje dočekuju, stepenice koje vode gore, metalne konstrukcije koje nose, štite i krase. Počeli smo kao mala radionica, a danas smo prepoznatljiv brend ne samo u Beogradu i Šumadiji, već širom cele Srbije i Evrope.`,
                  },
                  {
                    bg: `bg-[url('/images/stock/021.jpg')] bg-[center_top]`,
                    html: `Srce naše firme nisu mašine &dash; to su ljudi. Goran Milenković, naš predstavnik, i Dušan Milenković, diplomirani mašinski inženjer i inženjer zavarivanja, predvode tim vrhunskih majstora koji umeju sa svakim metalom. Naši inženjeri <em>3D</em> modele pretvaraju u stvarnost, a mi pazimo na  svaki detalj. Imamo veliku peć za plastifikaciju, radimo <em>CNC</em> obradu, lasersko sečenje, peskarenje, hladno cinkovanje. Ali bez tima &dash; to je samo gvožđe. Zato volimo da čujemo svaku vašu ideju uz kafu i kažemo &dash; možemo.`,
                  },
                  {
                    bg: `bg-[url('/images/stock/022.jpg')] bg-[center_top]`,
                    html: `Iako radimo sa ozbiljnim mašinama, ne volimo ozbiljne face. Više volimo da popričamo sa vama i da iz prve ruke čujemo šta vam treba. Od male žardinjere, preko kapije i <em>RAL</em> karti, do velike industrijske konstrukcije za Beč ili London. Radili smo u Termoelektrani Kostolac, na luksuznim vilama na Kosmaju, u Austriji, Švajcarskoj, Nemačkoj, pa čak i  u Engleskoj. Naši radovi su godinama prepoznatljivi u Srbiji i van nje.`,
                  },
                  {
                    bg: `bg-[url('/images/stock/023.jpg')] bg-center`,
                    html: `Nama je metal u krvi &dash; bukvalno. U radionici, u svakom zavaru, u svakoj ogradi i kapiji koju isporučimo. Zato, ako vam treba nešto od metala &dash; nemojte da se dvoumite. Dođite da zajedno stvorimo nešto što traje. Jer mi stvaramo kvalitet koji traje, a poverenje gradimo otvorenošću i iskrenim odnosom. Posvećenost je ono što nas vodi.`,
                  },
                ]"
              >
                <VCard variant="text" tile>
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
                        :class="{ 'px-0 pb-0': !d.smAndUp.value }"
                      >
                        <p v-html="node.html" />
                      </VCardText>
                    </template>
                  </AppGridTwoCells>
                </VCard>
                <AppBoxCentered
                  class="my-12"
                  v-if="d.mdAndUp.value ? idx < 3 : true"
                >
                  <IconX
                    icon="local:line-art-01"
                    size="2rem"
                    class="opacity-[.22]"
                  />
                </AppBoxCentered>
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
      </AppBoxBase>
    </AppCardSectionPrimary>
    <h2 class="text-center">strana:o-nama 🚧</h2>
  </AppBoxPageWrap>
</template>
