<script setup lang="ts">
import { useDisplay } from "vuetify";

import { useCycleItems } from "~/composables/utils/use-cycle-items";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

definePageMeta({
  context: {
    title: "pages.projects.title",
    description: "pages.projects.description",
  },
  layout: "default",
  i18n: {
    paths: {
      sr: "/projekti",
      "sr-cyrl": "/projekti",
      en: "/projects",
    },
  },
});

const { $$ } = useNuxtApp();
const d = useDisplay();

const ctrlFrames = useCycleItems(
  $$.shuffle([
    {
      key: "BUh6hnBsD90cx7PNN",
      image: "/images/stock/013.jpg",
    },
    {
      key: "oGkSL70",
      image: "/images/hero/1-projektovanje/photorealistic-render.02.jpg",
    },
    {
      key: "nJkfDNkLnsuNKBSo",
      image: "/images/hero/2-bravarija-konstrukcije/constructions.01.jpg",
    },
    {
      key: "OjMdX9s5",
      image: "/images/hero/2-bravarija-konstrukcije/constructions.02.jpg",
    },
    {
      key: "rhrrbmqaRcqNab",
      image: "/images/hero/2-bravarija-konstrukcije/constructions.03.jpg",
    },
    {
      key: "jQLNsu7izxH1",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.04.jpg",
    },
    {
      key: "rFX0wkTuRsG5",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.03.jpg",
    },
    {
      key: "vlfWjxMj",
      image: "/images/hero/3-stolarija-ograde-oprema/canopy.01.jpg",
    },
    {
      key: "5y1ixk0jH",
      image: "/images/hero/3-stolarija-ograde-oprema/canopy.02.jpg",
    },
    {
      key: "oB1OnY1V2nQ7H",
      image: "/images/hero/3-stolarija-ograde-oprema/equipment.01.jpg",
    },
    {
      key: "i3KfVco0NuIhFZIM6E0",
      image: "/images/stock/032.jpg",
    },
    {
      key: "HQsRp",
      image: "/images/stock/011.jpg",
    },
    {
      key: "7Wppx3ZTxC0yz83sC5",
      image: "/images/slides/gotovi-proizvodi/002.jpg",
    },
    {
      key: "PLzMe6A3tRbfXIAF",
      image: "/images/slides/gotovi-proizvodi/008.jpg",
    },
    {
      key: "SmDQYTtM01Sm55NSlOj",
      image: "/images/slides/history/006.jpg",
    },
    {
      key: "xND7UUjwCMq",
      image: "/images/slides/proizvodnja/002.jpg",
    },
    {
      key: "yDR7CVcmat0Q",
      image: "/images/slides/proizvodnja/007.jpg",
    },
    {
      key: "EWrT0TUngPNF",
      image: "/images/slides/proizvodnja/008.jpg",
    },
    {
      key: "8udUa",
      image: "/images/slides/proizvodnja/009.jpg",
    },
    {
      key: "WlCEdb0MCkEcf",
      image: "/images/stock/034.jpg",
    },
    {
      key: "jesLUnG",
      image: "/images/stock/036.jpg",
    },
    {
      key: "S0Qdw",
      image: "/images/stock/037.jpg",
    },
    {
      key: "IP9ML",
      image: "/images/stock/039.jpg",
    },
    {
      key: "4t86asBwevwNhVdqZ6",
      image: "/images/stock/040.jpg",
    },
    {
      key: "1rFWsGsIA2IxTU7xTuW",
      image: "/images/stock/041.jpg",
    },
  ]),
  {
    key: (node) => node.key,
  },
);
const ctrlFinish = useCycleItems(
  $$.shuffle([
    {
      key: "UK7ttMu",
      image: "/images/hero/1-projektovanje/color-study.02.jpg",
    },
    {
      key: "czAwedZ4W",
      image: "/images/hero/1-projektovanje/color-study.01.jpg",
    },
    {
      key: "RZVimsdMiV",
      image: "/images/hero/4-zastita-i-obrada-povrsina/paint.02.jpg",
    },
    {
      key: "hlwdDgN1HI",
      image: "/images/hero/4-zastita-i-obrada-povrsina/peskarenje.01.jpg",
    },
    {
      key: "r5QBUJVr3KJ7",
      image: "/images/hero/4-zastita-i-obrada-povrsina/paint.03.jpg",
    },
    {
      key: "pc8JOwXmE",
      image:
        "/images/hero/4-zastita-i-obrada-povrsina/elektrostatic-pain.01.jpg",
    },
    {
      key: "yDGH9kS6gp8V",
      image: "/images/stock/008.jpg",
    },
    {
      key: "FDMBY84Xlxr4",
      image: "/images/stock/012.jpg",
    },
    {
      key: "XIss2uiB1u9mzrQxQ",
      image: "/images/slides/zavrsna-obrada/003.jpg",
    },
    {
      key: "kgpOZ",
      image: "/images/slides/zavrsna-obrada/001.jpg",
    },
    {
      key: "TRG0IB",
      image: "/images/slides/zavrsna-obrada/002.jpg",
    },
    {
      key: "cUjNtBL006T4tJB",
      image: "/images/slides/zavrsna-obrada/004.jpg",
    },
    {
      key: "5rQ4cFD08lFlmLh6",
      image: "/images/slides/zavrsna-obrada/009.jpg",
    },
    {
      key: "g09eR",
      image: "/images/slides/zavrsna-obrada/008.jpg",
    },
    {
      key: "FAMIT2lEqSR",
      image: "/images/slides/zavrsna-obrada/006.jpg",
    },
    {
      key: "4L9alSkcG57",
      image: "/images/stock/043.jpg",
    },
    {
      key: "vzIWkV6CZKD",
      image: "/images/stock/044.jpg",
    },
    {
      key: "LuXr9FfbWYwGuHqYStp",
      image: "/images/stock/045.jpg",
    },
    {
      key: "ke1c5XLYsnh",
      image: "/images/stock/046.jpg",
    },
    {
      key: "1PwhQgNsa",
      image: "/images/stock/047.jpg",
    },
    {
      key: "EzMDLBMFCHaxz",
      image: "/images/stock/048.jpg",
    },
    {
      key: "AgCftcxZXsDm3VNNhk",
      image: "/images/stock/049.jpg",
    },
    {
      key: "wiaVxH",
      image: "/images/stock/050.jpg",
    },
    {
      key: "qbfbzE9",
      image: "/images/stock/051.jpg",
    },
    {
      key: "5sl5m3fMV",
      image: "/images/stock/052.jpg",
    },
    {
      key: "OepH95lDh445L",
      image: "/images/stock/053.jpg",
    },
    {
      key: "407IULFcn1OcWq8cx",
      image: "/images/stock/054.jpg",
    },
  ]),
  {
    key: (node) => node.key,
  },
);
const ctrlMachines = useCycleItems(
  $$.shuffle([
    {
      key: "UUQhL0uYMlWta",
      image: "/images/hero/3-stolarija-ograde-oprema/stairs.02.jpg",
    },
    {
      key: "xHB7DQFacHMX7GQofU9S",
      image: "/images/slides/proizvodnja/001.jpg",
    },
    { key: "Dr2X52i", image: "/images/slides/zavrsna-obrada/008.jpg" },
    { key: "q6iDpih", image: "/images/stock/055.jpg" },
    { key: "w2YUiwHq", image: "/images/stock/056.jpg" },
    { key: "GuEFiqtRSIUbu", image: "/images/stock/057.jpg" },
    { key: "F5SplzBsyVgu0YEL2y", image: "/images/stock/058.jpg" },
    { key: "UEuLoIv9", image: "/images/stock/044.jpg" },
    { key: "WIrOE02lNA2HvQebi51", image: "/images/stock/059.jpg" },
    { key: "wBgeS2aDO", image: "/images/stock/060.jpg" },
    { key: "Hvdl3bvKpDr", image: "/images/stock/061.jpg" },
    { key: "iNaNzd", image: "/images/stock/062.jpg" },
  ]),
  {
    key: (node) => node.key,
  },
);
const ctrl = useCycleItems(
  $$.shuffle([
    { key: "8tcuT45t", image: "/images/stock/007.jpg" },
    {
      key: "iO3ebuoni372",
      image: "/images/hero/2-bravarija-konstrukcije/montaza.02.jpg",
    },
    {
      key: "AkYh5XefSnK",
      image: "/images/hero/2-bravarija-konstrukcije/smith.02.jpg",
    },
    {
      key: "Zzqtu8nX0bDEAc9PR",
      image: "/images/hero/2-bravarija-konstrukcije/smith.01.jpg",
    },
    {
      key: "o24NXOwgENQ9o1ubt",
      image: "/images/hero/3-stolarija-ograde-oprema/alu-fences.01.jpg",
    },
    {
      key: "gejIUnc8PdvFzioTd",
      image: "/images/hero/3-stolarija-ograde-oprema/alu-fences.02.jpg",
    },
    {
      key: "FQFaJ",
      image: "/images/hero/3-stolarija-ograde-oprema/fence.01.jpg",
    },
    {
      key: "0R3ttkLsSo3hynfIp",
      image: "/images/hero/3-stolarija-ograde-oprema/fence.02.jpg",
    },
    {
      key: "KRAgDvUu76FZv",
      image: "/images/hero/3-stolarija-ograde-oprema/gates.01.jpg",
    },
    {
      key: "JJZkRPH6Oep",
      image: "/images/hero/3-stolarija-ograde-oprema/gates.02.jpg",
    },
    {
      key: "9M3hGQ6phtWqMAXmK",
      image: "/images/hero/3-stolarija-ograde-oprema/gates.03.jpg",
    },
    {
      key: "TOkDwSdKI",
      image: "/images/hero/3-stolarija-ograde-oprema/panel.01.jpg",
    },
    {
      key: "OnFeZoonQGCnR",
      image: "/images/hero/3-stolarija-ograde-oprema/panel.03.jpg",
    },
    {
      key: "ityp28rewu22LA9U32",
      image: "/images/hero/3-stolarija-ograde-oprema/stainless.02.jpg",
    },
    {
      key: "dViBrAUb2",
      image: "/images/stock/027.jpg",
    },
    {
      key: "QeCR5",
      image: "/images/stock/028.jpg",
    },
    {
      key: "nyxxNOn3KqhKo1O2gh",
      image: "/images/stock/029.jpg",
    },
    {
      key: "YSCGtLSsmNvqOy1CK",
      image: "/images/stock/030.jpg",
    },
  ]),
  {
    key: (node) => node.key,
  },
);

