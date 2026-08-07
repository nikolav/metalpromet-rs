<script setup lang="ts">
import { useDisplay } from "vuetify";

import DELATNOSTI from "~/assets/sve-delatnosti.json";
import SLIDES_PRIPREMA from "~/assets/slides-priprema.json";
import SLIDES_PROIZVODNJA from "~/assets/slides-proizvodnja.json";
import SLIDES_GOTOVI_PROIZVODI from "~/assets/slides-gotovi-proizvodi.json";
import SLIDES_ZAVRSNA_OBRADA from "~/assets/slides-zavrsna-obrada.json";

import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

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

const localePath = useLocalePath();
const d = useDisplay();
const { $$, $lightbox } = useNuxtApp();
const H = computed(() =>
  d.smAndUp.value
    ? `calc(100vh - ${$$.config("layout.component.AppNavAppBar.height")!}px)`
    : 422,
);

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

const toggleVideoPopup = useToggleFlag();
const videoCurrent = shallowRef<{ key: string }>();
const videos = <any>{
  priprema: {
    tall: true,
    provider: "youtube",
    src: "idxkQgb5KNA",
    "props-iframe": {
      title:
        "Zaštita metalnih konstrukcija i proizvoda • Metal-Promet Mladenovac",
    },
  },
  proizvodnja: {
    tall: true,
    provider: "youtube",
    src: "idxkQgb5KNA",
    "props-iframe": {
      title:
        "Zaštita metalnih konstrukcija i proizvoda • Metal-Promet Mladenovac",
    },
  },
  "gotovi-proizvodi": {
    tall: true,
    provider: "youtube",
    src: "idxkQgb5KNA",
    "props-iframe": {
      title:
        "Zaštita metalnih konstrukcija i proizvoda • Metal-Promet Mladenovac",
    },
  },
  "zavrsna-obrada": {
    tall: true,
    provider: "youtube",
    src: "idxkQgb5KNA",
    "props-iframe": {
      title:
        "Zaštita metalnih konstrukcija i proizvoda • Metal-Promet Mladenovac",
    },
  },
};
watch(videoCurrent, (vc) => {
  if (!vc?.key) return;
  toggleVideoPopup();
});

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--index space-y-20">
    <AppSlidesHero :height="H" class="mt-0" />

    <!-- section:about -->
    <AppCardSectionPrimary :props-actions="{ class: 'pt-5' }">
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="$info"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <h2>Ukratko o nama</h2>
      </template>

      <!-- about -->
      <VSpacer class="mt-2" />
      <AppBoxContainerCentered
        fluid
        :max-width="undefined"
        :class="{ 'px-2': d.smAndUp.value }"
      >
        <VRow dense>
          <VCol
            :align-self="d.smAndUp.value ? 'stretch' : undefined"
            md="3"
            sm="6"
            :key="node.text"
            v-for="node in [
              {
                image: '/images/stock/009.jpg',
                icon: {
                  name: 'material-symbols:id-card-outline',
                  size: '2.22rem',
                },
                text: `Mi smo Metal-Promet iz Mladenovca, porodična firma specijalizovana za kompletne metaloprerađivačke radove – od projektovanja i obrade do zaštite i montaže metalnih konstrukcija.`,
              },

              {
                image: '/images/stock/010.jpg',
                icon: {
                  name: 'local:shield-improved',
                  size: '1.92rem',
                },
                text: `Raspolažemo industrijskom komorom za plastifikaciju dužine 7,8 metara i visine rama do 2,5m, uz obavezan hemijski predtretman i cink prajmer koji garantuju dugotrajnu korozionu postojanost.`,
              },
              {
                image: '/images/stock/011.jpg',
                icon: {
                  name: 'mdi:certificate',
                  size: '2rem',
                },
                text: `Specijalizovani smo za izradu čeličnih i aluminijumskih konstrukcija visoke nosivosti, sa završnom obradom koja podrazumeva hemijsko čišćenje i nanošenje zaštitnih premaza u peći od 7,8m, te toplo i hladno cinkovanje.`,
              },
              {
                image: '/images/stock/012.jpg',
                icon: {
                  name: 'mdi:diamond-stone',
                  size: '2rem',
                },
                text: `Sa sertifikatom bonitetne izvrsnosti i dokazanim izvoznim iskustvom u Evropi (Austrija, Švajcarska i Engleska), garantujemo dugotrajnu korozionu postojanost i estetsku završnicu vaših projekata u celoj Srbiji.`,
              },
            ]"
          >
            <VCard
              color="surface-light"
              elevation="1"
              class="pb-2 d-flex flex-col"
              :class="{ 'h-full': d.smAndUp.value }"
            >
              <AppBoxBase class="h-[192px]">
                <VImg :src="node.image" cover height="100%">
                  <div
                    class="position-relative !w-full !h-full !bg-[rgba(var(--v-theme-ui),.5)]"
                  />
                </VImg>
              </AppBoxBase>
              <AppBoxCentered class="pt-5">
                <IconX
                  :icon="node.icon.name"
                  :size="node.icon.size"
                  class="opacity-20"
                  :class="{ 'w-[4rem]': d.smAndUp.value }"
                />
              </AppBoxCentered>
              <VCardText class="indent-4 text-body-1 *pa-2 *ma-2">
                {{ node.text }}
              </VCardText>
              <VSpacer />
              <VCardActions>
                <VSpacer />
                <VBtn
                  elevation="1"
                  color="current"
                  variant="tonal"
                  tile
                  class="!ps-4"
                  :to="localePath({ name: 'under-construction' })"
                >
                  <template #append>
                    <IconX icon="$next" class="opacity-50" />
                  </template>
                  Saznajte više
                </VBtn>
                <VSpacer />
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
      </AppBoxContainerCentered>

      <!-- ceo:trust -->
      <VSpacer class="mt-2" />
      <AppBoxContainerCentered fluid>
        <VCard
          :rounded="d.mdAndUp.value ? 's-0 e-md' : undefined"
          elevation="2"
          :class="{
            '!border-s-4 !border-s-[rgba(var(--v-theme-primary-variant),.5)]':
              d.mdAndUp.value,
          }"
        >
          <VRow no-gutters>
            <VCol md="7" class="app-container-reset">
              <VContainer fluid class="h-100 pa-0 ma-0">
                <VRow no-gutters class="h-100">
                  <VCol
                    sm="6"
                    class="!bg-cover bg-[rgba(var(--v-theme-surface-light),.66)] bg-blend-multiply"
                    :class="{
                      [`${node.bgImage}`]: true,
                      'py-12': !d.mdAndUp.value,
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
                    <AppBoxCentered class="h-100 text-body-2">
                      <AppBoxBase class="space-y-2 text-center">
                        <AppBoxCentered>
                          <IconX v-bind="node.icon" class="!opacity-[.33]" />
                        </AppBoxCentered>
                        <p class="text-center text-body-1">
                          {{ node.title }}
                        </p>
                        <p class="pa-1">
                          {{ node.text }}
                        </p>
                      </AppBoxBase>
                    </AppBoxCentered>
                  </VCol>
                </VRow>
              </VContainer>
            </VCol>

            <VCol
              md="5"
              class="app-container-reset py-5 space-y-2 bg-[url('/images/stock/014.png')] !bg-[rgba(var(--v-theme-surface-light),.85)] bg-blend-overlay !bg-cover !bg-no-repeat"
              :order="!d.mdAndUp.value ? undefined : 'last'"
            >
              <AppBoxBase>
                <AppBoxCentered>
                  <IconX
                    icon="mdi:puzzle-check"
                    size="2rem"
                    class="opacity-20"
                  />
                </AppBoxCentered>
                <VCardText class="text-body-1">
                  <em
                    >&quot;Ko dugo gleda u vetar, taj zna kad će kiša.&quot;</em
                  >
                  U Metal-Prometu, decenijama gledamo u vetar promena na
                  tržištu, ali ostajemo čvrsto ukorenjeni u onome što znamo
                  najbolje &dash; inženjering i obradu metala. Od 1988. godine
                  gradimo poverenje ne rečima, već delima.</VCardText
                >
              </AppBoxBase>
              <AppBoxBase>
                <AppBoxCentered>
                  <IconX
                    icon="mdi:diamond-stone"
                    size="2rem"
                    class="opacity-20"
                  />
                </AppBoxCentered>
                <VCardText class="text-body-1">
                  Naša proizvodnja u Mladenovcu, svedoči o tome da smo spremni
                  za najzahtevnije projekte. Jer, kako izreka kaže:
                  <em>&quot;Bez muke nema nauke.&quot;</em> &dash; svaki naš
                  zavar, svaka konstrukcija i svaka montaža rezultat su predanog
                  rada i vrhunskog znanja koje ne prepuštamo slučaju.
                </VCardText>
              </AppBoxBase>
            </VCol>
          </VRow>
        </VCard>
      </AppBoxContainerCentered>

      <!-- video -->
      <VSpacer class="mt-2" />
      <AppBoxContainerCentered fluid>
        <VCard variant="text" elevation="1">
          <AppVideoPlayer
            :sources="[{ src: 'ni1k-4yGADw' }]"
            provider="youtube"
            :props-iframe="{
              title: 'Metal-Promet Mladenovac',
            }"
          />
        </VCard>
      </AppBoxContainerCentered>

      <template #actions>
        <VSpacer />
        <VBtn
          elevation="1"
          tile
          class="ps-4"
          variant="tonal"
          size="large"
          color="primary"
          :to="localePath({ name: 'about' })"
          >Saznajte više
          <template #append>
            <IconX icon="$next" class="opacity-50" size="1.5rem" />
          </template>
        </VBtn>
        <VSpacer v-if="!d.smAndUp.value" />
      </template>
    </AppCardSectionPrimary>

    <!-- section:delatnosti -->
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:package-variant-closed-check"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <h2>
          Kompletno rešenje<template v-if="d.smAndUp.value"> za metal</template>
        </h2>
      </template>
      <VCardText class="text-body-1 py-2 px-2">
        <VContainer fluid>
          <AppBoxContainerCentered fluid>
            <VRow>
              <VCol
                :key="node.text"
                v-for="node in [
                  {
                    icon: { name: 'local:conveyor-belt-box', size: '2rem' },
                    text: `Zatvoreni tehnološki krug - od inženjerske ideje, kroz preciznu proizvodnju i estetsku zaštitu, do profesionalne montaže - bez outsourcinga, sve pod jednim krovom.`,
                  },
                  {
                    icon: { name: 'local:brain-outline', size: '2.122rem' },
                    text: `Proizvodna baza u Mladenovcu je tačka sa koje se upravlja brzom i efikasnom realizacijom projekata u Šumadiji, beogradskom okruženju i svim opštinama centralne Srbije.`,
                  },
                  {
                    icon: { name: 'mdi:truck-flatbed', size: '2.5rem' },
                    text: `Naši montažni timovi su dostupni u svim većim gradovima Srbije, uključujući Beograd, Novi Sad i Niš, kao i u okolnim mestima poput Avale, Kosmaja, Aranđelovca i Sopota.`,
                  },
                ]"
                sm="4"
                class="d-flex flex-col items-center space-y-2"
              >
                <VBadge
                  color="success"
                  location="bottom end"
                  offset-x="10"
                  offset-y="10"
                >
                  <template #badge>
                    <IconX icon="$complete" />
                  </template>
                  <VAvatar
                    color="rgba(var(--v-theme-primary-variant), .122)"
                    size="4.22rem"
                  >
                    <IconX
                      :icon="node.icon.name"
                      :size="node.icon.size"
                      class="opacity-20"
                    />
                  </VAvatar>
                </VBadge>

                <p class="mt-4 text-body-2">
                  {{ node.text }}
                </p>
              </VCol>
            </VRow>
          </AppBoxContainerCentered>
          <AppGridRowsAutoAuto
            class="mt-10 *mb-2"
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
            <VCardTitle class="text-h4 text-center">
              Naše delatnosti
            </VCardTitle>
          </AppGridRowsAutoAuto>
          <VRow dense>
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
                color="surface-bright"
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
                        <VBtn
                          icon
                          color="current"
                          rounded="circle"
                          variant="text"
                          class="*:filter-shadow-sm"
                          title="Video"
                          @click="videoCurrent = { key: item.key }"
                        >
                          <IconX icon="mdi:play" size="2rem" />
                        </VBtn>
                      </VCardActions>
                    </AppBoxBase>
                  </VImg>
                </AppBoxBase>
                <VCardTitle class="*!text-sm text-center">
                  {{ item.title }}
                </VCardTitle>
                <VCardText>
                  <p>
                    {{ item.description }}
                  </p>
                  <VList slim bg-color="transparent">
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
                  <VBtn
                    tile
                    elevation="1"
                    variant="tonal"
                    class="ps-4"
                    :to="localePath({ name: item.to })"
                  >
                    Saznajte više
                    <template #append>
                      <IconX icon="$next" class="opacity-50" />
                    </template>
                  </VBtn>
                  <VSpacer />
                </VCardActions>
                <AppVideoPlayerPopup
                  v-model="toggleVideoPopup.isActive.value"
                  :tall="videos[videoCurrent?.key!]?.tall"
                  :provider="videos[videoCurrent?.key!]?.provider"
                  :sources="[{ src: videos[videoCurrent?.key!]?.src }]"
                  :props-iframe="videos[videoCurrent?.key!]?.['props-iframe']"
                />
              </VCard>
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>
    </AppCardSectionPrimary>

    <!-- section:projekti -->
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:eiffel-tower"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2.22rem"
        />
        <h2>Projekti</h2>
      </template>
      <p>🚧</p>
      <p class="text-disabled">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        praesentium incidunt vero quas animi officia vitae nam molestiae.
        Perspiciatis, est! Ea inventore, perferendis iste reiciendis ducimus
        nihil itaque corporis fugiat.
      </p>
    </AppCardSectionPrimary>

    <!-- section:priznanja -->
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:certificate"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <h2>Licence, sertifikati, priznanja</h2>
      </template>
      <p>🚧</p>
      <p class="text-disabled">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        officiis quod recusandae porro minima ut, consectetur eligendi explicabo
        maxime ab unde, blanditiis, ea nam numquam impedit molestias aliquam
        veritatis reprehenderit.
      </p>
    </AppCardSectionPrimary>

    <!-- section:vesti -->
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="ri:newspaper-fill"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="1.75rem"
        />
        <h2>Novosti</h2>
      </template>
      <p>🚧</p>
      <p class="text-disabled">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        officiis quod recusandae porro minima ut, consectetur eligendi explicabo
        maxime ab unde, blanditiis, ea nam numquam impedit molestias aliquam
        veritatis reprehenderit.
      </p>
    </AppCardSectionPrimary>

    <!-- @TODOs -->
    <AppBoxContainerCentered class="d-flex flex-col items-center">
      <h2 class="text-center">&#64;TODO; sekcije sajta; 🚧</h2>
      <ul>
        <li>✔ HERO</li>
        <li>✔ kratko o nama</li>
        <li>- radovi, projekti, (galerija)</li>
        <li>- zašto baš mi? (trust seo)</li>
        <li>- licence, priznanja (trust seo)</li>
        <li>✔ delatnoasti</li>
        <li>✔ kontakt</li>
        <li>✔ SEO footer</li>
        <li>- chat</li>
      </ul>
    </AppBoxContainerCentered>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
