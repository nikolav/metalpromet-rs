<script setup lang="ts">
import { useDisplay } from "vuetify";

import DELATNOSTI from "~/assets/sve-delatnosti.json";
import SLIDES_PRIPREMA from "~/assets/slides-priprema.json";
import SLIDES_PROIZVODNJA from "~/assets/slides-proizvodnja.json";
import SLIDES_GOTOVI_PROIZVODI from "~/assets/slides-gotovi-proizvodi.json";
import SLIDES_ZAVRSNA_OBRADA from "~/assets/slides-zavrsna-obrada.json";

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

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--index">
    <AppSlidesHero :height="H" />

    <VSpacer class="mt-16" />
    <AppBoxContainerCentered>
      <AppCardSectionPrimary
        :class="{
          [`!bg-[url('/images/stock/009.png')] !bg-contain !bg-no-repeat !bg-right`]: true,
        }"
      >
        <template #title>
          <IconX
            v-if="d.smAndUp.value"
            icon="$info"
            class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
            size="2rem"
          />
          <h2>Ukratko o nama</h2>
        </template>
        <VCardText class="text-body-1 space-y-5 py-6 *indent-4">
          <AppBoxBase
            :class="{ '!grid !grid-cols-[auto_1fr]': d.smAndUp.value }"
          >
            <IconX
              icon="material-symbols:id-card-outline"
              size="2.22rem"
              class="text-on-surface d-block mx-auto opacity-20"
              :class="{ 'w-[4rem]': d.smAndUp.value }"
            />
            <p>
              Mi smo Metal-Promet iz Mladenovca. Porodična firma koja već
              decenijama diše sa metalom &dash; bukvalno. Pravimo metalne
              konstrukcije, kapije, ograde... i sve što čvrsto stoji. Svaki
              posao vodimo od prve skice do poslednjeg zavara. Jer, lepo je
              nacrtati &dash; ali kad majstor kaže &quot;može&quot;, to je ono
              pravo.
            </p>
          </AppBoxBase>
          <AppBoxBase
            :class="{ '!grid !grid-cols-[auto_1fr]': d.smAndUp.value }"
          >
            <IconX
              icon="mdi:factory"
              size="2rem"
              class="text-on-surface d-block mx-auto opacity-20"
              :class="{ 'w-[4rem]': d.smAndUp.value }"
            />
            <p>
              Naša proizvodnja obuhvata kompletne metaloprerađivačke radove
              &dash; od 3D modelovanja i CNC obrade, preko zavarivanja i montaže
              čeličnih i aluminijumskih konstrukcija, do vrhunske zaštite
              metala.
            </p>
          </AppBoxBase>
          <AppBoxBase
            :class="{ '!grid !grid-cols-[auto_1fr]': d.smAndUp.value }"
          >
            <IconX
              icon="local:shield-improved"
              size="1.92rem"
              class="text-on-surface d-block mx-auto opacity-20"
              :class="{ 'w-[4rem]': d.smAndUp.value }"
            />
            <p>
              Raspolažemo industrijskom komorom za plastifikaciju dužine 7,8
              metara i visine rama do 2,5m, uz obavezan hemijski predtretman i
              cink prajmer koji garantuju dugotrajnu korozionu postojanost.
            </p>
          </AppBoxBase>
          <AppBoxBase
            :class="{ '!grid !grid-cols-[auto_1fr]': d.smAndUp.value }"
          >
            <IconX
              icon="mdi:certificate"
              size="2rem"
              class="text-on-surface d-block mx-auto opacity-20"
              :class="{ 'w-[4rem]': d.smAndUp.value }"
            />
            <p>
              Specijalizovani smo za izradu čeličnih i aluminijumskih
              konstrukcija visoke nosivosti, sa završnom obradom koja
              podrazumeva hemijsko čišćenje i nanošenje zaštitnih premaza u peći
              od 7,8m, te toplo i hladno cinkovanje.
            </p>
          </AppBoxBase>
          <AppBoxBase
            :class="{ '!grid !grid-cols-[auto_1fr]': d.smAndUp.value }"
          >
            <IconX
              icon="mdi:diamond-stone"
              size="2rem"
              class="text-on-surface d-block mx-auto opacity-20"
              :class="{ 'w-[4rem]': d.smAndUp.value }"
            />
            <p>
              Sa sertifikatom bonitetne izvrsnosti i dokazanim izvoznim
              iskustvom u Evropi (Austrija, Švajcarska i Engleska), garantujemo
              dugotrajnu korozionu postojanost i estetsku završnicu vaših
              projekata u celoj Srbiji.
            </p>
          </AppBoxBase>
        </VCardText>
        <VResponsive :max-height="596">
          <AppVideoPlayer
            :sources="[{ src: 'ni1k-4yGADw' }]"
            provider="youtube"
            title="Metal-Promet Mladenovac"
          />
        </VResponsive>
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
        </template>
      </AppCardSectionPrimary>
    </AppBoxContainerCentered>

    <VSpacer class="mt-16" />
    <AppCardSectionPrimary>
      <template #title>
        <IconX
          v-if="d.smAndUp.value"
          icon="mdi:package-variant-closed-check"
          class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />
        <h2>
          Kompletno rešenje <template v-if="d.smAndUp.value">za metal</template>
        </h2>
      </template>
      <VCardText class="text-body-1 py-6 px-2">
        <VContainer fluid>
          <VRow :class="{ 'px-12': d.mdAndUp.value }">
            <VCol sm="4" class="d-flex flex-col items-center space-y-2">
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
                    icon="local:conveyor-belt-box"
                    size="2rem"
                    class="opacity-20"
                  />
                </VAvatar>
              </VBadge>

              <p>
                Zatvoreni tehnološki krug &dash; od inženjerske ideje, kroz
                preciznu proizvodnju i estetsku zaštitu, do profesionalne
                montaže &dash; bez outsourcinga, sve pod jednim krovom.
              </p>
            </VCol>
            <VCol sm="4" class="d-flex flex-col items-center space-y-2">
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
                    icon="local:brain-outline"
                    size="2.122rem"
                    class="opacity-20"
                  />
                </VAvatar>
              </VBadge>
              <p>
                Proizvodna baza u Mladenovcu je tačka sa koje se upravlja brzom
                i efikasnom realizacijom projekata u Šumadiji, beogradskom
                okruženju i svim opštinama centralne Srbije.
              </p>
            </VCol>
            <VCol sm="4" class="d-flex flex-col items-center space-y-2">
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
                    icon="mdi:truck-flatbed"
                    size="2.5rem"
                    class="opacity-20"
                  />
                </VAvatar>
              </VBadge>

              <p>
                Naši montažni timovi su dostupni u svim većim gradovima Srbije,
                uključujući Beograd, Novi Sad i Niš, kao i u okolnim mestima
                poput Avale, Kosmaja, Aranđelovca i Sopota.
              </p>
            </VCol>
          </VRow>
          <AppBoxBase class="d-flex flex-col mt-14 mb-5">
            <AppBoxBase class="d-flex justify-center">
              <VAvatar
                color="rgba(var(--v-theme-primary-variant), .122)"
                size="4.22rem"
              >
                <IconX icon="mdi:toolbox" size="2.5rem" class="opacity-20" />
              </VAvatar>
            </AppBoxBase>
            <VCardTitle class="text-h4 text-center">
              Naše delatnosti
            </VCardTitle>
          </AppBoxBase>
          <VRow>
            <VCol sm="6" md="3" align-self="stretch" v-for="item in DELATNOSTI">
              <VCard
                height="100%"
                class="space-y-2"
                :class="{ 'd-flex flex-col': d.smAndUp.value }"
              >
                <AppBoxBase class="h-[192px]">
                  <VImg :src="item.image" cover height="100%">
                    <AppBoxBase
                      class="w-full h-full !bg-[rgba(var(--v-theme-primary-variant),.5)] d-flex flex-col"
                    >
                      <VSpacer />
                      <VCardActions>
                        <VSpacer />
                        <VBtn
                          icon
                          color="white"
                          rounded="circle"
                          variant="plain"
                          class="*:filter-shadow-sm"
                          @click="slideshow[item.key]()"
                        >
                          <IconX icon="mdi:animation-play" size="1.5rem" />
                        </VBtn>
                      </VCardActions>
                    </AppBoxBase>
                  </VImg>
                </AppBoxBase>
                <VCardTitle class="*!text-sm text-center">
                  {{ item.title }}
                </VCardTitle>
                <VCardText>
                  <p class="indent-2">
                    {{ item.description }}
                  </p>
                  <VList slim variant="text">
                    <VListItem v-for="service in item.services" class="ps-2">
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
                    :to="item.to"
                  >
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
        </VContainer>
      </VCardText>
    </AppCardSectionPrimary>

    <AppBoxContainerCentered class="d-flex flex-col items-center">
      <h2 class="text-center">&#64;TODO; sekcije sajta; 🚧</h2>
      <ul>
        <li>✔ HERO</li>
        <li>✔ kratko o nama</li>
        <li>✔ delatnoasti</li>
        <li>- radovi, projekti, (galerija)</li>
        <li>- zašto baš mi? (trust seo)</li>
        <li>✔ kontakt</li>
        <li>✔ SEO footer</li>
        <li>- chat</li>
      </ul>
    </AppBoxContainerCentered>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped>
.foobar122 {
  background-color: rgba(255, 0, 0, 0.5);
  background-image: url("/images/stock/003.jpg");
  background-size: cover;
  background-blend-mode: multiply;
}
</style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
