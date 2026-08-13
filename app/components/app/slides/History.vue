<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useCycleItems } from "~/composables/utils/use-cycle-items";
import { useImagePrefetch } from "~/composables/media/use-image-preload";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const props = defineProps<{
  propsCarousel?: any;
}>();

const d = useDisplay();

type THistorySlide = {
  index: number;
  title: string;
  subTitle: string;
  body: string;
  image: string;
  show?: boolean;
};

const SLIDES = (<THistorySlide[]>[
  {
    index: 0,
    image: "/images/slides/history/001.jpg",
    title: "80-te",
    subTitle: "Kada su nade bile tihe",
    body: "<p>Firma <strong>Metal-Promet</strong> osnovana je <strong>1988.</strong> godine u Mladenovcu kao porodična radionica za obradu metala. Prve korake pravimo u vreme kada je privreda u Srbiji prolazila kroz teške periode, ali smo <strong>upornim radom i kvalitetom izgradili poverenje</strong> na domaćem tržištu. Počeli smo skromno, u malom prostoru sa osnovnim alatima za zavarivanje i obradu čelika.</p><p>Svaki zavar, svaka konstrukcija bili su prilika da dokažemo da vredimo. Iako smo radili sa ograničenim resursima, trudili smo se da svaki proizvod bude izrađen precizno i da traje &dash; jer smo <strong>znali da je dobra reklama samo dobro urađen posao.</strong></p>",
  },
  {
    index: 1,
    image: "/images/slides/history/002.jpg",
    title: "90-te",
    subTitle: "Zauvek majstori",
    body: "<p>Devedesetih godina, uprkos nestabilnim uslovima na tržištu, <strong>uspevamo da proširimo proizvodni program i broj zaposlenih</strong>. Iz male radionice, koja je jedva imala <em>50m<sup>2</sup></em>, prelazimo na veći proizvodni prostor. Majstori koji su tada počinjali da rade kod nas, danas su vrhunski stručnjaci u svojoj oblasti &dash; stasali su uz naše iskusne radnike, učeći zanat od temelja.</p><p>Tada shvatamo da je <strong>ključ uspeha u ljudima</strong>, a ne samo u mašinama.</p>",
  },
  {
    index: 2,
    image: "/images/slides/history/003.jpg",
    title: "2000-te",
    subTitle: "Tamo gde drugi stanu",
    body: "<p>Početkom 2000-ih, ulažemo u savremenu opremu i uvozimo <strong>prvu CNC mašinu</strong> za obradu metala, što nam omogućava veću preciznost i bržu izradu. Uvodimo i <strong>tehnologiju plastifikacije</strong>, koja postaje naša specijalnost.</p><p>Godine 2004. učimo bitnu lekciju &dash; <em>U svakom kraju krije se novi početak, u svakom padu &dash; nova snaga...</em> Reorganizujemo poslovanje, uvodimo jasnu podelu odgovornosti i sistematizaciju rada, <strong>jačamo tim i fokusiramo se na kvalitet.</strong> Shvatamo da krize nisu kraj &dash; <strong>one su prilika da se izgradimo jači</strong>.</p>",
  },
  {
    index: 3,
    image: "/images/slides/history/004.jpg",
    title: "2010-te",
    subTitle: "Prvi kamion za Beč",
    body: "<p>Do 2012. godine, proširujemo proizvodni pogon na preko <em>800m<sup>2</sup></em>, zapošljavamo inženjere mašinstva i projektante koji <em>3D modelovanje</em> uvode u pripremu proizvodnje. Više se ne crta na podu &dash; <strong>sada imamo savremene softvere za projektovanje.</strong> </p><p>Počinjemo sarađivati sa partnerima iz Austrije i Nemačke, što nam otvara vrata ka evropskom tržištu. Izvozimo prve veće konstrukcije za Beč &dash; to je bio trenutak kada smo shvatili da <strong>možemo ravnopravno da se nosimo sa konkurencijom u inostranstvu</strong>.</p>",
  },
  {
    index: 4,
    image: "/images/slides/history/005.jpg",
    title: "2020-te",
    subTitle: "Od kapije do elektrane",
    body: "<p>U narednoj deceniji, intenziviramo izvoz u zemlje Evropske unije &dash; Austriju, Švajcarsku, Nemačku, Englesku. Uvodimo liniju za cink prajmer, proširujemo kapacitete plastifikacije, i <strong>implementiramo standarde kontrole kvaliteta</strong>.</p><p>Naši projekti postaju sve zahtevniji &dash; od luksuznih ograda za vile na Kosmaju, do kapitalnih remonta u Termoelektrani Kostolac. Svaki projekat nosi novo iskustvo i podiže lestvicu kvaliteta.</p>",
  },
  {
    index: 5,
    image: "/images/slides/history/006.jpg",
    title: "Danas",
    subTitle: "<em>&ldquo;Mala radionica iz Mladenovca&rdquo;</em>",
    body: "<p>Danas, Metal-Promet je <strong>savremeni proizvodni pogon</strong> sa CNC mašinama, laserskim sečenjem, 3D modelovanjem, i vrhunskom opremom za plastifikaciju. Izvozimo u više od 15 zemalja, gradimo poverenje decenijama, i ponosni smo na svaki zavar koji izađe iz naše radionice.</p><p>I dalje smo, u duši, ona mala radionica iz Mladenovca &dash; samo sa više iskustva, većim znanjem, i <strong>istom željom da stvaramo ono što traje.</strong></p>",
  },
]).filter((node) => false !== node.show);

