<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const d = useDisplay();
const toggleTabs = useToggleFlag();
// @@eos
</script>

<template>
  <AppCardSectionPrimary
    class="component--AppSectionServicesConstruction"
    :class="{ 'd-flex flex-col': !d.mobile.value }"
    title="Konstrukcije • Bravarija"
    sub-title="Gde metal dobija oblik."
    :icon="{ icon: 'local:metal-construction', props: { size: '1.25rem' } }"
  >
    <AppGridTwoCells
      cols-class="grid-cols-[1fr_55%]"
      :stack="d.mobile.value"
      :class="{ 'flex-1': !d.mobile.value }"
      :props-media="{
        class: d.mobile.value ? 'h-[370px]' : undefined,
      }"
    >
      <template #media>
        <NuxtImg
          src="/images/stock/007.jpg"
          width="596"
          height="694"
          sizes="100vw sm:512px"
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
              <VTab :value="false" text="Proizvodnja">
                <template #prepend>
                  <IconX icon="$info" size="1.5rem" class="opacity-20" />
                </template>
              </VTab>
              <VTab :value="true" text="Usluge">
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
                  <AppAvatarIcon :icon="{ icon: 'mdi:wrench' }" />
                </AppBoxCentered>
                <p>
                  Od najjednostavnije ograde do složenih nosivih konstrukcija
                  koje idu u Austriju, Švajcarsku ili Englesku.
                  <strong>Naši majstori vladaju svim tehnikama</strong>: od CNC
                  obrade koja seče sa milimetarskom preciznošću, do ručnog
                  kovanja gvožđa koje podseća na stare zanate.
                </p>
                <p>
                  Zavarivanje nam je svakodnevica &dash; svaki šav je čist,
                  pravilan i jači od samog metala. Aluminijumske konstrukcije su
                  nam posebno drage jer su
                  <strong>lake, moderne i ne rđaju</strong>. A kada treba nešto
                  unikatno &dash; tu dolazi do izražaja naša umetnička
                  bravarija.
                </p>
                <p>
                  Naša proizvodnja u Mladenovcu radi punom parom već više od tri
                  decenije, a svaki komad metala koji prođe kroz naše ruke nosi
                  pečat kvaliteta.
                </p>
                <AppBoxBase class="space-y-2">
                  <p class="text-body-1 text-center">Zašto kod nas?</p>
                  <p>
                    Zato što imamo <strong>sve pod jednim krovom</strong>. Nema
                    čekanja, nema posrednika, nema prepuštanja trećim licima.
                    Sirovi metal uđe na jedna vrata, a gotov proizvod izađe na
                    druga &dash; spreman za montažu.
                  </p>
                  <p>
                    Naš tim čine iskusni majstori i vrhunski inženjeri koji ne
                    prepuštaju ništa slučaju. Svaki zavar se proverava, svaka
                    mera se dvostruko kontroliše. Zato naši radovi traju
                    decenijama &dash; i u Srbiji i u Evropi.
                  </p>
                </AppBoxBase>
              </VCardText>
            </VTabsWindowItem>
            <VTabsWindowItem :value="true">
              <VCardText>
                <template
                  :key="node.title"
                  v-for="node in [
                    {
                      title: 'Zavarivanje (švajsovanje)',
                      body: '<p>Spajanje metala na način koji je jači od samog metala. Naši zavarivači su majstori svog zanata &dash; svaki šav je čist, pravilan i siguran. Bilo da je reč o tankom aluminijumskom profilu ili debelom čeličnom nosaču &dash; kvalitet zavara je neupitan.</p>',
                    },
                    {
                      title: 'Montaža čeličnih konstrukcija',
                      body: '<p>Postavljanje nosivih okvira za hale, mostove, nadstrešnice &dash; sve ono što zahteva snagu i stabilnost. Naši timovi za montažu rade širom Srbije i Evrope, sa garancijom da sve stoji čvrsto kao kamen.</p>',
                    },
                    {
                      title: 'Aluminijumske konstrukcije',
                      body: '<p>Lake, izdržljive, nehrđajuće. Savršene za moderne ograde i kapije koje treba da traju bez održavanja. Aluminijum je materijal budućnosti &dash; a mi ga obrađujemo kao da je to naša specijalnost (jer i jeste).</p>',
                    },
                    {
                      title: 'CNC obrada metala',
                      body: '<p>Kompjuterski vođene mašine koje seku, buše i glodaju sa mikrometarskom preciznošću. Ovo je tehnologija koja nam omogućava da svaki deo bude identičan &dash; bez odstupanja, bez grešaka. Savršeno za serijsku proizvodnju panela, profila i delova.</p>',
                    },
                    {
                      title: 'Kovano gvožđe, umetnička bravarija',
                      body: '<p>Ručno kovani unikatni komadi koji podsećaju na vreme kada je zanat bio umetnost. Od kapija do svećnjaka, od ograda do nameštaja &dash; svaki komad je jedinstven. Metalna galanterija, dekorativni elementi i sve ono što čini vaš prostor posebnim &dash; to je naš ponos.</p>',
                    },
                  ]"
                >
                  <AppBoxBase class="pt-5">
                    <h4
                      class="text-body-1 font-weight-semibold text-center"
                      v-html="node.title"
                    />
                    <div class="space-y-2 pt-2 indent-4" v-html="node.body" />
                  </AppBoxBase>
                </template>
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
          <IconX icon="mdi:tools" size="1.5rem" class="opacity-[.33]" />
        </template>
        Zakažite montažu</VBtn
      >
    </VCardActions>
  </AppCardSectionPrimary>
</template>
