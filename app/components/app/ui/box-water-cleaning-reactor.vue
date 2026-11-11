<script setup lang="ts">
import { useDisplay } from "vuetify";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const d = useDisplay();

// @@eos
</script>

<template>
  <VCard
    variant="flat"
    tile
    color="rgba(var(--v-theme-ui),.5)"
    class="component--AppUiBoxWaterCleaningReactor ps-2 pt-2 pb-3 backdrop-blur-sm !text-[rgb(var(--v-theme-on-ui))]"
  >
    <AppBoxContainerCentered fluid :max-width="undefined">
      <VRow no-gutters :class="[d.mobile.value ? 'gap-y-5' : undefined]">
        <VCol
          cols="6"
          sm="3"
          v-for="item in [
            {
              icon: 'mdi:tag',
              name: 'Sektor',
              content: 'Industrija',
            },
            {
              icon: 'mdi:map-marker',
              name: 'Lokacija',
              content: 'Kruševac',
            },
            {
              icon: '$calendar',
              name: 'Godina',
              content: '2026',
            },
            {
              icon: 'mdi:timer-sand-complete',
              name: 'Trajanje',
              content: '3 meseca',
            },
          ]"
        >
          <VCard tile variant="text">
            <VCardItem class="text-shadow-sm">
              <template #prepend>
                <IconX
                  :icon="item.icon"
                  size="1.22rem"
                  class="!opacity-[.33]"
                />
              </template>
              <span class="font-italic opacity-[.66]">{{ item.name }}</span>
            </VCardItem>
            <VCardTitle> {{ item.content }} </VCardTitle>
          </VCard>
        </VCol>
      </VRow>
    </AppBoxContainerCentered>
  </VCard>
</template>
