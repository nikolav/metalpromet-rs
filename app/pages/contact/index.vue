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

const toggleOverlayForm = useToggleFlag();

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--contact">
    <AppCardSectionPrimary
      :props-title="{
        class: 'pb-3',
      }"
    >
      <template #title>
        <IconX
          v-if="!d.mobile.value"
          icon="mdi:phone"
          class="position-absolute start-2 z-[1] top-[50%] -translate-y-[50%] opacity-20"
          size="2rem"
        />

        <AppCardSectionPrimaryTitle class="font-weight-semibold">
          {{ t("Metal-Promet • Kontakt") }}
        </AppCardSectionPrimaryTitle>
        <VCardSubtitle class="opacity-80">
          <h4 :class="{ 'text-body-2': d.mobile.value }">
            Inženjering, metalne konstrukcije,
            <br v-if="d.mobile.value" />bravarija i farbanje u Mladenovcu
          </h4>
        </VCardSubtitle>
      </template>
      <template #default="cx">
        <AppGridStackedFrames>
          <AppGridStackedFramesItem>
            <AppMapsLocationSingle
              :style="`height: calc(100svh - ${cx.titleSize.height}px - ${$$.config('layout.component.AppNavAppBar.height', 0)}px) !important;`"
            />
          </AppGridStackedFramesItem>
          <AppGridStackedFramesItem
            class="pointer-events-none position-relative"
          >
            <VCard
              :border="`primary ${d.mobile.value ? 't' : 's'}`"
              color="rgb(var(--v-theme-ui))"
              variant="tonal"
              tile
              class="pt-2 pointer-events-none position-absolute backdrop-blur-md"
              :class="{
                'fill-height w-[max(320px,33vw)] inset-y-0 right-0':
                  !d.mobile.value,
                'inset-x-0 bottom-0 pa-2': d.mobile.value,
              }"
            >
              <VCardText
                class="flex"
                :class="{
                  'fill-height flex-col flex-1': !d.mobile.value,
                }"
              >
                <!-- contacts -->
                <AppBoxBase
                  v-if="!d.mobile.value"
                  class="text-center space-y-2"
                >
                  <AppBoxBase>
                    <VCardTitle class="text-v-on-surface"
                      ><IconX
                        icon="mdi:map-marker"
                        size="2rem"
                        class="-translate-y-[2px] opacity-[.33]"
                      />
                      {{ t("Adresa") }}
                    </VCardTitle>
                    <VCardText class="text-body-1"
                      ><NuxtLink
                        href="https://maps.app.goo.gl/RKmTxP7zQXRBTM6M7"
                        external
                        target="_blank"
                        class="pointer-events-auto"
                        @click.stop
                        >Dositejeva 2, <br />Mladenovac 11400,
                        <br />Srbija</NuxtLink
                      >
                    </VCardText>
                  </AppBoxBase>
                  <AppBoxBase>
                    <VCardTitle class="text-v-on-surface"
                      ><IconX
                        icon="mdi:phone"
                        size="2rem"
                        class="-translate-y-[2px] opacity-[.33]"
                      />
                      {{ t("Telefon") }}
                    </VCardTitle>
                    <VCardText class="text-body-1"
                      ><a
                        class="text-xl pointer-events-auto"
                        href="tel:+381644176546"
                        @click.stop
                        >(+381) 64 417 65 46</a
                      >
                    </VCardText>
                  </AppBoxBase>
                  <AppBoxBase>
                    <VCardTitle class="text-v-on-surface"
                      ><IconX
                        icon="mdi:at"
                        size="2rem"
                        class="-translate-y-[2px] opacity-[.33]"
                      />
                      {{ t("Email") }}
                    </VCardTitle>
                    <VCardText class="text-body-1"
                      ><a
                        class="text-xl pointer-events-auto"
                        href="mailto:office@metalpromet.rs"
                        @click.stop
                        >office@metalpromet.rs</a
                      >
                    </VCardText>
                  </AppBoxBase>
                </AppBoxBase>

                <!-- buttons -->
                <VSpacer v-if="!d.mobile.value" />
                <AppBoxFlex class="items-center justify-evenly w-full">
                  <AppBoxFlex col class="order-2 items-center gap-2">
                    <VBtn
                      @click.stop
                      icon
                      size="large"
                      variant="elevated"
                      rounded="circle"
                      color="success-lighten-1"
                      class="pointer-events-auto"
                      href="tel:+381644176546"
                    >
                      <IconX icon="mdi:phone" size="1.75rem" />
                    </VBtn>
                  </AppBoxFlex>
                  <AppBoxFlex col class="order-1 items-center gap-2">
                    <VBtn
                      variant="elevated"
                      color="primary"
                      icon
                      rounded="circle"
                      size="large"
                      class="pointer-events-auto"
                      @click.stop="toggleOverlayForm"
                    >
                      <IconX
                        icon="mdi:paper-airplane"
                        size="1.75rem"
                        class="-rotate-45 -translate-y-[2px] translate-x-[2px]"
                      />
                    </VBtn>
                    <AppOverlayScreen
                      v-model="toggleOverlayForm.isActive.value"
                    >
                      <AppBoxBase class="text-center">
                        <AppVBtn
                          rounded="full"
                          icon
                          @click.stop="toggleOverlayForm.off"
                        >
                          <IconX icon="$close" />
                        </AppVBtn>
                        <h2>overlay:contact-form 🚧</h2>
                      </AppBoxBase>
                    </AppOverlayScreen>
                  </AppBoxFlex>
                  <AppBoxFlex col class="order-3 items-center gap-2">
                    <VBtn
                      variant="elevated"
                      color="primary-variant"
                      icon
                      rounded="circle"
                      size="large"
                      class="pointer-events-auto"
                      @click.stop
                      href="mailto:office@metalpromet.rs"
                    >
                      <IconX icon="mdi:at" size="2rem" />
                    </VBtn>
                  </AppBoxFlex>
                </AppBoxFlex>
                <VSpacer v-if="!d.mobile.value" />
              </VCardText>
            </VCard>
          </AppGridStackedFramesItem>
        </AppGridStackedFrames>
      </template>
    </AppCardSectionPrimary>
    <VSpacer class="mt-12" />
  </AppBoxPageWrap>
</template>
