<script setup lang="ts">
import { useDisplay } from "vuetify";

const d = useDisplay();

// @@eos
</script>

<template>
  <VBtn
    tile
    :size="d.mobile.value ? 'large' : 'x-large'"
    color="ui"
    variant="elevated"
    :to="$localePath({ name: 'contact' })"
    class="component--AppBtnCtaContact text-shadow-sm !text-v-on-ui px-4"
    :class="[!d.mobile.value ? 'scale-[111%]' : undefined]"
  >
    <template #prepend>
      <slot name="prepend">
        <strong class="text-[122%]">🤝</strong>
      </slot>
    </template>
    <slot>
      <span> Započnimo saradnju </span>
    </slot>
  </VBtn>
</template>
