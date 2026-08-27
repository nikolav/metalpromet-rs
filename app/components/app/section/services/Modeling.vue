<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const d = useDisplay();
const toggleTabs = useToggleFlag();
// @@eos
</script>

<template>
  <AppCardSectionPrimary
    class="component--AppSectionServicesModeling"
    :class="{ 'd-flex flex-col': !d.mobile.value }"
    title="Nacrt • 3D Prikaz"
    sub-title="Unapred planiramo projekat"
    :icon="{ icon: 'mdi:ruler-square-compass', props: { size: '2.5rem' } }"
  >
    <AppGridTwoCells
      invert
      cols-class="grid-cols-[55%_1fr]"
      :stack="d.mobile.value"
      :class="{ 'flex-1': !d.mobile.value }"
      :props-media="{
        class: d.mobile.value ? 'h-[312px]' : undefined,
      }"
    >
      <template #media>
        <NuxtImg
          src="/images/stock/006.jpg"
          width="596"
          height="550"
          sizes="100vw sm:512px"
          class="w-100 fill-height object-cover object-[right_top]"
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
              <VTab :value="false" text="Projektovanje">
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
              <VCardText class="space-y-4 indent-4">
                <AppBoxCentered class="pa-2">
                  <AppAvatarIcon :icon="{ icon: 'mdi:lightbulb' }" />
                </AppBoxCentered>
                <p>
                  Pre nego što krenemo sa proizvodnjom,
                  <strong>vašu ideju pretvaramo u digitalni oblik</strong>. Kroz
                  3D modelovanje, fotorealistične prikze i animacije, pokazujemo
                  kako će vaša ograda, kapija ili konstrukcija izgledati u
                  stvarnom prostoru &dash; sa tačnim bojama, dimenzijama i
                  materijalima.
                </p>
                <p class="text-body-1 text-center">Zašto je ovo važno?</p>
                <p>
                  Niko ne voli iznenađenja &dash; osim kada su u pitanju
                  rođendanske torte. U metaloprerađivačkoj industriji,
                  <strong>svaka improvizacija košta</strong>. Zato mi prvo
                  pokažemo, pa tek onda pravimo. Kada vidite svoj projekat na
                  ekranu &dash; sa pravim bojama, materijalima i dimenzijama
                  &dash; donosite odluku sa punim poverenjem. Bez brige da li će
                  se uklopiti, bez straha da li ste dobro izabrali.
                </p>
                <p class="text-body-1 text-center">Koji problem rešavamo?</p>
                <AppBoxBase class="space-y-4 indent-0">
                  <template
                    :key="node.title"
                    v-for="node in [
                      {
                        title: '• Nepoznanica',
                        description:
                          'Mnogi kupci ne mogu da zamisle kako će gotov proizvod izgledati na njihovom objektu. Mi to vizualizujemo pre početka radova.',
                      },
                      {
                        title: '• Nesporazumi',
                        description:
                          'Reči često nisu dovoljne. Slika vredi hiljadu reči, a 3D prikaz &dash; još više.',
                      },
                      {
                        title: '• Skupa iznenađenja',
                        description:
                          'Greške u dizajnu otkrivene tokom montaže koštaju. Kod nas se sve vidi i odobrava unapred.',
                      },
                      {
                        title: '• Gubljenje vremena',
                        description:
                          'Bez jasne vizije, projekat se odugovlači. Sa 3D prikazom, svi su na istoj strani od prvog dana.',
                      },
                    ]"
                  >
                    <AppBoxBase>
                      <p
                        class="text-body-1 font-italic indent-2"
                        v-html="node.title"
                      />
                      <p v-html="node.description" />
                    </AppBoxBase>
                  </template>
                </AppBoxBase>
              </VCardText>
            </VTabsWindowItem>
            <VTabsWindowItem :value="true">
              <VCardText>
                <template
                  :key="node.title"
                  v-for="node in [
                    {
                      title: '3D modelovanje i fotorealistični prikazi',
                      body: '<p>Pre nego što prvi put uključimo aparat za zavarivanje, vaš projekat već postoji &dash; na našim ekranima. Naš tim za 3D modelovanje pretvara vašu ideju (bilo da je nacrtana na salveti ili samo ispričana) u <strong>digitalni model koji možete da vidite</strong>, okrećete i analizirate iz svih uglova. </p><p>Fotorealistični prikazi su naš poseban adut. Zamislite da vidite svoju buduću ogradu, kapiju ili nadstrešnicu tačno onako kako će izgledati &dash; sa pravim bojama, senkama i teksturama, uklopljenu u vaše dvorište. Koristimo napredne alate za 3D kolor studije, tako da možete birati između 200 RAL nijansi pre nego što išta bude isečeno ili zavareno.</p>',
                    },
                    {
                      title: 'Animacije i tehnička dokumentacija',
                      body: '<p>Pored statičnih prikaza, radimo i kratke 3D animacije koje prikazuju kako se vaša konstrukcija ponaša, otvara ili uklapa u prostor. To je posebno korisno za kapije, klizne sisteme ili složene stepenišne konstrukcije. Na taj način, i kao što izreka kaže: <em>&rdquo;Triput meri,  jednom seci...&ldquo;</em>, nema nesporazuma &dash; vi <strong>tačno znate  šta dobijate</strong>.</p><p>Kada vizuelni deo bude odobren, prelazimo na tehničku dokumentaciju &dash; precizne nacrte, mere i proračune koje vaš arhitekta,  investitor ili građevinska inspekcija mogu da provere.</p>',
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
          <IconX icon="mdi:ruler" size="1.5rem" class="opacity-[.33]" />
        </template>
        Naručite izradu plana</VBtn
      >
    </VCardActions>
  </AppCardSectionPrimary>
</template>
