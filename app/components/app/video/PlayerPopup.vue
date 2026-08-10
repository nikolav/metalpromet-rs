<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  provider?: "html5" | "youtube" | "vimeo";
  sources: { src: string; type?: string; size?: number }[];

  fillHeight?: boolean;

  propsFrame?: any;
  propsDialog?: any;
  propsWrap?: any;
  propsClose?: any;
  propsIconClose?: any;
}>();

const model = defineModel<boolean>();
const closePlayer = () => {
  model.value = false;
};

const { $$ } = useNuxtApp();

// @@eos
</script>

<template>
  <VDialog
    v-model="model"
    :transition="$$.config('ui.DEFAULT_TRANSITION')"
    :content-props="{ class: props.fillHeight ? 'h-full' : undefined }"
    v-bind="props.propsDialog"
  >
    <VCard class="app-container-reset" v-bind="props.propsWrap">
      <AppVideoPlayer
        :provider="props.provider"
        :sources="props.sources"
        :props-frame="props.propsFrame"
        :class="{ 'plyr-x-video-h-full': props.fillHeight }"
        v-bind="$attrs"
      />
    </VCard>
    <slot name="close" :closePlayer>
      <Teleport to="body">
        <VBtn
          @click="closePlayer"
          icon
          variant="elevated"
          rounded="circle"
          class="!fixed z-[9999] right-1 top-1"
          color="error-darken-1"
          v-bind="props.propsClose"
        >
          <IconX icon="$close" v-bind="props.propsIconClose" />
        </VBtn>
      </Teleport>
    </slot>
  </VDialog>
</template>
