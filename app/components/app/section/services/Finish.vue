<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const d = useDisplay();
const toggleTabs = useToggleFlag();
// @@eos
</script>

<template>
  <AppCardSectionPrimary
    class="component--AppSectionServicesFinish"
    :class="{ 'd-flex flex-col': !d.mobile.value }"
    title="Plastifikacija • Finiš"
    sub-title="Čuvamo ono što stvaramo"
    :icon="{ icon: 'mdi:security' }"
  >
    <AppGridTwoCells
      cols-class="grid-cols-[1fr_55%]"
      :stack="d.mobile.value"
      :class="{ 'flex-1': !d.mobile.value }"
      :props-media="{
        class: d.mobile.value ? 'h-[412px]' : undefined,
      }"
    >
      <template #media>
        <NuxtImg
          src="/images/stock/009.jpg"
          width="378"
          height="672"
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
              <VTab :value="false" text="Zaštita">
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
                  <AppAvatarIcon
                    :icon="{
                      icon: 'local:ironman-mask',
                      props: { size: '2.33rem' },
                    }"
                  />
                </AppBoxCentered>
                <p>
                  Rđa, korozija, bledenje boje su neprijatelji metala koji ne
                  praštaju, i
                  <strong
                    >zato je zaštita površina ključni korak u našem
                    procesu</strong
                  >. To je &ldquo;tajni sastojak&rdquo; koji čini da naši
                  proizvodi traju decenijama, a ne samo godinama.
                </p>
                <p>
                  Pre farbanja ili cinkovanja,
                  <strong>metal mora biti besprekorno čist</strong>. Peskarenje
                  finim abrazivnim peskom uklanja rđu, stare boje, masnoće i sve
                  nečistoće. Metal posle ovog tretmana izgleda kao nov i spreman
                  za dalju obradu.
                </p>
                <p>
                  Zatim, na metalne delove nanosimo boju u prahu i pečemo u
                  našoj peći dužine 7,8 metara. Rezultat? Savršeno glatka,
                  otporna i sjajna površina koja ne bledi, ne ljušti se i ne
                  korodira. Nudimo <strong>200+ RAL nijansi</strong> &dash; od
                  klasičnog antracita do sjajnih metalik i strukturnih boja.
                  Želite crvenu sa šljokicama? Može. Mat crna? Može. Zlatna?
                  Ima! Svaki projekat zaslužuje pravu boju.
                </p>
                <p>
                  Plastificiramo ne samo naše proizvode, već i uslužno &dash; za
                  vas, vaše projekte, vaše klijente. Sa konkurentnim cenama i
                  brzim rokovima,
                  <strong>tu smo da pomognemo i drugima</strong> da njihovi
                  proizvodi dobiju isti kvalitet.
                </p>
                <AppBoxBase class="space-y-2">
                  <p class="text-body-1 text-center">Zašto baš kod nas?</p>
                  <p>
                    Pre svega, imamo najveću peć u okolini &dash; tako da
                    <strong>veliki komadi nisu problem</strong>. Svaki komad
                    metala pre farbanja prolazi obaveznu hemijsku pripremu, što
                    nije samo <em>&ldquo;operi pa farbaj&rdquo;</em> &dash; to
                    je garancija da boja zaista prijanja. Preporučujemo
                    <strong>dva sloja zaštite za duplo trajniji proizvod</strong
                    >.
                  </p>
                  <p>
                    Sve to <strong>radimo i uslužno</strong>, za vaše projekte,
                    po pristupačnim cenama i brzim rokovima.
                  </p>
                </AppBoxBase>
              </VCardText>
            </VTabsWindowItem>
            <VTabsWindowItem :value="true">
              <VCardText class="pa-5">
                <VList
                  class="space-y-5"
                  lines="three"
                  :item-props="true"
                  :items="[
                    {
                      title: 'Plastifikacija',
                      description:
                        'Nanošenje boje u prahu koja se potom peče u peći',
                    },
                    {
                      title: 'Peskarenje',
                      description:
                        'Čišćenje metala finim abrazivnim peskom. Metal postaje kao nov &dash; bez rđe, bez mrlja',
                    },
                    {
                      title: 'Vruće cinkovanje',
                      description:
                        'Potapanje metala u rastopljeni cink. Najjača moguća zaštita od korozije. Ovo je pancer za metal',
                    },
                    {
                      title: 'Hladno cinkovanje',
                      description:
                        'Za manje zahteve ili popravke, bez toplote, praktično i efikasno',
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
          <IconX icon="mdi:shield-check" size="1.5rem" class="opacity-[.33]" />
        </template>
        Zakažite uslugu</VBtn
      >
    </VCardActions>
  </AppCardSectionPrimary>
</template>
