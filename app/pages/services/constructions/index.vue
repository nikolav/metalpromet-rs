<script setup lang="ts">
import { UseElementBounding } from "@vueuse/components";
import { useDisplay } from "vuetify";

definePageMeta({
  context: {
    title: "pages.constructions.title",
    description: "pages.constructions.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti/metalne-konstrukcije",
      "sr-cyrl": "/delatnosti/metalne-konstrukcije",
      en: "/services/constructions",
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
  <AppBoxPageWrap class="page--constructions">
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
              <span v-if="!d.smAndUp.value">Metalne konstrukcije</span>
              <UseElementBounding
                v-else
                class="d-inline-block pa-0 ma-0"
                v-slot="cx"
              >
                <span>Montaža metalnih konstrukcija</span>

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
                >kompletnu uslugu izrade čeličnih i aluminijumskih
                konstrukcija</strong
              >
              &dash; od ideje, preko izrade, do montaže na vašoj lokaciji. Od
              pouzdanih krovnih okvira, do složenih nosivih konstrukcija za
              industrijska postrojenja, naši majstori vladaju svim tehnikama
              &dash; svaki šav je jači od samog metala.
            </p>
          </VCardText>
        </AppBoxContainerCentered>
        <VSpacer />
      </AppGridStackedFramesItem>
      <AppGridStackedFramesItem>
        <NuxtImg
          src="/images/stock/128.jpg"
          class="w-100 fill-height object-cover -scale-x-100"
          sizes="100vw sm:822px md:1024px"
        />
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>

    <template
      :key="node.title"
      v-for="(node, idx) in [
        {
          title: 'Čelične konstrukcije',
          title_sm: 'Konstrukcije',
          icon: {
            icon: 'mdi:gantry-crane',
            props: {},
          },
          image: {
            src: '/images/stock/129.jpg',
            props: {
              class: '-scale-x-100 object-[38%_center]',
            },
          },
          description:
            '<p>Čelične konstrukcije se primenjuju u građevinarstvu, industriji i infrastrukturi kao nosivi i funkcionalni elementi objekata &dash; hale, platforme, nosači rezervoara i procesne opreme. Njihova namena je da obezbede stabilnost, sigurnost i dugotrajnost objekata i postrojenja, uz mogućnost prilagođavanja dimenzija, oblika i nosivosti prema konkretnim zahtevima investitora i uslovima na terenu.</p><p>Metal-Promet poseduje kapacitete za izradu nosivih metalnih konstrukcija, zahvaljujući sopstvenoj proizvodnji u Mladenovcu, iskusnom timu majstora i inženjera koji obezbeđuju preciznu izradu, kontrolisan kvalitet i trajnost  konstrukcija prilagođenih zahtevima investitora.</p>',
          items: [
            {
              title: 'Nosivi ramovi, hale',
              subtitle:
                'Čelični ramovi, stubovi i krovne konstrukcije industrijskih hala i poslovnih objekata',
            },
            {
              title: 'Platforme, međuspratne konstrukcije',
              subtitle:
                'Nosive platforme, prolazi i međuspratne konstrukcije za pristup opremi i odvijanje proizvodnje',
            },
            {
              title: 'Noseće konstrukcije cevovoda',
              subtitle: 'Nosači cevi u industrijskim instalacijama',
            },
            {
              title: 'Konstrukcije za opremu i mašine',
              subtitle: 'Postolja, ramovi i nosači za mašine i procesnu opremu',
            },
          ],
        },
        {
          title: 'ALU konstrukcije',
          title_sm: 'ALU okviri',
          icon: {
            icon: 'material-symbols:home-outline',
            props: {},
          },
          image: {
            src: '/images/stock/131.jpg',
            props: {
              class: '*-scale-x-100 object-[60%_center]',
            },
          },
          description:
            '<p>Lake aluminijumske konstrukcije koriste se tamo gde je važna mala masa uz zadovoljavajuću nosivost i otpornost na koroziju. Njihova namena obuhvata lake krovne okvire, terase, prozore, vrata, kutijaste profile, kao i dekorativne elemente kod kojih je pored funkcije važan i izgled. Prednost im je što su lakše od čeličnih, ne korodiraju i jednostavnije se održavaju, pa su pogodne za spoljnu upotrebu i montažu na objektima ograničene nosivosti.</p><p>Metal-Promet poseduje kapacitete za izradu aluminijumskih konstrukcija u sopstvenoj proizvodnji u Mladenovcu. Iskusni majstori i inženjeri izrađuju aluminijumske ograde, kapije, nadstrešnice, terase, stepeništa, gelendere, prozore, vrata, kutijaste profile i dekorativne elemente visoke pouzdanosti, kvaliteta i trajnosti prilagođene zahtevima investitora.</p>',
          items: [
            {
              title: 'Ramovi, podkonstrukcije',
              subtitle:
                'Aluminijumski ramovi i podkonstrukcije za objekte i opremu, projektovani prema nosivosti i nameni',
            },
            {
              title: 'Krovne konstrukcije, terase',
              subtitle:
                'Lake krovne konstrukcije za terase, dvorišta i poslovne objekte',
            },
            {
              title: 'Platforme, prolazi',
              subtitle:
                'Lake pristupne platforme i prolazi za održavanje opreme',
            },
            {
              title: 'Zaštitne i ogradne konstrukcije',
              subtitle: 'Ograde, štitnici i barijere oko opreme i radnih zona',
            },
            {
              title: 'Kutijasti profili i ramovi',
              subtitle:
                'Konstrukcije od aluminijumskih kutijastih profila za razne namene',
            },
            {
              title: 'Prozori i vrata',
              subtitle: 'Aluminijumski profili za prozore, vrata i rolo vrata',
            },
          ],
        },
        {
          title: 'Zavarivanje',
          title_sm: 'Zavarivanje',
          icon: {
            icon: 'mdi:fire',
            props: {},
          },
          image: {
            src: '/images/stock/132.jpg',
            props: {
              class: '*-scale-x-100 object-[10%_center]',
            },
          },
          description:
            '<p>Zavarivanje je postupak trajnog spajanja metalnih delova topljenjem ili pritiskom, pri čemu se formira spoj koji po čvrstoći i funkcionalnosti može da bude ravnopravan ili jači od samog osnovnog materijala. Kvalitetan zavar je ključan za nosivost, stabilnost i trajnost svake konstrukcije, jer nepravilan šav može da dovede do prslina, korozije i otkaza spoja, zbog čega se svaki zavar izvodi prema tehničkim standardima i uz kontrolu kvaliteta. </p><p>Metal-Promet poseduje kapacitete za izvođenje ovih radova, zahvaljujući iskusnom timu zavarivača i inženjera zavarivanja, opremi za zavarivanje različitih materijala i debljina, od tankih aluminijumskih profila do debelih čeličnih nosača, kao i mogućnosti površinske zaštite zavarenih spojeva, čime se obezbeđuje da svaki šav bude čist, pravilan i siguran i da konstrukcija zadovolji zahteve investitora u pogledu čvrstoće, trajnosti i bezbednosti.</p>',
          items: [
            {
              title: 'Ručno elektrolučno zavarivanje',
              subtitle:
                'Zavarivanje elektrodom obloženom praškom, gde se luk uspostavlja između elektrode i radnog komada',
            },
            {
              title: 'MIG/MAG zavarivanje',
              subtitle:
                'Elektrolučno zavarivanje kontinuiranom žičanom elektrodom uz zaštitu gasa',
            },
            {
              title: 'TIG/GTAW zavarivanje',
              subtitle:
                'Elektrolučno zavarivanje netaljivom volframovom elektrodom u zaštiti inertnog gasa',
            },
            {
              title: 'Tačkasto zavarivanje',
              subtitle:
                'Spajanje limova prolaskom struje kroz bakarne elektrode koje pritiskaju materijal',
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
