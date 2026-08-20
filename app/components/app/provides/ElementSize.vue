<script setup lang="ts">
import type { TOrNoValue, TVueInstance } from "~/types";
import type { default as TAppBoxBase } from "~/components/app/box/Base.vue";

const target = useTemplateRef<TOrNoValue<InstanceType<typeof TAppBoxBase>>>(
  "target-712765a8-b19c-5d43-aaa5-6f7292ec13a0",
);

const el_ = useCurrentElement((<unknown>target) as TVueInstance);
const s = useElementSize(el_);

const exposed = { ...s };

defineExpose(exposed);

// @@eos
</script>

<template>
  <AppBoxBase
    class="component--AppProvidesElementSize"
    ref="target-712765a8-b19c-5d43-aaa5-6f7292ec13a0"
  >
    <slot />
  </AppBoxBase>
</template>
