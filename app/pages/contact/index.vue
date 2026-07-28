<script setup lang="ts">
import { useDisplay } from "vuetify";

definePageMeta({
  context: {
    title: "pages.contact.title",
    description: "pages.contact.description",
  },
  layout: "default",
  // middleware: ["auth"],
  // validate: (route) => {},
  i18n: {
    paths: {
      sr: "/kontakt",
      "sr-cyrl": "/kontakt",
      en: "/contact",
    },
  },
});

const d = useDisplay();
const { t } = useI18n();
const { $$ } = useNuxtApp();

const MaxW_AppBoxContainerCentered = $$.config<number>(
  "layout.component.AppBoxContainerCentered.maxWidth",
)!;

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--contact">
    <AppBoxContainerCentered
      :class="{ 'mt-2': MaxW_AppBoxContainerCentered < d.width.value }"
    >
      <VCard tile>
        <VImg src="@/assets/media/phone-laptop.01.jpg" :height="322" cover>
          <VSheet
            tile
            color="rgba(var(--v-theme-primary-variant), .88)"
            class="!text-v-on-primary backdrop-blur-sm text-shadow-sm"
          >
            <VCardTitle class="text-center position-relative">
              <h2>
                {{ t("Kontaktirajte nas") }}
              </h2></VCardTitle
            >
          </VSheet>
          <VSheet
            tile
            elevation="1"
            color="rgba(var(--v-theme-on-background), .66)"
            class="text-center text-background backdrop-blur-sm"
          >
            <VCardText class="text-shadow-sm">
              <h4>
                {{
                  t(
                    "Inženjering, metalne konstrukcije, bravarija i farbanje u Mladenovcu",
                  )
                }}
              </h4>
            </VCardText>
          </VSheet>
        </VImg>
        <IconX
          icon="mdi:phone-in-talk"
          class="opacity-20 d-block mx-auto mt-5"
          size="2rem"
        />
        <VCardText class="text-body-1 text-justify indent-4">
          {{
            t(
              "Imate ideju, ali ne znate kako da je realizujete? Niste sigurni u dimenzije ili materijal? Nema problema - mi smo tu da vas usmerimo! Slobodno nam se obratite za savet, razmenu ideja ili prvu procenu. Pošaljite upit danas i krenimo sa realizacijom!",
            )
          }}
        </VCardText>
      </VCard>
    </AppBoxContainerCentered>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
