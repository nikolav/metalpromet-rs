<script setup lang="ts">
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const togglePopup = useToggleFlag();

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--demo">
    <h2 class="text-center">strana:demo 🚧</h2>
    <VBtn @click="togglePopup">ok</VBtn>
    <AppOverlayStatic
      :x="122"
      :y="22"
      v-model="togglePopup.isActive.value"
      :scrim="false"
    >
      <VCard
        :width="320"
        :height="256"
        variant="elevated"
        color="primary"
        @click="togglePopup.off"
        :link="false"
      >
        lorem
      </VCard>
    </AppOverlayStatic>
  </AppBoxPageWrap>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