const toggleTabs = useToggleFlag();
const toggleTabsFrames = useToggleFlag();
const toggleTabsFinish = useToggleFlag();
const toggleTabsMachines = useToggleFlag();

const appNavBarHeight = computed(
  () => $$.config("layout.component.AppNavAppBar.height") ?? 0,
);

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--projects">
    <!-- hero -->
    <AppGridStacked
      :props-stack="{
        class: 'position-relative d-flex flex-col',
      }"
      :style="{
        height: `calc(100svh - ${appNavBarHeight}px)`,
      }"
    >
      <template #stack>
        <AppBoxHeroLine
          h2="Industrijska oprema, metalne konstrukcije, plastifikacija"
          title="Naši projekti"
          subtitle="Pregled radova u Srbiji i inostranstvu"
        >
          <template #icon>
            <IconX icon="mdi:eiffel-tower" size="2rem" class="opacity-[.33]" />
          </template>
        </AppBoxHeroLine>
        <VSpacer />
        <VCardActions
          class="justify-center"
          :class="{ 'mb-12': !d.mobile.value, 'mb-5': d.mobile.value }"
        >
          <AppBtnCtaContact>
            <template #prepend>
              <IconX
                icon="mdi:pipe-wrench"
                size="1.5em"
                class="text-accent-lighten-1"
              />
            </template>
            <span>Zatražite ponudu</span>
          </AppBtnCtaContact>
        </VCardActions>
      </template>
      <NuxtImg
        src="/images/stock/113a.jpg"
        sizes="100vw sm:912px lg:1280px"
        class="w-full fill-height object-cover"
      />
    </AppGridStacked>

    <template
      v-for="(node, idx) in [
        {
          title: 'Oprema, mašinstvo',
          subtitle: 'Za potrebe industrije u Srbiji i inostranstvu',
          icon: { icon: 'mdi:engine', props: {} },
          cta: {
            text: 'Zatražite ponudu',
            icon: { icon: 'mdi:pipe-wrench' },
          },
          ctrl: ctrlMachines,
          toggleTabs: toggleTabsMachines,
          tabs: [
            {
              value: false,
              title: 'Industrija',
              icon: { icon: '$info' },
              content: {
                text: true,
                content:
                  '<p> Industrijska oprema i mašinstvo predstavljaju najzahtevniji segment našeg poslovanja &dash; oblast u kojoj se znanje, iskustvo i preciznost spajaju u funkcionalne celine koje pokreću industriju. <strong>U Metal-Prometu ne bežimo od izazova</strong>; naprotiv, specijalizovani smo za projekte koji zahtevaju pouzdanost, sigurnost i dugotrajan vek trajanja. </p> <p> Bilo da se radi o rezervoarima, reaktorima za vodu, cevovodima ili kapitalnim remontima &dash; naš pristup je uvek isti: <strong> maksimalna odgovornost, vrhunski kvalitet i poštovanje rokova</strong>. Zato su nam klijenti iz energetskog, hemijskog i mašinskog sektora u Srbiji i inostranstvu ukazali poverenje koje decenijama opravdavamo. </p> <p> Naš tim inženjera mašinstva i zavarivača radi po najvišim standardima, koristeći savremenu opremu i proverene materijale. Posebnu pažnju posvećujemo zavarivanju pod nadzorom, ispitivanju bez razaranja i <strong>poštovanju svih tehničkih normi koje propisuje industrija</strong>. </p>',
              },
            },
            {
              value: true,
              title: 'Usluge',
              icon: { icon: 'mdi:tag' },
              content: {
                text: false,
                content: [
                  {
                    title: 'Procesna oprema',
                    subtitle:
                      'Izrada reaktora za vodu, industrijskih rezervoara, tlačnih posuda, i druge opreme po zahtevima investitora. Projekti koji zahtevaju preciznost, ispitivanje i poštovanje normi.',
                  },
                  {
                    title: 'Energetika',
                    subtitle:
                      'Projekti od nacionalnog značaja koji zahtevaju stručnost i odgovornost. Termoelektrane, cevovodi, nosači i elemenati za potrebe energetskih postrojenja.',
                  },
                  {
                    title: 'Industrijske konstrukcije',
                    subtitle:
                      'Izrada čeličnih konstrukcija za fabričke hale, postrojenja i industrijske pogone. Noseće konstrukcije za teške mašine, transportne sisteme i opremu.',
                  },
                  {
                    title: 'Cevovodi i instalacije',
                    subtitle:
                      'Izrada i montaža cevovoda za industrijske potrebe, uključujući vodovodne, hemijske i energetske instalacije. Zavarivanje pod nadzorom, hidrotestiranje i puštanje u rad.',
                  },
                  {
                    title: 'Reparacije i rekonstrukcije',
                    subtitle:
                      'Sanacija, popravka, rekonstrukcija, i produženje veka trajanja industrijske opreme, mašina i postrojenja.',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Konstrukcije, nosači',
          subtitle: 'Za industrijske i stambene objekte u Srbiji',
          icon: {
            icon: 'material-symbols:home-outline',
            props: { size: '2rem' },
          },
          cta: {
            text: 'Zakažite montažu',
            icon: { icon: 'mdi:wrench' },
          },
          ctrl: ctrlFrames,
          toggleTabs: toggleTabsFrames,
          tabs: [
            {
              value: false,
              title: 'Nosači',
              icon: { icon: '$info' },
              content: {
                text: true,
                content:
                  '<p> Metalne konstrukcije su kičma svakog ozbiljnog objekta &dash; bilo da se radi o stambenom objektu, poslovnom prostoru ili industrijskom pogonu. U Metal-Prometu <strong> gradimo čvrstoću, sigurnost i dugotrajnost u svaki projekat </strong>, koristeći vrhunske materijale i preciznu inženjersku obradu. </p> <p> Bilo da su vam potrebne nadstrešnice za zaštitu vozila ili đakuzija, krovne konstrukcije za luksuzne vile, ili metalne stepenice i gelenderi &dash; <strong>kod nas ćete pronaći rešenje koje će trajati decenijama.</strong> Svi elementi se mogu dodatno plastificirati, uz opciju cink prajmera za vrhunsku zaštitu od korozije. </p> <p> Naš tim majstora pristupa svakom projektu pažljivo &dash; od ideje i izrade, do montaže na vašoj lokaciji. Radovi se izvode po sistemu <em>&quot;ključ u ruke&quot;</em>, što znači da ste oslobođeni bilo kakve brige oko koordinacije izvođača. </p>',
              },
            },
            {
              value: true,
              title: 'Tipovi',
              icon: { icon: 'mdi:tag' },
              content: {
                text: false,
                content: [
                  {
                    title: 'Krovne konstrukcije',
                    subtitle:
                      'Čelične krovne noseće konstrukcije za stambene, poslovne i industrijske objekte. Precizno projektovane i izrađene da izdrže najveća opterećenja.',
                  },
                  {
                    title: 'Nadstrešnice',
                    subtitle:
                      'Za luksuzne kuće, parking mesta, terase i ulaze. Izrađene od čelika ili aluminijuma, sa mogućnošću plastifikacije u željenoj boji.',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Ograde, kapije, stolarija',
          subtitle: 'Za kuće i luksuzne vile u centralnoj Srbiji',
          icon: { icon: 'mdi:shield-home', props: {} },
          cta: {
            text: 'Zakažite ugradnju',
            icon: { icon: 'mdi:screwdriver' },
          },
          ctrl: ctrl,
          toggleTabs: toggleTabs,
          tabs: [
            {
              value: false,
              title: 'Ograde',
              icon: { icon: '$info' },
              content: {
                text: true,
                content:
                  '<p> U Metal-Prometu smo svesni da ograda nije samo granica vašeg imanja &dash; ona je <strong>vizit-karta, znak dobrodošlice i čuvar vaše privatnosti.</strong> Zato svaku ogradu i kapiju izrađujemo sa podjednakom pažnjom, bilo da se radi o skromnoj gradskoj kući ili luksuznoj vili na obroncima Avale ili Kosmaja. </p> <p> Bilo da želite elegantnu aluminijumsku ogradu koja će se uklopiti u moderan ambijent, kovanu kapiju koja odiše tradicijom, ili panelnu ogradu koja nudi sigurnost i brzu montažu &dash; kod nas ćete pronaći ono što tražite. <strong>Sve naše proizvode možete prilagoditi vašim željama</strong>, uz širok dijapazon RAL boja i različitih modela. </p> <p> Montaže vršimo širom Mladenovca, Beograda, cele Šumadije i centralne Srbije, ali i van granica naše zemlje, što svedoči o poverenju koje nam klijenti ukazuju. Naš tim iskusnih majstora i inženjera <strong> garantuje da će vaša ograda biti postavljena precizno, čvrsto i trajno. </strong> </p>',
              },
            },
            {
              value: true,
              title: 'Modeli',
              icon: { icon: 'mdi:tag' },
              content: {
                text: false,
                content: [
                  {
                    title: 'ALU ograde',
                    subtitle:
                      'Moderne, lagane, otporne na koroziju. Razni modeli, sa &quot;S&quot; odliscima, RAL boje po želji.',
                  },
                  {
                    title: 'Čelične ograde',
                    subtitle:
                      'Čvrste i dugotrajne. 2D/3D panelne, laserski sečene, kovane i prohromske.',
                  },
                  {
                    title: 'Dvorišne kapije',
                    subtitle:
                      'Krilne i klizne, velikih dimenzija. Moguća automatizacija.',
                  },
                  {
                    title: 'Panelne ograde',
                    subtitle:
                      'Brzomontažni sistemi. 2D i 3D paneli, različiti dezeni i boje.',
                  },
                  {
                    title: 'Ostali tipovi ograda i elemenata',
                    subtitle:
                      'Stepenice, gelenderi, zaštitne ograde, ukrasni elementi od kovanog gvožđa.',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Završna obrada, plastifikacija',
          subtitle: 'Vrhunska zaštita i estetika za klijente iz cele Srbije',
          icon: { icon: 'mdi:security', props: {} },
          cta: {
            text: 'Zakažite uslugu',
            icon: { icon: 'mdi:shield-check' },
          },
          ctrl: ctrlFinish,
          toggleTabs: toggleTabsFinish,
          tabs: [
            {
              value: false,
              title: 'Finiš',
              icon: { icon: '$info' },
              content: {
                text: true,
                content:
                  '<p> Plastifikacija je jedan od najefikasnijih načina za zaštitu metalnih površina, uz istovremeno postizanje izuzetno lepog estetskog izgleda. U Metal-Prometu ovu uslugu podižemo na viši nivo &dash; svaki komad, bilo da je od aluminijuma ili čelika, prethodno hemijski tretiramo, čime <strong> obezbeđujemo savršeno prianjanje boje i dugotrajnost završne obrade. </strong> </p> <p> Bilo da su u pitanju ograde, kapije, nameštaj, mašinski delovi, felne ili industrijske konstrukcije &dash; naš tim <strong> garantuje vrhunski kvalitet, brzu izradu i pristupačne cene. </strong> Uslugu plastifikacije pružamo kako za naše proizvode, tako i za kompletno uslužno farbanje vaših delova. </p> <p> Naša industrijska peć <strong>omogućava obradu i najvećih konstrukcija</strong>, dok visina komore pruža fleksibilnost za različite profile. U ponudi imamo širok dijapazon RAL boja &dash; od klasičnih nijansi do strukturnih i metalik efekata, uz opciju cink prajmera za dodatnu antikorozivnu zaštitu. </p>',
              },
            },
            {
              value: true,
              title: 'Usluge',
              icon: { icon: 'mdi:tag' },
              content: {
                text: false,
                content: [
                  {
                    title: 'Ograde i konstrukcije',
                    subtitle:
                      'Plastifikacija aluminijumskih i čeličnih ograda, kapija, stepenica, gelendera, i drugih konstruktivnih elemenata.',
                  },
                  {
                    title: 'Nameštaj i predmeti',
                    subtitle:
                      'Školske klupe i stolice, baštenski setovi, stolovi, stolice, žardinjere, klupe za parkove i druge metalne predmete.',
                  },
                  {
                    title: 'Industrija i auto',
                    subtitle:
                      'Felne, mašinski delovi, postolja za mašine, rolo vrata, okapnice, rezervoari i drugi industrijski elementi.',
                  },
                  {
                    title: 'Kovano gvožđe',
                    subtitle:
                      'Zaštita i dekorativna obrada kovanih ograda, kapija, prozorskih rešetki i ukrasnih elemenata.',
                  },
                  {
                    title: 'Specijalni tretmani',
                    subtitle:
                      'Hemijska priprema pre farbanja, kombinovanje sa strukturnim i metalik efektima.',
                  },
                ],
              },
            },
          ],
        },
      ]"
    >
      <AppSheetSectionRoot
        :title="node.title"
        :subtitle="node.subtitle"
        :props-title="{
          class: `italic text-wrap ${d.mobile.value ? 'text-h5' : 'text-h4'}`,
        }"
        :props-subtitle="{
          class: `text-wrap ${d.mobile.value ? '' : 'text-h6'}`,
        }"
        :props-item="{
          class: 'pt-4 pb-5',
        }"
      >
        <template #icon>
          <IconX
            v-if="d.smAndUp.value"
            :icon="node.icon.icon"
            class="opacity-20"
            size="2rem"
            v-bind="node.icon.props"
          />
        </template>
        <template #default>
          <AppGridTwoCellsContentLMediaAuto
            :invert="!$$.isOdd(idx)"
            :stack="!d.smAndUp.value"
            :cols-class="
              d.smAndUp.value
                ? $$.isOdd(idx)
                  ? 'grid-cols-[1fr_minmax(min(40ch,100%),1.22fr)]'
                  : 'grid-cols-[minmax(min(40ch,100%),1.22fr)_1fr]'
                : undefined
            "
          >
            <template #media>
              <AppGridStacked
                class="fill-height"
                :props-stack="{ class: 'd-flex flex-col' }"
              >
                <template #stack>
                  <VSpacer />
                  <VCardActions class="pb-4">
                    <VSpacer />
                    <AppBoxBase class="d-flex gap-6">
                      <VBtn
                        @click="node.ctrl.prev"
                        variant="tonal"
                        elevation="1"
                        icon
                        rounded="circle"
                        color="ui"
                      >
                        <IconX
                          icon="$prev"
                          size="2rem"
                          class="filter-shadow-sm text-v-on-ui"
                        />
                      </VBtn>
                      <VBtn
                        @click="node.ctrl.next"
                        variant="tonal"
                        elevation="1"
                        icon
                        rounded="circle"
                        color="ui"
                      >
                        <IconX
                          icon="$next"
                          size="2rem"
                          class="filter-shadow-sm text-v-on-ui"
                        />
                      </VBtn>
                    </AppBoxBase>
                    <VSpacer />
                  </VCardActions>
                </template>
                <VCarousel
                  :height="d.smAndUp.value ? '100%' : '50svh'"
                  :show-arrows="false"
                  hide-delimiters
                  crossfade
                  :model-value="node.ctrl.currentKey.value"
                  @update:model-value="(v) => v && node.ctrl.active(`${v}`)"
                >
                  <VCarouselItem
                    v-for="slide in node.ctrl.items"
                    :key="slide.key"
                    :src="slide.image"
                    :value="slide.key"
                    cover
                    transition="app-transition-cross-scale"
                  />
                </VCarousel>
              </AppGridStacked>
            </template>
            <template #text>
              <VCard variant="text" tile class="pb-2">
                <VTabs
                  stacked
                  grow
                  density="comfortable"
                  :model-value="node.toggleTabs.isActive.value"
                  @update:model-value="
                    (v) => (v ? node.toggleTabs.on() : node.toggleTabs.off())
                  "
                >
                  <VTab
                    :key="tab.title"
                    v-for="tab in node.tabs"
                    :value="tab.value"
                    :text="tab.title"
                  >
                    <template #prepend>
                      <IconX
                        :icon="tab.icon.icon"
                        size="1.5rem"
                        class="opacity-20"
                      />
                    </template>
                  </VTab>
                </VTabs>

                <!-- Tab Content -->
                <VTabsWindow
                  :model-value="node.toggleTabs.isActive.value"
                  crossfade
                >
                  <VTabsWindowItem
                    :key="tab.title"
                    v-for="tab in node.tabs"
                    :value="tab.value"
                  >
                    <AppBoxContainerCentered max-width="70ch">
                      <VCardText
                        v-if="tab.content.text"
                        class="indent-4 space-y-5"
                        :class="[
                          d.mdAndUp.value
                            ? 'text-body-1 ps-10 pt-10'
                            : 'text-body-2 ps-4 pt-4',
                        ]"
                        v-html="tab.content.content"
                      />
                      <VCardText v-else>
                        <template v-for="item in tab.content.content">
                          <VCard variant="text" tile class="pb-5">
                            <VCardTitle class="text-h6">{{
                              item.title
                            }}</VCardTitle>
                            <VCardText
                              :class="
                                d.mobile.value ? 'text-body-2' : 'text-body-1'
                              "
                            >
                              {{ item.subtitle }}
                            </VCardText>
                          </VCard>
                        </template>
                      </VCardText>
                    </AppBoxContainerCentered>
                  </VTabsWindowItem>
                </VTabsWindow>
                <VCardActions class="my-5">
                  <VSpacer />
                  <VBtn
                    tile
                    variant="tonal"
                    elevation="1"
                    class="px-4"
                    :class="[d.smAndUp.value ? 'scale-[111%]' : undefined]"
                    :size="d.sm.value ? undefined : 'large'"
                    :to="$localePath({ name: 'contact' })"
                  >
                    <template #prepend>
                      <IconX
                        :icon="node.cta.icon.icon"
                        size="1.5rem"
                        class="-translate-y-[2px] opacity-[.33]"
                      />
                    </template>
                    {{ node.cta.text }}</VBtn
                  >
                  <VSpacer />
                </VCardActions>
              </VCard>
            </template>
          </AppGridTwoCellsContentLMediaAuto>
        </template>
      </AppSheetSectionRoot>
    </template>
  </AppBoxPageWrap>
</template>
