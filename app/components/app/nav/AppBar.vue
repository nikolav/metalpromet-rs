<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const d = useDisplay();
const { $$ } = useNuxtApp();

const toggleNavMenu = useToggleFlag();

// @@eos
</script>

<template>
  <VAppBar
    class="component--AppNavAppBar pe-2"
    :elevation="d.smAndUp.value ? 1 : 3"
    tile
    :height="$$.config('layout.component.AppNavAppBar.height')!"
  >
    <template v-if="!d.smAndUp.value">
      <VAppBarNavIcon variant="plain" @click="toggleNavMenu" />
      <AppOverlayScreen v-model="toggleNavMenu.isActive.value">
        <div class="d-flex justify-center pa-2">
          <AppNavLine @click="toggleNavMenu.off" />
        </div>
      </AppOverlayScreen>
    </template>
    <template v-else>
      <VSpacer />
      <AppNavLine />
    </template>
  </VAppBar>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
