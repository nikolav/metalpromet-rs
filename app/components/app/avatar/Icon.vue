<script setup lang="ts">
const props = defineProps<{
  icon?: {
    icon?: any;
    props?: any;
  };
}>();
// @@eos
</script>

<template>
  <VAvatar class="component--AppAvatarIcon" variant="tonal" size="4rem">
    <IconX
      :icon="props.icon?.icon"
      class="opacity-[.33]"
      size="2rem"
      v-bind="props.icon?.props"
    />
  </VAvatar>
</template>
