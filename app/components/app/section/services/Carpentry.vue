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
    class="component--AppSectionServicesCarpentry"
    title="Stolarija • Bravarija"
    subtitle="Vaš prostor, naša briga"
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
      <IconX icon="mdi:fence" size="2rem" class="opacity-[.2]" />
    </template>
    <template #default="cx">
      <AppGridTwoCells
        invert
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
            src="/images/stock/004a.jpg"
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
                  icon: 'mdi:screwdriver',
                }"
              />
            </AppBoxCentered>
            <p>
              Naša ponuda pokriva sve — od jednostavnih ograda do luksuznih
              kapija, od funkcionalnih stepenica do dekorativnih elemenata od
              kovanog gvožđa. Svaki proizvod nosi pečat kvaliteta i pažnje
              posvećene svakom detalju.
              <em>&quot;Vi zamislite — mi napravimo.&quot;</em>
            </p>
            <p>
              I ne brinite, neće propasti posle prve kiše. Svaki komad metala
              kod nas prolazi hemijsku obradu, plastifikaciju i sve što je
              potrebno da traje. Lepota prolazi &dash; to znaju oni sa
              Instagrama &dash; ali u Metal-Prometu i lepota i kvalitet ostaju.
            </p>
            <template
              v-for="item in [
                {
                  title: 'Metalne ograde',
                  text: `Standardne, dekorativne i sigurnosne &dash; od klasičnih do modernih minimalističkih.`,
                },
                {
                  title: 'Panelne ograde',
                  text: `Moderne 2D i 3D panelne ograde &dash; brze za montažu i futurističkog izgleda.`,
                },
                {
                  title: 'Prohromske ograde',
                  text: `Ograde od nerđajućeg čelika otporne na sve &dash; i na vreme i na poglede.`,
                },
                {
                  title: 'ALU ograde',
                  text: `Lagane, moderne, aluminijumske &dash; kao perje, ali čvrste kao čelik.`,
                },
                {
                  title: 'Dvorišne kapije',
                  text: `Klizne, dvokrilne, automatske &dash; kapije koje pozdravljaju vaše goste.`,
                },
                {
                  title: 'Metalne stepenice',
                  text: `Spoljašnje i unutrašnje konstrukcije koje vode korak ka višem nivou &dash; bukvalno.`,
                },
                {
                  title: 'Metalne nadstrešnice',
                  text: `Zaštita za automobile, terase i ulaze. Kiša? Sunce? Nema problema!`,
                },
                {
                  title: 'Kontejneri za stanovanje',
                  text: `Montažne kućice, radionice, pa čak i stambeni kontejneri. Život u metalu &dash; ko bi rekao`,
                },
                {
                  title: 'Metalni nameštaj i oprema',
                  text: `Regali, police, radni stolovi, klupe, stolice... Čak i školske klupe plastificiramo &dash; da đaci sede na lepom!`,
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
