<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();

// @@eos
</script>

<template>
  <AppCardSectionPrimary
    class="component--AppSectionServicesIntro"
    :class="{ 'd-flex flex-col': !d.mobile.value }"
    title="Vaš partner u obradi metala"
    sub-title="Od ideje do gotovog proizvoda"
    :icon="{ icon: 'local:certificate-trusted' }"
  >
    <AppGridTwoCells
      cols-class="grid-cols-[1fr_55%]"
      :stack="d.mobile.value"
      :class="{ 'flex-1': !d.mobile.value }"
      :props-text="{
        class: !d.mobile.value ? 'overflow-y-auto' : undefined,
      }"
      :props-media="{
        class: d.mobile.value ? 'h-[255px]' : undefined,
      }"
    >
      <template #media>
        <NuxtImg
          src="/images/stock/005.jpg"
          class="w-100 fill-height object-cover"
          :class="[
            d.mobile.value ? 'object-left' : 'object-right',
            {
              '-scale-x-100': d.mobile.value,
            },
          ]"
        />
      </template>
      <template #text>
        <VCardText class="space-y-4 indent-4">
          <AppBoxCentered class="pa-2">
            <AppAvatarIcon :icon="{ icon: 'local:conveyor-belt-box' }" />
          </AppBoxCentered>
          <p>
            Mi smo Metal-Promet &dash; firma sa više od tri decenije iskustva
            koja, kao jedan od najkonkurentnijih igrača u oblasti livenja,
            plastificiranja i izrade metalnih konstrukcija u Srbiji, nudi
            <strong>kompletne usluge u metaloprerađivačkoj industriji</strong>.
          </p>
          <p>
            Ono što nas izdvaja jeste sposobnost da proces od ideje do
            realizacije sprovedemo <strong>pod jednim krovom</strong> &dash; od
            3D modelovanja i projektovanja, preko precizne proizvodnje, do
            završne obrade i montaže. Naši radovi su prepoznatljivi ne samo u
            Srbiji, već i širom Evrope, uključujući Austriju, Švajcarsku,
            Nemačku i Veliku Britaniju.
          </p>
          <p>
            <strong>Proces počinje na papiru</strong>, gde vašu zamisao prvo 3D
            modelujemo i fotorealistično prikazujemo kako biste tačno znali šta
            ćete dobiti.
          </p>
          <p>
            Zatim prelazimo u radionicu, gde CNC mašinama precizno obrađujemo
            metal, a naši majstori ga zavarivanjem spajaju u čvrste konstrukcije
            &dash; bilo da su u pitanju ograde, kapije, stepenice ili
            nadstrešnice.
          </p>
          <p>
            Potom naše proizvode hemijski tretiramo i peskarimo kako bismo ih
            pripremili za završnu obradu, a onda ih plastificiramo u našoj
            velikoj peći &dash; birajući boju iz preko 200 RAL nijansi, od
            antracita do sjajnih metalik tonova.
          </p>
          <p>
            Na kraju, naš
            <strong>tim montira gotove proizvode na vašoj lokaciji</strong>,
            bilo u Srbiji ili inostranstvu, i predaje vam ključeve.
          </p></VCardText
        >
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
  </AppCardSectionPrimary>
</template>
