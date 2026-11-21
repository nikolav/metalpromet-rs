<script setup lang="ts">
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

definePageMeta({
  layout: "default",
});

const toggle = useToggleFlag();
// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <VBtn @click="toggle"> ok</VBtn>
    <AppBoxFlip class="w-[320px] h-[240px]" :flip="toggle.isActive.value">
      <template #front>
        <VCard class="fill-height">
          <VCardTitle>oprem</VCardTitle>
        </VCard>
      </template>
      <template #back>
        <VCard class="fill-height">
          <VCardTitle>dobar</VCardTitle>
        </VCard>
      </template>
    </AppBoxFlip>
    <AppDemoIconsVuetifyBuiltins v-if="false" />
  </AppBoxPageWrap>
</template>
