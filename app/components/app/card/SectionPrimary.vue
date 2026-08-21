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

const targetTitleWrap = useTemplateRef(
  "target:d8de7c17-5e86-5237-bae3-154d93a7b993",
);
const titleSize = computed(() => ({
  width: targetTitleWrap.value?.width,
  height: targetTitleWrap.value?.height,
}));

// @@eos
</script>

<template>
  <VCard
    class="component--AppCardSectionPrimary"
    tile
    :border="`t-md ${isDark ? 'primary-darken-1' : 'ui-darken-1'}`"
  >
    <AppProvidesElementSize ref="target:d8de7c17-5e86-5237-bae3-154d93a7b993">
      <VCardTitle
        class="text-shadow-sm text-center bg-ui bg-[url('/images/stock/004.png')] bg-blend-multiply bg-cover position-relative"
        v-bind="props.propsTitle"
      >
        <slot name="title" :titleSize />
      </VCardTitle>
    </AppProvidesElementSize>

    <slot :titleSize />

    <VCardActions v-if="$slots.actions" v-bind="props.propsActions">
      <slot name="actions" :titleSize />
    </VCardActions>
  </VCard>
</template>
