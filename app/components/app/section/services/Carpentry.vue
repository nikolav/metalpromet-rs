<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const d = useDisplay();
const toggleTabs = useToggleFlag();
// @@eos
</script>

<template>
  <AppCardSectionPrimary
    class="component--AppSectionServicesCarpentry"
    :class="{ 'd-flex flex-col': !d.mobile.value }"
    title="Stolarija • Oprema"
    sub-title="Vaš prostor, naša briga"
    :icon="{ icon: 'mdi:home-variant' }"
  >
    <AppGridTwoCells
      invert
      cols-class="grid-cols-[55%_1fr]"
      :stack="d.mobile.value"
      :class="{ 'flex-1': !d.mobile.value }"
      :props-media="{
        class: d.mobile.value ? 'h-[344px]' : undefined,
      }"
    >
      <template #media>
        <NuxtImg
          src="/images/stock/008.jpg"
          width="596"
          height="447"
          sizes="100vw sm:550px"
          class="w-100 fill-height object-cover object-[left_top]"
        />
      </template>
      <template #text>
        <AppBoxTwoRowsAutoMain
          footer-first
          :class="{ 'fill-height': !d.mobile.value }"
        >
          <template #footer>
            <VTabs
              stacked
              grow
              density="comfortable"
              :model-value="toggleTabs.isActive.value"
              @update:model-value="
                (v) => {
                  v ? toggleTabs.on() : toggleTabs.off();
                }
              "
            >
              <VTab :value="false" text="Gotovi proizvodi">
                <template #prepend>
                  <IconX icon="$info" size="1.5rem" class="opacity-20" />
                </template>
              </VTab>
              <VTab :value="true" text="Katalog">
                <template #prepend>
                  <IconX icon="mdi:tag" size="1.5rem" class="opacity-20" />
                </template>
              </VTab>
            </VTabs>
          </template>
          <VTabsWindow :model-value="toggleTabs.isActive.value" crossfade>
            <VTabsWindowItem :value="false">
              <VCardText class="space-y-5 indent-4">
                <AppBoxCentered class="pa-2">
                  <AppAvatarIcon
                    :icon="{ icon: 'mdi:package-variant-closed-check' }"
                  />
                </AppBoxCentered>
                <p>
                  Naša ponuda obuhvata širok spektar proizvoda &dash; od
                  jednostavnih ograda do luksuznih kapija, od funkcionalnih
                  stepenica do dekorativnih elemenata od kovanog gvožđa. Svaki
                  proizvod nosi pečat kvaliteta i pažnje posvećene svakom
                  detalju.
                </p>
                <p>
                  <strong
                    >&ldquo;Vi zamislite &dash; mi napravimo.&rdquo;</strong
                  >
                  I ne brinite &dash; neće propasti posle prve kiše. Jer svaki
                  komad metala kod nas prođe hemijsku obradu, plastifikaciju i
                  sve što je potrebno da traje. Lepota prolazi &dash; to znaju
                  oni sa Instagrama, ali u Metal-Prometu i lepota i kvalitet
                  ostaju.
                </p>

                <AppBoxBase class="space-y-2">
                  <p class="text-body-1 text-center">Zašto baš mi?</p>
                  <p>
                    Od dobrog projekta, preko precizne izrade, do savršene
                    završne obrade. Plastifikacija, cinkovanje, prajmer &dash;
                    sve što je potrebno da
                    <strong>vaš komad opreme traje decenijama</strong>. Plus
                    montaža. Naši timovi rade u celoj Srbiji i Evropi, tako da
                    vašu novu ogradu ne samo da napravimo, već je i postavljamo
                    na pravo mesto.
                  </p>
                </AppBoxBase>
              </VCardText>
            </VTabsWindowItem>
            <VTabsWindowItem :value="true">
              <VCardText>
                <VList
                  class="space-y-5"
                  lines="three"
                  :item-props="true"
                  :items="[
                    {
                      title: 'Metalne ograde',
                      description:
                        'Standardne, dekorativne i sigurnosne. Od klasičnih do modernih minimalističkih',
                    },
                    {
                      title: 'Panelne ograde',
                      description:
                        'Moderne ograde od panela (2D i 3D) koje su brze za montažu i izgledaju futuristički',
                    },
                    {
                      title: 'Prohromske ograde',
                      description:
                        'Ograde od nerđajućeg čelika koje su otporne na sve (i na vreme i na poglede)',
                    },
                    {
                      title: 'ALU ograde',
                      description:
                        'Lagane, moderne, aluminijumske &dash; kao perje, ali čvrste kao čelik',
                    },
                    {
                      title: 'Dvorišne kapije',
                      description:
                        'Klizne, dvokrilne, automatske. Kapije koje pozdravljaju vaše goste (i pomalo im zavide)',
                    },
                    {
                      title: 'Metalne stepenice',
                      description:
                        'Spoljašnje i unutrašnje konstrukcije koje vode korak ka višem nivou (bukvalno)',
                    },
                    {
                      title: 'Metalne nadstrešnice',
                      description:
                        'Zaštita za automobile, terase i ulaze. Kiša? Sunce? Nema problema!',
                    },
                    {
                      title: 'Kontejneri za stanovanje',
                      description:
                        'Montažne kućice, radionice, pa čak i stambeni kontejneri. Život u metalu &dash; ko bi rekao?',
                    },
                    {
                      title: 'Metalni nameštaj i oprema',
                      description:
                        'Regali, police, radni stolovi, klupe, stolice... Čak i školske klupe plastificiraju (da đaci sede na lepom)!',
                    },
                  ]"
                >
                  <template #item="cx">
                    <AppBoxBase>
                      <VListItemTitle class="indent-2"
                        ><IconX icon="$complete" class="text-v-success" />
                        <span class="ps-2 text-body-1" v-html="cx.props.title"
                      /></VListItemTitle>
                      <VListItemSubtitle
                        ><p v-html="cx.props.description"
                      /></VListItemSubtitle>
                    </AppBoxBase>
                  </template>
                </VList>
              </VCardText>
            </VTabsWindowItem>
          </VTabsWindow>
        </AppBoxTwoRowsAutoMain>
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
          <IconX icon="mdi:screwdriver" size="1.5rem" class="opacity-[.33]" />
        </template>
        Naručite ugradnju</VBtn
      >
    </VCardActions>
  </AppCardSectionPrimary>
</template>
