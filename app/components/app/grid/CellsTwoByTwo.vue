<script setup lang="ts">
import { mergeProps } from "vue";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const props = withDefaults(
  defineProps<{
    stack?: boolean;

    propsCells?: any;
    propsTopLeft?: any;
    propsTopRight?: any;
    propsBottomLeft?: any;
    propsBottomRight?: any;
  }>(),
  {
    stack: false,
  },
);

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppGridCellsTwoByTwo"
    :class="{
      'grid grid-cols-2 grid-rows-2 gap-0 grid-areas-4cells': !props.stack,
    }"
  >
    <AppBoxBase
      :class="{ 'grid-area--top-left': !props.stack }"
      v-bind="mergeProps({}, props.propsCells, props.propsTopLeft)"
    >
      <slot name="top-left" />
    </AppBoxBase>
    <AppBoxBase
      :class="{ 'grid-area--top-right': !props.stack }"
      v-bind="mergeProps({}, props.propsCells, props.propsTopRight)"
    >
      <slot name="top-right" />
    </AppBoxBase>
    <AppBoxBase
      :class="{ 'grid-area--bottom-left': !props.stack }"
      v-bind="mergeProps({}, props.propsCells, props.propsBottomLeft)"
    >
      <slot name="bottom-left" />
    </AppBoxBase>
    <AppBoxBase
      :class="{ 'grid-area--bottom-right': !props.stack }"
      v-bind="mergeProps({}, props.propsCells, props.propsBottomRight)"
    >
      <slot name="bottom-right" />
    </AppBoxBase>
  </AppBoxBase>
</template>

<style lang="scss" scoped>
.grid-areas-4cells {
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";
}
.grid-area--top-left {
  grid-area: top-left;
}
.grid-area--top-right {
  grid-area: top-right;
}
.grid-area--bottom-left {
  grid-area: bottom-left;
}
.grid-area--bottom-right {
  grid-area: bottom-right;
}
</style>
