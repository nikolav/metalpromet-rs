<script setup lang="ts">
import { UseElementBounding } from "@vueuse/components";
import { useDisplay } from "vuetify";

definePageMeta({
  context: {
    title: "pages.finish.title",
    description: "pages.finish.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/delatnosti/zavrsna-obrada",
      "sr-cyrl": "/delatnosti/zavrsna-obrada",
      en: "/services/finish",
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
  <AppBoxPageWrap class="page--finish">
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
              <span v-if="!d.smAndUp.value">Završna obrada</span>
              <UseElementBounding
                v-else
                class="d-inline-block pa-0 ma-0"
                v-slot="cx"
              >
                <span>Završna obrada, finiš</span>

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
              <strong>Zaštita površina ključni korak u našem procesu</strong> i
              <em>&quot;tajni sastojak&quot;</em>
              zbog kojeg naši proizvodi traju decenijama. Peskarenjem uklanjamo
              rđu i nečistoće, a zatim nanosimo boju. Rezultat je savršeno
              sjajna i otporna površina. Plastificiramo i uslužno &dash; za vas,
              uz konkurentne cene i brze rokove.
            </p>
          </VCardText>
        </AppBoxContainerCentered>
        <VSpacer />
      </AppGridStackedFramesItem>
      <AppGridStackedFramesItem>
        <NuxtImg
          src="/images/stock/121.jpg"
          class="w-100 fill-height object-cover *-scale-x-100 object-top"
          sizes="100vw sm:822px md:1024px"
        />
      </AppGridStackedFramesItem>
    </AppGridStackedFrames>

    <template
      :key="node.title"
      v-for="(node, idx) in [
        {
          title: 'Plastifikacija',
          title_sm: 'Plastifikacija',
          icon: {
            icon: 'mdi:security',
            props: {
              class: { '*-translate-y-1': !d.smAndUp.value },
            },
          },
          image: {
            src: '/images/stock/137.jpg',
            props: {
              class: '*-scale-x-100 object-[40%_center]',
            },
          },
          description:
            '<p>Metal-Promet iz Mladenovca gradi reputaciju na jednoj jednostavnoj istini: metal traje onoliko koliko je dobra njegova zaštita. Svaki komad, bio aluminijum ili čelik, prvo prolazi hemijski tretman i fino peskarenje, kojim se uklanjaju rđa, stare boje i masnoće, pa tek onda dobija zaštitu. Nanosimo boju u prahu i pečemo je u našoj peći koja omogućava i plastificikaciju većih segmenata. Rezultat je glatka, sjajna i otporna površina koja ne bledi, ne ljušti se i ne korodira, uz izbor iz širokog dijapazona RAL nijansi, uključujući strukturne i metalik boje.</p><p>Završna obrada kod nas podjednako važna kao i sam zavar. Kvalitet koji traje decenijama ne nastaje slučajno: nastaje kada se svaki spoj i svaka površina tretiraju sa pažnjom.</p>',
          items: [
            {
              title: 'Uslužna plastifikacija metala',
              subtitle: 'Boja u prahu, hemijska priprema svakog komada',
            },
            {
              title: 'Plastifikacija aluminijuma i čelika',
              subtitle:
                'ALU i čelični profili, ograde, konstrukcije uz veliki dijapazon RAL nijansi',
            },
            {
              title: 'Plastifikacija kovanog gvožđa',
              subtitle:
                'Prajmer i plastifikacija za zaštitu i lep izgled kovanih elemenata',
            },
            {
              title: 'Plastifikacija auto-delova',
              subtitle: 'Obnova i zaštita auto-delova i felni u željenoj boji',
            },
            {
              title: 'Peskarenje abrazivom',
              subtitle: 'Uklanjanje rđe, starih boja i masnoća',
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
            class="!opacity-[.2]"
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
