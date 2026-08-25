<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";

const props = defineProps<{
  title?: any;
  subTitle?: any;
  icon?: { show?: any; icon?: any; props?: any };

  propsTitle?: any;
  propsActions?: any;
}>();

const d = useDisplay();
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

const target = useTemplateRef("target:d8de7c17-5e86-5237-bae3-154d93a7b993");
const titleSize = computed(() => ({
  width: target.value?.width,
  height: target.value?.height,
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
        <slot v-if="false !== props.icon?.show" name="icon" :titleSize>
          <IconX
            v-if="!d.mobile.value"
            :icon="props.icon?.icon"
            class="position-absolute start-4 z-[1] top-[50%] -translate-y-[50%] opacity-20"
            size="2.22rem"
            v-bind="props.icon?.props"
          />
        </slot>
        <slot name="title" :titleSize>
          <AppCardSectionPrimaryTitle v-if="props.title">
            {{ props.title }}
          </AppCardSectionPrimaryTitle>
          <p v-if="props.subTitle" class="opacity-75 text-h6">
            {{ props.subTitle }}
          </p>
        </slot>
      </VCardTitle>
    </AppProvidesElementSize>

    <slot :titleSize />

    <VCardActions v-if="$slots.actions" v-bind="props.propsActions">
      <slot name="actions" :titleSize />
    </VCardActions>
  </VCard>
</template>
