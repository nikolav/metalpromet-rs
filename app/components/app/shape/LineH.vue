<script setup lang="ts">
defineOptions({
  // name: "COMPONENT_NAME",
  inheritAttrs: false,
});

const props = defineProps<{
  width: number;
  height: number;

  propsCanvas?: any;
}>();

// @@eos
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    :viewBox="`0 0 ${props.width} ${props.height}`"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="props.propsCanvas"
  >
    <line
      :x1="0"
      :y1="props.height / 2"
      :x2="props.width"
      :y2="props.height / 2"
      stroke="currentColor"
      stroke-linecap="butt"
      v-bind="$attrs"
    />
  </svg>
</template>
