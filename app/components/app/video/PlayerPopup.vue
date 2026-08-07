<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  tall?: boolean;
  provider?: "html5" | "youtube" | "vimeo";
  sources: { src: string; type?: string; size?: number }[];
  propsFrame?: any;
  propsDialog?: any;
  propsWrap?: any;
  propsClose?: any;
}>();

const model = defineModel<boolean>();

const { $$ } = useNuxtApp();

// @@eos
</script>

<template>
  <VDialog
    v-model="model"
    :transition="$$.config('ui.DEFAULT_TRANSITION')"
    :content-props="{ class: props.tall ? 'h-full' : undefined }"
    v-bind="props.propsDialog"
  >
    <VCard :class="{ 'h-full': props.tall }" v-bind="props.propsWrap">
      <AppVideoPlayer
        :provider="props.provider"
        :sources="props.sources"
        :props-frame="props.propsFrame"
        :class="{ '!h-full': props.tall }"
        v-bind="$attrs"
      />
    </VCard>
    <Teleport to="body">
      <VBtn
        @click="model = false"
        icon
        variant="elevated"
        rounded="circle"
        class="!fixed z-[9999] right-1 top-1"
        color="error-darken-1"
        v-bind="props.propsClose"
      >
        <IconX icon="$close" />
      </VBtn>
    </Teleport>
  </VDialog>
</template>
