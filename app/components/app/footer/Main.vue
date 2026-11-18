<script setup lang="ts">
import { useDisplay } from "vuetify";

defineOptions({
  inheritAttrs: false,
});

const d = useDisplay();

// @@eos
</script>

<template>
  <VThemeProvider theme="dark">
    <AppBoxCentered class="!mt-20 !mb-10">
      <IconX icon="local:line-art-01" size="1.5rem" class="opacity-[.122]" />
    </AppBoxCentered>

    <VFooter
      tile
      elevation="0"
      class="pt-5 !border-t-4 !border-t-v-primary-variant"
      v-bind="$attrs"
    >
      <VCardText class="opacity-50">
        <VContainer fluid>
          <VRow dense class="gap-y-16">
            <!-- MP -->
            <VCol sm="6" md="3">
              <!-- logo -->
              <AppBoxCentered>
                <NuxtLinkLocale
                  :to="$localePath({ name: 'index' })"
                  :class="{ 'd-flex justify-center': !d.smAndUp.value }"
                >
                  <NuxtImg
                    src="/logo.jpg"
                    alt="Metal-Promet logo"
                    :width="122"
                    :height="122"
                    sizes="122px"
                    class="rounded-full"
                  />
                </NuxtLinkLocale>
              </AppBoxCentered>

              <!-- social -->
              <AppBoxFlex center class="gap-x-5 my-4">
                <template
                  v-for="node in [
                    {
                      to: 'https://www.instagram.com/metal_promet',
                      icon: { icon: 'mdi:instagram', props: {} },
                      disabled: false,
                    },
                    {
                      to: 'https://www.facebook.com/pages/Metal-Promet/111890567394829',
                      icon: { icon: 'mdi:facebook', props: {} },
                      disabled: false,
                    },
                    {
                      to: 'https://www.youtube.com/playlist?list=PLNHRaUC54g2Q',
                      icon: { icon: 'mdi:youtube', props: {} },
                      disabled: false,
                    },
                  ]"
                >
                  <NuxtLink
                    :aria-disabled="node.disabled"
                    external
                    target="_blank"
                    :to="node.disabled ? undefined : node.to"
                  >
                    <AppVBtn
                      :disabled="node.disabled"
                      icon
                      rounded="circle"
                      variant="plain"
                    >
                      <IconX
                        class="bg-v-on-background"
                        :class="{ 'opacity-[.33]': node.disabled }"
                        :icon="node.icon.icon"
                        size="2rem"
                        v-bind="node.icon.props"
                      />
                    </AppVBtn>
                  </NuxtLink>
                </template>
              </AppBoxFlex>

              <!-- info -->
              <AppBoxBase class="*space-y-10 mt-4 *text-center">
                <VCardText>
                  <h2 class="text-body-1 text-shadow-sm pb-2">
                    <strong>Metal-Promet Mladenovac</strong>
                  </h2>
                  <p class="mt-[2px]">
                    Izrada industrijske opreme i metalnih konstrukcija,
                    inženjering, bravarija, stolarija, plastifikacija i završna
                    obrada metala.
                  </p>
                </VCardText>
              </AppBoxBase>
            </VCol>

            <!-- usluge -->
            <VCol sm="6" md="3" class="text-center">
              <h3>Naše usluge:</h3>
              <AppBoxBase class="mt-5 space-y-5">
                <AppBoxBase>
                  <VList>
                    <VListItem
                      link
                      v-for="item in [
                        {
                          title: 'Izrada industrijske opreme',
                          to: 'services-engineering',
                        },
                        {
                          title: 'Metalne konstrukcije',
                          to: 'services-constructions',
                        },
                        {
                          title: 'Ogradni sistemi, stolarija',
                          to: 'services-products',
                        },
                        {
                          title: 'Plastifikacija metala',
                          to: 'services-finish',
                        },
                      ]"
                      :key="item.title"
                      :to="$localePath({ name: item.to })"
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
                      to: 'about',
                    },
                    {
                      title: 'Delatnosti',
                      to: 'services',
                    },
                    {
                      title: 'Projekti',
                      to: 'projects',
                    },
                    {
                      title: 'Kontakt',
                      to: 'contact',
                    },
                  ]"
                  :to="$localePath({ name: item.to })"
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
              <VList class="space-y-5 mt-5">
                <VListItem>
                  <VListItemTitle class="italic pb-1">
                    <IconX
                      icon="mdi:map-marker"
                      size="1.5rem"
                      class="opacity-50 -translate-y-1"
                    />
                    Adresa
                  </VListItemTitle>
                  <VListItemSubtitle
                    ><NuxtLink
                      href="https://maps.app.goo.gl/fuGJnobWPHawt2ur5"
                      external
                      target="_blank"
                      >Palanački put bb, Kovačevac</NuxtLink
                    ></VListItemSubtitle
                  >
                </VListItem>
                <VListItem>
                  <VListItemTitle class="italic pb-1">
                    <IconX
                      icon="mdi:phone"
                      size="1.5rem"
                      class="opacity-50 -translate-y-1"
                    />
                    Telefon
                  </VListItemTitle>
                  <VListItemSubtitle
                    ><a href="tel:+381644176546"
                      >(+381) 64 417 65 46</a
                    ></VListItemSubtitle
                  >
                </VListItem>
                <VListItem>
                  <VListItemTitle class="italic pb-1">
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
                  <VListItemTitle class="italic pb-1">
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
