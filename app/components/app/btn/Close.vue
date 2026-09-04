<script setup lang="ts">
const props = defineProps<{
  propsIcon?: any;
}>();

// @@eos
</script>

<template>
  <VBtn icon rounded="circle" variant="plain" class="component--AppBtnClose">
    <slot name="icon">
      <IconX icon="$close" v-bind="props.propsIcon" />
    </slot>
  </VBtn>
</template>
