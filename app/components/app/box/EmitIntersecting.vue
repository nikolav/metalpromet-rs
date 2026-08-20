<script setup lang="ts">
import type { TOrNoValue, TVueInstance } from "~/types";
import type { default as AppBoxBase } from "~/components/app/box/Base.vue";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const emit = defineEmits<{
  intersecting: [];
}>();

const target =
  useTemplateRef<TOrNoValue<InstanceType<typeof AppBoxBase>>>(
    "ref_9d9M4QKQfdrAzX",
  );
const node = useCurrentElement((<unknown>target) as TVueInstance);
const ctrl = useIntersectionObserver(node, ([entry], observerElement) => {
  if (!entry?.isIntersecting) return;
  emit("intersecting");
});

tryOnScopeDispose(() => {
  ctrl.stop();
});

// @@eos
</script>

<template>
  <AppBoxBase ref="ref_9d9M4QKQfdrAzX" class="component--AppBoxOnIntersectEmit">
    <slot />
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
