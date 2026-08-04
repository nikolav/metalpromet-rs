<script setup lang="ts">
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const props = withDefaults(
  defineProps<{
    transition?: any;
    propsTransition?: any;
    propsWrap?: any;
  }>(),
  {
    transition: "app-transition-slide-y-r",
  },
);

const { $$ } = useNuxtApp();
const toggleShow = useToggleFlag();
const onceToggleShowOn = $$.once(toggleShow.on);
// @@eos
</script>

<template>
  <AppBoxEmitIntersecting
    @intersecting="onceToggleShowOn"
    class="component--AppBoxTransitionIntersectingViewport"
  >
    <Transition
      :name="props.transition"
      :appear="false"
      v-bind="props.propsTransition"
    >
      <AppBoxBase v-if="toggleShow.isActive.value" v-bind="props.propsWrap">
        <slot />
      </AppBoxBase>
    </Transition>
  </AppBoxEmitIntersecting>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
