<script setup lang="ts">
import { useDisplay } from "vuetify";

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
const { $$ } = useNuxtApp();
const H = computed(() =>
  d.smAndUp.value
    ? `calc(100vh - ${$$.config("layout.component.AppNavAppBar.height")!}px)`
    : 422,
);

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--index">
    <AppSlidesHero :height="H" />

    <AppBoxContainerCentered class="d-flex flex-col items-center mt-12">
      <VCard
        tile
        border="t-md primary-darken-1"
        :class="{
          [`!bg-[url('/images/stock/002.png')] !bg-cover`]: d.smAndUp.value,
        }"
      >
        <VCardTitle
          class="text-shadow-sm text-center bg-primary-variant position-relative bg-gradient-to-r from-v-primary to-v-primary-variant"
        >
          <IconX
            v-if="d.smAndUp.value"
            icon="$info"
            class="position-absolute start-5 z-[1] top-[50%] -translate-y-[50%] opacity-20"
            size="2rem"
          />
          <h2>Ukratko o nama</h2>
        </VCardTitle>
        <VCardText class="text-body-1 space-y-5 py-6">
          <AppBoxBase
            :class="{ '!grid !grid-cols-[auto_1fr]': d.smAndUp.value }"
          >
            <IconX
              icon="mdi:ruler-square-compass"
              size="2.22rem"
              class="text-on-surface d-block mx-auto opacity-20"
              :class="{ 'w-[4rem]': d.smAndUp.value }"
            />
            <p>
              Metal-Promet Mladenovac, sa tradicijom od 1988. godine, posluje na
              principima inženjerske preciznosti i rigorozne kontrole kvaliteta.
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
              iskustvom u Evropi, garantujemo dugotrajnu korozionu postojanost i
              estetsku završnicu vaših projekata u celoj Srbiji.
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
        <VCardActions>
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
        </VCardActions>
      </VCard>
      <VDivider class="mt-12 !border-primary" />
      <h2 class="text-center">&#64;TODO; sekcije sajta; 🚧</h2>
      <ul>
        <li>✔ HERO</li>
        <li>✔ kratko o nama</li>
        <li>- delatnoasti</li>
        <li>- radovi, projekti, (galerija)</li>
        <li>- zašto baš mi? (trust seo)</li>
        <li>✔ kontakt</li>
        <li>✔ SEO footer</li>
        <li>- chat</li>
      </ul>
    </AppBoxContainerCentered>
    <AppCardMetalprometInfo />
  </AppBoxPageWrap>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
