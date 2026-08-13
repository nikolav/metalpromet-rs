<script setup lang="ts">
import { useTheme } from "vuetify";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
const props = defineProps<{
  propsTitle?: any;
  propsActions?: any;
}>();

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

// @@eos
</script>

<template>
  <VCard
    class="component--AppCardSectionPrimary"
    tile
    :border="`t-md ${isDark ? 'primary-darken-1' : 'ui-darken-1'}`"
  >
    <VCardTitle
      class="text-shadow-sm text-center bg-ui bg-[url('/images/stock/004.png')] bg-blend-multiply bg-cover position-relative"
      v-bind="props.propsTitle"
    >
      <slot name="title" />
    </VCardTitle>

    <slot />

    <VCardActions v-if="$slots.actions" v-bind="props.propsActions">
      <slot name="actions" />
    </VCardActions>
  </VCard>
</template>