const ctrl = useCycleItems(SLIDES, {
  key: (node) => node.title,
  initial: "80-te",
});

useImagePrefetch({
  images: SLIDES.map((node) => node.image),
});

// @@eos
</script>

<template>
  <AppGridStacked
    class="component--AppSlidesHistory"
    :props-stack="{
      class: 'flex flex-col',
    }"
  >
    <template #stack>
      <AppBoxBase
        class="!bg-[rgba(var(--v-theme-ui),.33)] text-[rgb(var(--v-theme-on-ui))] backdrop-blur-sm !shadow-sm"
      >
        <VCardActions>
          <h4
            v-if="ctrl.current.value?.title"
            class="ps-2 italic text-shadow-sm opacity-50 w-[122px]"
            v-html="ctrl.current.value.title"
          />
          <template v-if="d.smAndUp.value">
            <VSpacer />
            <h3 class="text-shadow-sm" v-html="ctrl.current.value?.subTitle" />
          </template>
          <VSpacer />
          <VBtn
            @click="ctrl.prev"
            icon
            rounded="circle"
            color="on-ui"
            :disabled="ctrl.isFirst.value"
          >
            <IconX
              icon="$prev"
              size="2rem"
              :class="{ 'filter-shadow-sm': !ctrl.isFirst.value }"
            />
          </VBtn>
          <small class="app-container-reset--inline opacity-50"
            >{{ ctrl.index.value + 1 }} / {{ ctrl.items.length }}</small
          >
          <VBtn
            @click="ctrl.next"
            icon
            rounded="circle"
            color="on-ui"
            :disabled="ctrl.isLast.value"
          >
            <IconX
              icon="$next"
              size="2rem"
              :class="{ 'filter-shadow-sm': !ctrl.isLast.value }"
            />
          </VBtn>
        </VCardActions>
      </AppBoxBase>
      <VSpacer />
      <AppBoxBase
        class="indent-4 !bg-[rgba(var(--v-theme-ui),.75)] text-[rgb(var(--v-theme-on-ui))] backdrop-blur-sm"
      >
        <AppBoxContainerCentered fluid>
          <VCardText class="text-body-1">
            <div
              class="space-y-2"
              :class="{
                'text-body-2': !d.smAndUp.value,
                'text-[122%]': d.mdAndUp.value,
              }"
              v-html="ctrl.current.value?.body"
            />
          </VCardText>
        </AppBoxContainerCentered>
      </AppBoxBase>
    </template>
    <VCarousel
      :show-arrows="false"
      hide-delimiters
      :continuous="false"
      crossfade
      :model-value="ctrl.currentKey.value"
      @update:model-value="(v) => v && ctrl.active(`${v}`)"
      v-bind="props.propsCarousel"
    >
      <VCarouselItem
        v-for="slide in ctrl.items"
        :key="slide.title"
        :src="slide.image"
        :value="slide.title"
        cover
        transition="app-transition-cross-scale"
      />
    </VCarousel>
  </AppGridStacked>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
