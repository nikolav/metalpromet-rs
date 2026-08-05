<script setup lang="ts">
import { onDebug } from "~/utils/on-debug";
import { useIO } from "~/composables/io/use-io";
import { useOnceMounted } from "~/composables/utils/use-once-mounted-on";

import PRELOAD_IMAGES from "~/assets/preload-images.json";
import HERO_SLIDES from "~/assets/hero-slides.json";

const { $$ } = useNuxtApp();

// @broadcast:health.ping log
useOnceMounted([], () => {
  useIO().client((io, cleanup) => {
    const ch = io.channel("health").listenToAll((...args: unknown[]) => {
      onDebug({ "broadcast:health.*": { args } });
    });
    //
    cleanup(() => {
      ch.stopListeningToAll();
    });
  });
});

// preloads
useHead({
  link: $$.uniq([
    // defaults
    "/logo.jpg",

    // important
    ...PRELOAD_IMAGES,

    // hero section images
    ...HERO_SLIDES.reduce(
      (res, node) => {
        if (true === node.show) {
          res.push(node.src);
        }
        return res;
      },
      <string[]>[],
    ),
  ]).map((src) => ({
    // fetchpriority: "high",
    href: src,
    rel: "preload",
    as: "image",
  })),
});

// uid:device init
const uidLocal = useLocalStorage($$.config("keys.UID_LOCAL")!, () =>
  $$.nanoid(),
);
onMounted(() => {
  onDebug({ "keys:UID_LOCAL": uidLocal.value });
});

// @@eos
</script>

<template>
  <slot />
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
