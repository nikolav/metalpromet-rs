<script setup lang="ts">
import { useDisplay } from "vuetify";

defineOptions({
  // name: "COMPONENT_NAME",
  inheritAttrs: false,
});

const d = useDisplay();
const localePath = useLocalePath();

// @@eos
</script>

<template>
  <VThemeProvider theme="dark">
    <VFooter
      tile
      elevation="0"
      class="pt-5 !border-t-4 !border-t-v-primary-variant"
      :class="{ 'mt-40': d.smAndUp.value }"
      v-bind="$attrs"
    >
      <VCardText class="opacity-50">
        <VContainer fluid>
          <VRow dense class="gap-y-16">
            <!-- MP -->
            <VCol sm="6" md="3">
              <!-- logo -->
              <NuxtLinkLocale
                :to="localePath({ name: 'index' })"
                :class="{ 'd-flex justify-center': !d.smAndUp.value }"
              >
                <NuxtImg
                  src="/logo.jpg"
                  alt="Metal-Promet logo"
                  :width="92"
                  :height="92"
                  sizes="92px"
                  class="rounded-full"
                />
              </NuxtLinkLocale>
              <AppBoxBase class="space-y-10 mt-4">
                <AppBoxBase>
                  <VCardText>
                    <h2 class="text-body-1 text-shadow-sm">
                      <strong>Metal-Promet Mladenovac</strong>
                    </h2>
                    <p class="mt-[2px]">
                      Izrada čeličnih i aluminijumskih konstrukcija,
                      inženjering, bravarija, gotovi proizvodi, plastifikacija
                      metala i završna obrada.
                    </p>
                  </VCardText>
                </AppBoxBase>
                <AppBoxBase class="text-center">
                  <IconX
                    icon="mdi:map-marker"
                    size="2rem"
                    class="text-accent"
                  />
                  <p>
                    Beograd · Mladenovac · Niš · Šumadija · Podunavski okrug ·
                    Inostranstvo
                  </p>
                </AppBoxBase>
                <AppBoxBase class="font-bold text-center">
                  <IconX icon="mdi:medal" size="2rem" class="text-accent" />
                  <p>Poslujemo od 1984. godine.</p>
                  <p>{{ new Date().getFullYear() - 1984 }} godine iskustva!</p>
                </AppBoxBase>
                <AppBoxBase class="font-bold text-center">
                  <IconX icon="$ratingFull" size="2rem" class="text-accent" />
                  <p>Bonitet: AA+</p>
                </AppBoxBase>
                <!-- social -->
                <AppBoxBase class="d-flex justify-evenly">
                  <NuxtLink
                    external
                    target="_blank"
                    to="https://www.instagram.com/metal_promet"
                  >
                    <AppVBtn icon rounded="circle" variant="plain">
                      <IconX
                        class="bg-v-on-background"
                        icon="mdi:instagram"
                        size="2rem"
                      />
                    </AppVBtn>
                  </NuxtLink>
                  <NuxtLink
                    external
                    target="_blank"
                    to="https://www.instagram.com/metal_promet"
                  >
                    <AppVBtn icon rounded="circle" variant="plain">
                      <IconX
                        class="bg-v-on-background"
                        icon="mdi:facebook"
                        size="2rem"
                      />
                    </AppVBtn>
                  </NuxtLink>
                  <NuxtLink
                    external
                    target="_blank"
                    to="https://www.instagram.com/metal_promet"
                  >
                    <AppVBtn icon rounded="circle" variant="plain">
                      <IconX
                        class="bg-v-on-background"
                        icon="ri:twitter-x-fill"
                        size="2rem"
                      />
                    </AppVBtn>
                  </NuxtLink>
                  <NuxtLink
                    external
                    target="_blank"
                    to="https://www.instagram.com/metal_promet"
                  >
                    <AppVBtn icon rounded="circle" variant="plain">
                      <IconX
                        class="bg-v-on-background"
                        icon="mdi:youtube"
                        size="2rem"
                      />
                    </AppVBtn>
                  </NuxtLink>
                </AppBoxBase>
              </AppBoxBase>
            </VCol>

            <!-- usluge -->
            <VCol sm="6" md="3" class="text-center">
              <h3>Naše usluge:</h3>
              <AppBoxBase class="mt-10 space-y-5">
                <AppBoxBase>
                  <IconX icon="mdi:ruler" size="1.75rem" class="opacity-50" />
                  <VList>
                    <VListItem
                      link
                      v-for="item in [
                        {
                          title: 'Projektovanje i inženjering',
                          to: 'NA',
                        },
                        {
                          title: '3D Modelovanje i renderi',
                          to: 'NA',
                        },
                      ]"
                      :key="item.title"
                      :to="localePath({ name: item.to })"
                    >
                      <span class="text-body-2">{{ item.title }}</span>
                    </VListItem>
                  </VList>
                </AppBoxBase>
                <AppBoxBase>
                  <IconX icon="mdi:wrench" size="1.75rem" class="opacity-50" />
                  <VList>
                    <VListItem
                      link
                      v-for="item in [
                        {
                          title: 'Bravarski radovi',
                          to: 'NA',
                        },
                        {
                          title: 'CNC obrada metala',
                          to: 'NA',
                        },
                        {
                          title: 'Kovano gvožđe',
                          to: 'NA',
                        },
                      ]"
                      :key="item.title"
                      :to="localePath({ name: item.to })"
                    >
                      <span class="text-body-2">{{ item.title }}</span>
                    </VListItem>
                  </VList>
                </AppBoxBase>
                <AppBoxBase>
                  <IconX
                    icon="mdi:screwdriver"
                    size="1.75rem"
                    class="opacity-50"
                  />
                  <VList>
                    <VListItem
                      link
                      v-for="item in [
                        {
                          title: 'Ograde i kapije',
                          to: 'NA',
                        },
                        {
                          title: 'Stepenice',
                          to: 'NA',
                        },
                        {
                          title: 'Nadstrešnice',
                          to: 'NA',
                        },
                        {
                          title: 'Metalni nameštaj i oprema',
                          to: 'NA',
                        },
                        {
                          title: 'Kontejneri za stanovanje',
                          to: 'NA',
                        },
                      ]"
                      :key="item.title"
                      :to="localePath({ name: item.to })"
                    >
                      <span class="text-body-2">{{ item.title }}</span>
                    </VListItem>
                  </VList>
                </AppBoxBase>
                <AppBoxBase>
                  <IconX icon="mdi:shield" size="1.75rem" class="opacity-50" />
                  <VList>
                    <VListItem
                      link
                      v-for="item in [
                        {
                          title: 'Elektrostatsko farbanje',
                          to: 'NA',
                        },
                        {
                          title: 'Peskarenje',
                          to: 'NA',
                        },
                        {
                          title: 'Cinkovanje',
                          to: 'NA',
                        },
                      ]"
                      :key="item.title"
                      :to="localePath({ name: item.to })"
                    >
                      <span class="text-body-2">{{ item.title }}</span>
                    </VListItem>
                  </VList>
                </AppBoxBase>
              </AppBoxBase>
            </VCol>

            <!-- linkovi -->
            <VCol sm="6" md="3" class="text-center">
              <h3>Linkovi:</h3>
              <VList class="mt-5">
                <VListItem
                  link
                  v-for="item in [
                    {
                      title: 'O nama',
                      to: 'NA',
                    },
                    {
                      title: 'Projekti',
                      to: 'NA',
                    },
                    {
                      title: 'Novosti, Blog',
                      to: 'NA',
                    },
                    {
                      title: 'Karijera',
                      to: 'NA',
                    },
                    {
                      title: 'Kontakt',
                      to: 'NA',
                    },
                  ]"
                  :to="localePath({ name: item.to })"
                >
                  <VListItemTitle class="text-body-2">{{
                    item.title
                  }}</VListItemTitle>
                </VListItem>
              </VList>
            </VCol>

            <!-- kontakt -->
            <VCol sm="6" md="3" class="text-center">
              <h3>Kontakt:</h3>
              <VList class="space-y-10 mt-5">
                <VListItem>
                  <VListItemTitle>
                    <IconX
                      icon="mdi:map-marker"
                      size="1.5rem"
                      class="opacity-50 -translate-y-1"
                    />
                    Adresa
                  </VListItemTitle>
                  <VListItemSubtitle
                    ><NuxtLink
                      href="https://maps.app.goo.gl/RKmTxP7zQXRBTM6M7"
                      external
                      target="_blank"
                      >Dositejeva 2, Mladenovac 11400, Srbija</NuxtLink
                    ></VListItemSubtitle
                  >
                </VListItem>
                <VListItem>
                  <VListItemTitle>
                    <IconX
                      icon="mdi:phone"
                      size="1.5rem"
                      class="opacity-50 -translate-y-1"
                    />
                    Telefon
                  </VListItemTitle>
                  <VListItemSubtitle
                    ><a href="tel:+38163316521"
                      >(+381) 63 316 521</a
                    ></VListItemSubtitle
                  >
                </VListItem>
                <VListItem>
                  <VListItemTitle>
                    <IconX
                      icon="mdi:at"
                      size="1.5rem"
                      class="opacity-50 -translate-y-1"
                    />
                    Email
                  </VListItemTitle>
                  <VListItemSubtitle
                    ><a href="mailto:office@metalpromet.rs"
                      >office@metalpromet.rs</a
                    >
                  </VListItemSubtitle>
                </VListItem>
                <VListItem>
                  <VListItemTitle>
                    <IconX
                      icon="mdi:alarm"
                      size="1.5rem"
                      class="opacity-50 -translate-y-1"
                    />
                    Radno vreme
                  </VListItemTitle>
                  <VListItemSubtitle class="d-flex justify-center">
                    <AppGridColsAutoFull class="leading-normal">
                      <template #left>
                        <AppBoxBase class="d-flex flex-col text-start">
                          <em>Radni dan:</em>
                          <em>Subota:</em>
                          <em>Nedelja/praznik:</em>
                        </AppBoxBase>
                      </template>
                      <template #right>
                        <AppBoxBase class="d-flex flex-col text-start ps-5">
                          <span>7-15h</span>
                          <span>8-14h</span>
                          <span>Ne radimo</span>
                        </AppBoxBase>
                      </template>
                    </AppGridColsAutoFull>
                  </VListItemSubtitle>
                </VListItem>
              </VList>
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>
    </VFooter>
    <VFooter
      tile
      elevation="1"
      class="!border-t-[1px] !bg-v-background text-disabled !pb-20 text-body-2"
    >
      <VCardText class="text-center space-y-8 opacity-50">
        <p>
          <small>
            &copy; {{ new Date().getFullYear() }} Metal-Promet &dash; Sva prava
            zadržana.
          </small>
        </p>
        <p
          class="bg-v-on-background bg-opacity-5 w-fit mx-auto rounded-lg pa-2 px-3 d-flex gap-5"
        >
          <small
            ><strong>PIB:</strong><br />
            101479691</small
          >
          <small><strong>MB:</strong><br />55292698</small>
          <small><strong>Šifra delatnosti:</strong><br />2454</small>
          <small><strong>TRR:</strong><br />325-9500600051279-55 (OTP)</small>
        </p>
        <p class="w-fit mx-auto d-flex gap-2">
          <small>
            <a
              href="#"
              class="text-decoration-none hover:!underline !text-current"
              >Politika privatnosti</a
            >
            •
            <a
              href="#"
              class="text-decoration-none hover:!underline !text-current"
              >Uslovi korišćenja</a
            >
            •
            <a
              href="#"
              class="text-decoration-none hover:!underline !text-current"
              >Informacije o kolačićima</a
            >
          </small>
        </p>
      </VCardText>
    </VFooter>
  </VThemeProvider>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
