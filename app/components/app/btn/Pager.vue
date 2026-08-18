<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    prev?: boolean;
    propsIcon?: any;
  }>(),
  {
    prev: false,
  },
);

const type = computed(() => (false !== props.prev ? "prev" : "next"));

// @@eos
</script>

<template>
  <VBtn
    class="component--AppBtnPager pointer-events-auto"
    icon
    variant="tonal"
    rounded="circle"
  >
    <slot name="icon">
      <IconX :icon="`$${type}`" v-bind="props.propsIcon" />
    </slot>
  </VBtn>
</template>
