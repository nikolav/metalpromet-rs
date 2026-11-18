<script setup lang="ts">
import type { TOrNoValue } from "~/types";
import { default as TAppProvidesElementSize } from "~/components/app/provides/ElementSize.vue";

const props = defineProps<{
  propsContent?: any;
}>();

const { $$ } = useNuxtApp();

const stack = computed(() =>
  $$.parseBoolean($$.get(useAttrs(), "stack", false)),
);

const refContent = useTemplateRef<
  TOrNoValue<InstanceType<typeof TAppProvidesElementSize>>
>("target-3f852be4-96a1-588e-a239-08b3732914c4");

const hContent = computed(() =>
  $$.isNumeric(refContent.value?.height)
    ? `${refContent.value?.height}px`
    : refContent.value?.height,
);

// @@eos
</script>

<template>
  <AppGridTwoCells
    :props-media="{
      style: `${stack ? undefined : `height: ${hContent};`}`,
    }"
  >
    <template #text>
      <AppProvidesElementSize
        ref="target-3f852be4-96a1-588e-a239-08b3732914c4"
        v-bind="props.propsContent"
      >
        <slot name="text" />
      </AppProvidesElementSize>
    </template>
    <template #media>
      <slot name="media" />
    </template>
  </AppGridTwoCells>
</template>
