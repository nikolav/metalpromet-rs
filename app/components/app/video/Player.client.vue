<script setup lang="ts">
import { mergeProps } from "vue";
import { take } from "rxjs/operators";

import PlayerHtml5 from "./PlayerHtml5.vue";
import PlayerYoutube from "./PlayerYoutube.vue";
import PlayerVimeo from "./PlayerVimeo.vue";

import type { TOrNoValue, TPlayerInstance, TPlayerOptions } from "~/types";
import { useOnceMounted } from "~/composables/utils/use-once-mounted-on";
import { usePlayer } from "~/composables/media/use-player";

// propsFrame: { title?:string; poster?:string; }
const props = withDefaults(
  defineProps<{
    id?: string;
    provider?: "html5" | "youtube" | "vimeo";
    sources: { src: string; type?: string; size?: number }[];
    propsFrame?: any;
  }>(),
  {
    provider: "html5",
  },
);

const { $$ } = useNuxtApp();

const DEFAULTS_PLYR_OPTIONS: TPlayerOptions = {
  // ux + perf sanity
  autoplay: false,
  autopause: true,
  clickToPlay: true,
  resetOnEnd: false,

  // clean minimal ui
  hideControls: true,
  tooltips: {
    controls: false,
    seek: false,
  },

  // keyboard scoped, no global shortcuts
  keyboard: {
    focused: true,
    global: false,
  },

  // fullscreen behavior
  fullscreen: {
    enabled: true,
    fallback: true,
    iosNative: false,
  },

  // privacy/security defaults
  disableContextMenu: true,
  storage: {
    enabled: false,
    key: "plyr",
  },

  // embed providers
  youtube: {
    noCookie: true,
    rel: 0,
    modestbranding: 1,
    iv_load_policy: 3,
  },
  vimeo: {
    byline: false,
    portrait: false,
    title: false,
    speed: true,
    transparent: false,
  },
};

const ID = computed(() => props.id ?? `PLAYER-${$$.uuid()}`);

const COMP = {
  html5: PlayerHtml5,
  youtube: PlayerYoutube,
  vimeo: PlayerVimeo,
};

const exposed = {
  player: shallowRef<TOrNoValue<TPlayerInstance>>(),
  id: ID,
};

useOnceMounted([], async () => {
  usePlayer()
    .pipe(take(1))
    .subscribe(({ Plyr }) => {
      exposed.player.value = new Plyr(`#${ID.value}`, DEFAULTS_PLYR_OPTIONS);
    });
});

defineExpose(exposed);

// @@eos
</script>

<template>
  <component
    :is="COMP[props.provider]"
    :sources="props.sources"
    :props-frame="mergeProps(props.propsFrame, { id: ID })"
  />
</template>
