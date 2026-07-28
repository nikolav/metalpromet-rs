<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

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

const toggleOverlayForm = useToggleFlag();

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--contact">
    <AppBoxContainerCentered
      :class="{ 'mt-2': MaxW_AppBoxContainerCentered < d.width.value }"
    >
      <!-- kartica; contact-us -->
      <VCard tile>
        <VImg src="@/assets/media/phone-laptop.01.jpg" :height="322" cover>
          <VSheet
            tile
            color="rgba(var(--v-theme-primary-variant), .88)"
            class="!text-v-on-primary backdrop-blur-sm text-shadow-sm"
          >
            <VCardTitle class="text-center">
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

        <!-- contact text -->
        <VCardText class="text-body-1 text-justify indent-4 pt-5">
          {{
            t(
              "Imate ideju, ali ne znate kako da je realizujete? Niste sigurni u dimenzije ili materijal? Nema problema - mi smo tu da vas usmerimo! Slobodno nam se obratite za savet, razmenu ideja ili prvu procenu. Pozovite nas ili nam pošaljite upit danas i krenimo sa realizacijom!",
            )
          }}
        </VCardText>

        <!-- buttons; cta -->
        <VCardActions
          class="pa-3"
          :class="{
            'flex-col': !d.smAndUp.value,
            'justify-around': d.smAndUp.value,
          }"
        >
          <VBtn href="tel:+38163316521" size="x-large">
            <template #prepend>
              <IconX icon="mdi:phone" size="1.5rem" />
            </template>
            Pozovite nas
          </VBtn>
          <VBtn size="x-large" @click="toggleOverlayForm">
            <template #prepend>
              <IconX icon="mdi:pencil" size="1.5rem" />
            </template>

            Pošaljite upit</VBtn
          >
        </VCardActions>
        <AppOverlayScreen v-model="toggleOverlayForm.isActive.value">
          <AppBoxBase class="text-center">
            <AppVBtn rounded="full" icon @click="toggleOverlayForm.off">
              <IconX icon="$close" />
            </AppVBtn>
            <h2>overlay:contact-form 🚧</h2>
          </AppBoxBase>
        </AppOverlayScreen>
      </VCard>

      <VSpacer class="mt-12" />

      <!-- kontakti -->
      <AppBoxBase class="space-y-5 text-center">
        <AppBoxBase>
          <VCardTitle
            ><IconX
              icon="mdi:map-marker"
              size="2rem"
              class="text-primary -translate-y-[2px]"
            />
            {{ t("Adresa") }}
          </VCardTitle>
          <VCardText class="text-body-1"
            ><NuxtLink
              href="https://maps.app.goo.gl/RKmTxP7zQXRBTM6M7"
              external
              target="_blank"
              >Dositejeva 2, Mladenovac 11400, Srbija</NuxtLink
            >
          </VCardText>
        </AppBoxBase>
        <AppBoxBase>
          <VCardTitle
            ><IconX
              icon="mdi:phone"
              size="2rem"
              class="text-primary -translate-y-[2px]"
            />
            {{ t("Telefon") }}
          </VCardTitle>
          <VCardText class="text-body-1"
            ><a class="text-xl" href="tel:+38163316521">(+381) 63 316 521</a>
          </VCardText>
        </AppBoxBase>
        <AppBoxBase>
          <VCardTitle
            ><IconX
              icon="mdi:at"
              size="2rem"
              class="text-primary -translate-y-[2px]"
            />
            {{ t("Email") }}
          </VCardTitle>
          <VCardText class="text-body-1"
            ><a class="text-xl" href="mailto:office@metalpromet.rs"
              >office@metalpromet.rs</a
            >
          </VCardText>
        </AppBoxBase>
      </AppBoxBase>
    </AppBoxContainerCentered>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
