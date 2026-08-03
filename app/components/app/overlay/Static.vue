<script setup lang="ts">
import { mergeProps } from "vue";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });
const props = defineProps<{
  x?: any;
  y?: any;
  contentProps?: any;
}>();

const { $$ } = useNuxtApp();

const X = computed(() => ($$.isNumeric(props.x) ? `${props.x}px` : props.x));
const Y = computed(() => ($$.isNumeric(props.y) ? `${props.y}px` : props.y));

// @@eos
</script>

<template>
  <VOverlay
    class="component--AppOverlayStatic translate-x-0 translate-y-0"
    location-strategy="static"
    absolute
    attach="body"
    :content-props="
      mergeProps(
        {
          style: `top: ${Y}; left: ${X};`,
        },
        props.contentProps,
      )
    "
    :transition="$$.config('ui.DEFAULT_TRANSITION')"
  >
    <slot />
  </VOverlay>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
