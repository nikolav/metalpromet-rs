<script setup lang="ts">
import { UseElementBounding } from "@vueuse/components";
import { useDisplay } from "vuetify";

definePageMeta({
  context: {
    title: "pages.engineering.title",
    description: "pages.engineering.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti/industrijska-oprema",
      "sr-cyrl": "/delatnosti/industrijska-oprema",
      en: "/services/engineering",
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
  <AppBoxPageWrap class="page--engineering">
    <!-- hero -->
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
              <span v-if="!d.smAndUp.value">Industrijska oprema</span>
              <UseElementBounding
                v-else
                class="d-inline-block pa-0 ma-0"
                v-slot="cx"
              >
                <span>Izrada industrijske opreme</span>

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
              Nudimo
              <strong
                >kompletan inženjering i izradu industrijske opreme i
                komponenti</strong
              >
              &dash; od projektovanja, preko nabavke materijala, zavarivanja i
              kontrole kvaliteta, do završne zaštite i montaže.
              <template v-if="d.smAndUp.value">
                Posedujemo kapacitete za izradu reaktora, rezervoara, cevovoda i
                čeličnih konstrukcija za potrebe prozivodnog procesa.
              </template>
            </p>
          </VCardText>
        </AppBoxContainerCentered>
        <VSpacer />
      </AppGridStackedFramesItem>
      <AppGridStackedFramesItem>
        <NuxtImg
          src="/images/stock/123.jpg"
          class="w-100 fill-height object-cover *-scale-x-100"
          sizes="100vw sm:822px md:1024px"
        />
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>

    <template
      :key="node.title"
      v-for="(node, idx) in [
        {
          title: 'Procesna oprema',
          title_sm: 'Postrojenja',
          icon: {
            icon: 'mdi:factory',
            props: {},
          },
          image: {
            src: '/images/stock/124.jpg',
            props: {
              class: '*-scale-x-100',
            },
          },
          description:
            '<p>Procesna oprema u industriji obuhvata projektovanje, izradu i montažu ključnih komponenti kao što su rezervoari, reaktori, voda i posude pod pritiskom, koje se izrađuju prema specifičnim zahtevima investitora. Ova oprema omogućava bezbedno odvijanje hemijskih, termičkih i mehaničkih procesa u postrojenjima, uz poštovanje tehničkih standarda i propisa.</p><p>Metal-Promet poseduje kapacitete za izradu ove procesne opreme, uključujući skladišne jedinice, reakcione sisteme, separacione kolone, posude pod pritiskom, izmenjivače toplote i kotlovska postrojenja.</p>',
          items: [
            {
              title: 'Rezervoari',
              subtitle: 'Za skladištenje i čuvanje sirovina i proizvoda',
            },
            {
              title: 'Reaktori',
              subtitle: 'Odvijanje hemijskih i procesnih reakcija',
            },
            {
              title: 'Vode (kolone)',
              subtitle: 'Separacija, destilacija, apsorpcija',
            },
            {
              title: 'Komponente pod pritiskom',
              subtitle: 'Za bezbedno odvijanje procesa pod pritiskom',
            },
            {
              title: 'Separatori',
              subtitle: 'Za razdvajanje faza',
            },
            {
              title: 'Kotlovi',
              subtitle: 'Proizvodnja pare i toplotne energije',
            },
          ],
        },
        {
          title: 'Energetika',
          icon: {
            icon: 'mdi:flash',
            props: {},
          },

          title_sm: 'Energetika',
          image: {
            src: '/images/stock/125.jpg',
            props: {
              class: '-scale-x-100',
            },
          },
          description:
            '<p>Oprema u energetici služi za izgradnju, rad i održavanje termoelektrana i energetskih postrojenja. Obuhvata čelične konstrukcije i komponente poput kotlova, turbina, izmenjivača toplote i cevovoda, koje omogućavaju proizvodnju električne i toplotne energije.</p><p>Metal-Promet Mladenovac poseduje kapacitete za izradu konstrukcija i opreme za termoelektrane i energetska postrojenja, zahvaljujući sopstvenom inženjeringu, mogućnostima zavarivanja, kontrole kvaliteta i završne obrade, čime može da isporuči pouzdane komponente prilagođene zahtevima investitora i uslovima rada u energetici.</p>',
          items: [
            {
              title: 'Kotlovi',
              subtitle:
                'Proizvode paru sagorevanjem goriva, ključni za pogon turbina',
            },
            {
              title: 'Posude pod pritiskom',
              subtitle: 'Bezbedno skladište i obrađuju fluide pod pritiskom',
            },
            {
              title: 'Rezervoari',
              subtitle: 'Skladištenje i čuvanje fluida u energetskim sistemima',
            },
            {
              title: 'Ventili i armature',
              subtitle: 'Kontrolišu i regulišu protok i pritisak fluida',
            },
          ],
        },
        {
          title: 'Cevovodi',
          title_sm: 'Cevovodi',
          icon: {
            icon: 'mdi:pipe-valve',
            props: {},
          },
          image: {
            src: '/images/stock/126.jpg',
            props: {
              class: '-scale-x-100',
            },
          },
          description:
            '<p>Metal-Promet poseduje kapacitete za izradu i montažu cevovoda i procesnih instalacija za industrijska postrojenja, zahvaljujući sopstvenom inženjeringu, iskusnim zavarivačima i kontroli kvaliteta svakog spoja, čime može da isporuči pouzdane cevovodne sisteme prilagođene zahtevima investitora i uslovima rada u industriji.</p>',
          items: [
            {
              title: 'Cevi',
              subtitle: 'Osnovni elementi za transport fluida',
            },
            {
              title: 'Lukovi (kolena)',
              subtitle: 'Promena pravca cevovoda',
            },
            {
              title: 'T-izvodi (račve)',
              subtitle: 'Grananje cevovoda',
            },
            {
              title: 'Reduciri',
              subtitle: 'Promena prečnika cevovoda',
            },
            {
              title: 'Ventili',
              subtitle: 'Regulacija i zatvaranje protoka',
            },
            {
              title: 'Filteri',
              subtitle: 'Uklanjanje nečistoća iz fluida',
            },
          ],
        },
        {
          title: 'Konstrukcije',
          title_sm: 'Konstrukcije',
          icon: {
            icon: 'mdi:gantry-crane',
            props: {},
          },
          image: {
            src: '/images/stock/127.jpg',
            props: {
              class: '-scale-x-100',
            },
          },
          description:
            '<p>Industrijske konstrukcije služe za nošenje, podupiranje i povezivanje opreme, platformi i objekata u industrijskim postrojenjima, obezbeđujući stabilnost, sigurnost i dugotrajnost. Obuhvataju čelične i aluminijumske konstrukcije, platforme, nadstrešnice i noseće ramove projektovane i izrađene prema zahtevima investitora i uslovima rada u industriji.</p><p>Metal-Promet poseduje kapacitete za njihovu izradu zahvaljujući sopstvenom inženjeringu, iskusnim zavarivačima, kontroli kvaliteta svakog spoja i mogućnosti montaže na terenu, čime može da isporuči pouzdane konstrukcije prilagođene zahtevima investitora i uslovima rada u industriji.</p>',
          items: [
            {
              title: 'Noseći čelični ramovi',
              subtitle:
                'Osnovna skeletna konstrukcija koja nosi opremu i objekte',
            },
            {
              title: 'Platforme',
              subtitle: 'Radne površine za pristup i održavanje opreme',
            },
            {
              title: 'Cevni mostovi',
              subtitle: 'Pridržavaju i vode cevovode kroz postrojenje',
            },
            {
              title: 'Stepenice i prilazi',
              subtitle: 'Omogućavaju pristup višim nivoima postrojenja',
            },
            {
              title: 'Ograde i balustrade',
              subtitle: 'Obezbeđuju sigurnost na platformama i stepenicama',
            },
            {
              title: 'Krovne i fasadne konstrukcije',
              subtitle: 'Zatvaraju industrijske objekte',
            },
          ],
        },
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
                sizes="100vw sm:550px md:822px"
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
                      lines="two"
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
