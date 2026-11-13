<script setup lang="ts">
import { useTheme } from "vuetify";

const props = withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;

    root?: boolean;

    propsIcon?: any;
    propsItem?: any;
    propsTitle?: any;
    propsSubtitle?: any;
  }>(),
  {
    root: true,
  },
);

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

const refItem = useTemplateRef("target:e9574c49-c994-5652-af1f-7fdf67c5df86");
const titleSize = computed(() => ({
  width: refItem.value?.width,
  height: refItem.value?.height,
}));

// @@eos
</script>

<template>
  <VSheet
    class="component--AppSheetSectionRoot"
    position="relative"
    :class="{
      'app-container--root': props.root,
    }"
    :border="`t-md ${isDark ? 'primary-darken-1' : 'ui-darken-1'}`"
  >
    <!-- item -->
    <AppProvidesElementSize ref="target:e9574c49-c994-5652-af1f-7fdf67c5df86">
      <VSheet
        class="text-shadow-sm bg-ui !bg-[url('/images/stock/004.png')] bg-blend-multiply !bg-cover"
        position="relative"
        :class="{
          'app-container--root': props.root,
        }"
        v-bind="props.propsItem"
      >
        <AppBoxBase
          v-if="$slots.icon"
          class="position-absolute z-[1] left-4 top-[50%] -translate-y-[50%]"
          v-bind="props.propsIcon"
        >
          <slot name="icon" />
        </AppBoxBase>
        <VCardTitle class="text-center pb-0" v-bind="props.propsTitle">{{
          props.title
        }}</VCardTitle>
        <VCardSubtitle
          v-if="props.subtitle"
          class="text-center"
          v-bind="props.propsSubtitle"
          >{{ props.subtitle }}</VCardSubtitle
        >
      </VSheet>
    </AppProvidesElementSize>

    <!-- content -->
    <slot :titleSize />
  </VSheet>
</template>

<style lang="scss" scoped>
.app-container--root {
  display: flow-root;
}
</style>
