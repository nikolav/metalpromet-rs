<script setup lang="ts">
import { useDisplay } from "vuetify";

const { $$ } = useNuxtApp();
const d = useDisplay();

const appNavBarHeight = computed(
  () => $$.config("layout.component.AppNavAppBar.height") ?? 0,
);

// @@eos
</script>

<template>
  <AppSheetSectionRoot
    class="component--AppSectionServicesFinish"
    title="Plastifikacija • Finiš"
    subtitle="Čuvamo ono što stvaramo"
    :props-title="{
      class: `text-wrap ${d.mobile.value ? 'text-h5' : 'text-h4'}`,
    }"
    :props-subtitle="{
      class: `text-wrap ${d.mobile.value ? '' : 'text-h6'}`,
    }"
    :props-item="{
      class: 'pb-2',
    }"
  >
    <template v-if="d.smAndUp.value" #icon>
      <IconX icon="mdi:security" size="2rem" class="opacity-[.2]" />
    </template>
    <template #default="cx">
      <AppGridTwoCells
        :stack="d.mobile.value"
        :props-text="{
          class: !d.mobile.value ? 'overflow-y-auto' : undefined,
        }"
        :props-media="{
          class: d.mobile.value ? 'h-[255px]' : undefined,
        }"
        :style="{
          height: d.smAndUp.value
            ? `calc(100svh - ${appNavBarHeight}px - ${cx.titleSize.height ?? 0}px - 2rem)`
            : undefined,
        }"
      >
        <template #media>
          <NuxtImg
            src="/images/stock/009a.jpg"
            class="w-100 fill-height object-cover object-[right_bottom]"
            sizes="100vw sm:822px md:1024px"
          />
        </template>
        <template #text>
          <VCardText
            class="indent-4 space-y-4 pb-5"
            :class="[
              d.mdAndUp.value
                ? 'text-body-1 ps-10 pt-8'
                : 'text-body-2 ps-4 pt-4',
            ]"
          >
            <AppBoxCentered class="pa-2">
              <AppAvatarIcon
                :icon="{
                  icon: 'local:ironman-mask',
                }"
              />
            </AppBoxCentered>
            <p>
              Rđa, korozija i bledenje boje ne praštaju &dash; zato je zaštita
              površina ključni korak u našem procesu. To je
              <em>&quot;tajni sastojak&quot;</em>
              zbog kojeg naši proizvodi traju decenijama, a ne samo godinama.
            </p>
            <p>
              Pre farbanja ili cinkovanja metal mora biti besprekorno čist.
              Peskarenje finim abrazivnim peskom uklanja rđu, stare boje,
              masnoće i sve nečistoće &dash; metal izlazi kao nov i spreman za
              dalju obradu. Zatim na delove nanosimo boju u prahu i pečemo ih u
              našoj peći. Rezultat je savršeno glatka, otporna i sjajna površina
              koja ne bledi, ne ljušti se i ne korodira.
            </p>
            <p>
              Plastificiramo i uslužno &dash; za vas, vaše projekte i vaše
              klijente — uz konkurentne cene i brze rokove, da i njihovi
              proizvodi dobiju isti kvalitet.
            </p>
            <template
              v-for="item in [
                {
                  title: 'Plastifikacija',
                  text: `Nanošenje boje u prahu koja se potom peče u peći.`,
                },
                {
                  title: 'Peskarenje',
                  text: `Čišćenje metala finim abrazivnim peskom. Metal postaje kao nov &dash; bez rđe, bez mrlja.`,
                },
              ]"
            >
              <AppBoxBase>
                <VCardTitle class="text-h6 text-center text-wrap">
                  {{ item.title }}
                </VCardTitle>
                <p v-html="item.text" />
              </AppBoxBase>
            </template>
          </VCardText>
        </template>
      </AppGridTwoCells>
      <VCardActions class="justify-center pa-5">
        <VBtn
          tile
          variant="tonal"
          elevation="1"
          class="px-4"
          :class="[!d.mobile.value ? 'scale-[111%]' : undefined]"
          size="large"
          :to="$localePath({ name: 'contact' })"
        >
          <template #prepend>
            <IconX
              icon="mdi:pipe-wrench"
              size="1.5rem"
              class="-translate-y-[2px] opacity-[.33]"
            />
          </template>
          Zatražite ponudu</VBtn
        >
      </VCardActions>
    </template>
  </AppSheetSectionRoot>
</template>
