<script setup lang="ts">
import { UseElementBounding } from "@vueuse/components";
import { useDisplay } from "vuetify";

definePageMeta({
  context: {
    title: "pages.products.title",
    description: "pages.products.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti/stolarija",
      "sr-cyrl": "/delatnosti/stolarija",
      en: "/services/products",
    },
  },
});

const { $$ } = useNuxtApp();
const d = useDisplay();

const heightAppNavBar = computed(
  () => $$.config("layout.component.AppNavAppBar.height") ?? 0,
);

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--products">
    <AppGridStackedFrames
      :style="[{ height: `calc(100svh - ${heightAppNavBar}px)` }]"
    >
      <AppGridStackedFramesItem
        class="z-[1] bg-gradient-to-t from-v-ui to-v-ui/25 d-flex flex-col"
      >
        <VSpacer />
        <VSpacer />
        <VSpacer />
        <VSpacer v-if="!d.mdAndUp.value" />
        <VSpacer v-if="!d.smAndUp.value" />
        <AppBoxContainerCentered
          :max-width="
            d.mdAndUp.value
              ? $$.config('layout.component.AppBoxContainerCentered.maxWidth')!
              : '82ch'
          "
          class="text-v-on-ui text-shadow-sm space-y-5"
        >
          <VCardTitle
            class="text-wrap text-shadow-md"
            :class="[
              d.mdAndUp.value
                ? 'text-h4'
                : d.smAndUp.value
                  ? 'text-h5'
                  : 'text-body-1 text-center',
            ]"
          >
            <h2>
              <span v-if="!d.smAndUp.value">Ogradni sistemi</span>
              <UseElementBounding
                v-else
                class="d-inline-block pa-0 ma-0"
                v-slot="cx"
              >
                <span>Ogradni sistemi, stolarija</span>

                <VDivider
                  color="on-ui"
                  :thickness="1"
                  :length="cx.right"
                  class="position-absolute start-0 translate-y-[2px] !opacity-[.66]"
                />
              </UseElementBounding>
            </h2>
          </VCardTitle>
          <VCardText
            class="indent-4"
            :class="[
              d.mdAndUp.value
                ? 'text-h5 !leading-normal'
                : d.smAndUp.value
                  ? 'text-h6'
                  : 'text-body-1',
            ]"
          >
            <p>
              Metal-Promet izrađuje ograde, alu-stolariju i bravarske proizvode
              &dash;
              <strong
                >od jednostavnih ograda do luksuznih kapija i kovanog
                gvožđa</strong
              >. Proizvodi nose pečat kvaliteta i pažnje posvećene svakom
              detalju. Pounda obuhvata aluminijumske, čelične, prohromske,
              panelne i kovane ograde, kapije, gelendere, stepenice, nameštaj i
              kontejnere, po zahtevu klijenata.
            </p>
          </VCardText>
        </AppBoxContainerCentered>
        <VSpacer />
      </AppGridStackedFramesItem>
      <AppGridStackedFramesItem>
        <NuxtImg
          src="/images/stock/133.jpg"
          class="w-100 fill-height object-cover -scale-x-100"
          sizes="100vw sm:822px md:1024px"
        />
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>

    <template
      :key="node.title"
      v-for="(node, idx) in [
        {
          title: 'Ograde',
          title_sm: 'Ograde',
          icon: {
            icon: 'mdi:fence',
            props: {
              class: { '-translate-y-1': !d.smAndUp.value },
            },
          },
          image: {
            src: '/images/stock/134.jpg',
            props: {
              class: '*-scale-x-100 *object-right',
            },
          },
          description:
            '<p>Metal-Promet izrađuje ograde po meri &dash; aluminijumske, čelične, inox, panelne i kovane. Sve ograde se plastificiraju u velikom dijapazonu nijansi. Izrada je <em>&quot;ključ u ruke&quot;</em> &dash; od ideje do montaže u Srbiji i inostranstvu. Dugogodišnje iskustvo garantuje kvalitet, preciznost i trajnost svakog proizvoda.</p>',
          items: [
            {
              title: 'Aluminijumske ograde',
              subtitle:
                'Lagane, otporne na koroziju, plastificirane po RAL karti',
            },
            {
              title: 'Čelične ograde',
              subtitle: 'Čvrste i izdržljive, plastificirane',
            },
            {
              title: 'Prohromske ograde',
              subtitle: 'Elegantne i otporne na spoljne uslove',
            },
            {
              title: 'Panelne ograde',
              subtitle:
                'Laserski sečeni paneli, sa ili bez plastične prevlake, u boji po želji',
            },
            {
              title: 'Kovane ograde',
              subtitle:
                'Unikatne umetničke iskovine, zaštićene prajmerom i plastifikacijom',
            },
          ],
        },
        {
          title: 'Stepenice, balustrade',
          title_sm: 'Stepenice',
          icon: {
            icon: 'mdi:stairs',
            props: {},
          },
          image: {
            src: '/images/stock/135.jpg',
            props: {
              class: '*-scale-x-100 *object-right',
            },
          },
          description:
            '<p>Metal-Promet izrađuje stepenice, gelendere i balustrade po meri &dash; metalne i prohromske stepenice, gelendere raznih modela i metalne balustrade. Svi proizvodi se plastificiraju u velikom dijapazonu nijansi. Dugogodišnje iskustvo garantuje kvalitet, preciznost i trajnost proizvoda.</p>',
          items: [
            {
              title: 'Metalne stepenice',
              subtitle: 'Izrada metalnih stepenica',
            },
            {
              title: 'Prohromske stepenice',
              subtitle: 'Stepenice od inoxa',
            },
            {
              title: 'Metalne balustrade',
              subtitle: 'Izrada metalnih balustrada po meri',
            },
            {
              title: 'Gelenderi',
              subtitle: 'Izrada gelendera raznih modela',
            },
          ],
        },
        {
          title: 'Oprema, nameštaj',
          title_sm: 'Oprema',
          icon: {
            icon: 'mdi:cube-outline',
            props: {},
          },
          image: {
            src: '/images/stock/136.jpg',
            props: {
              class: '*-scale-x-100 object-[left_28%]',
            },
          },
          description:
            '<p>Metal-Promet izrađuje metalni nameštaj i opremu, spoljni nameštaj, žardinjere, kovani nameštaj i umetničke iskovine od kovanog gvožđa po narudžbini, kao i kontejnere za stanovanje &dash; gotove stambene jedinice izrađene po meri, namenjene brzom i funkcionalnom smeštaju. Kontejneri se izrađuju od čeličnih konstrukcija, zavaruju i završno obrađuju plastifikacijom u velikom dijapazonu nijansi. Dugogodišnje iskustvo garantuje kvalitet, preciznost i trajnost svakog proizvoda.</p>',
          items: [
            {
              title: 'Kontejneri za stanovanje',
              subtitle: 'Izrada kontejnera za stanovanje',
            },
            {
              title: 'Metalni nameštaj i oprema',
              subtitle: 'Izrada metalnog nameštaja i opreme',
            },
            {
              title: 'Kovani nameštaj',
              subtitle: 'Kovani nameštaj po narudžbini',
            },
          ],
        },
        //
      ]"
    >
      <AppSheetSectionRoot
        :title="d.smAndUp.value ? node.title : node.title_sm"
        :props-item="{ class: 'py-4' }"
        :props-title="{ class: 'text-h3 pb-4 italic text-shadow-sm' }"
      >
        <template v-if="d.smAndUp.value" #icon>
          <IconX
            :icon="node.icon.icon"
            size="2.5rem"
            class="opacity-[.2]"
            v-bind="node.icon.props"
          />
        </template>
        <template #default>
          <AppGridTwoCellsContentLMediaAuto
            :stack="!d.smAndUp.value"
            :invert="!$$.isOdd(idx)"
            :cols-class="
              $$.isOdd(idx)
                ? 'grid-cols-[1fr_minmax(min(40ch,100%),1.22fr)]'
                : 'grid-cols-[minmax(min(40ch,100%),1.22fr)_1fr]'
            "
            :class="$$.isOdd(idx) ? undefined : '!bg-v-surface-variant'"
          >
            <template #media>
              <NuxtImg
                :src="node.image.src"
                class="w-100 object-cover"
                :class="{
                  'h-[40vh]': !d.smAndUp.value,
                  'fill-height': d.smAndUp.value,
                }"
                v-bind="node.image.props"
              />
            </template>
            <template #text>
              <VCard variant="text" tile class="pb-5">
                <AppBoxContainerCentered max-width="70ch" class="pt-3">
                  <AppBoxCentered v-if="!d.smAndUp.value">
                    <AppAvatarIcon size="3.5rem" :icon="node.icon" />
                  </AppBoxCentered>
                  <VCardText
                    class="text-body-1 indent-4 !leading-normal space-y-5"
                    v-html="node.description"
                  />
                  <VCardText>
                    <VDivider :inset="d.smAndUp.value" class="opacity-50" />
                    <VList
                      variant="text"
                      tile
                      bg-color="transparent"
                      lines="three"
                    >
                      <VListItem v-for="item in node.items">
                        <template v-if="d.smAndUp.value" #prepend>
                          <IconX
                            icon="$complete"
                            size="1.5rem"
                            class="text-success"
                          />
                        </template>
                        <VListItemTitle class="text-wrap"
                          ><h3>{{ item.title }}</h3></VListItemTitle
                        >
                        <VListItemSubtitle class="text-body-2 text-wrap">{{
                          item.subtitle
                        }}</VListItemSubtitle>
                      </VListItem>
                    </VList>
                  </VCardText>
                </AppBoxContainerCentered>
              </VCard>
            </template>
          </AppGridTwoCellsContentLMediaAuto>
        </template>
      </AppSheetSectionRoot>
    </template>
  </AppBoxPageWrap>
</template>
