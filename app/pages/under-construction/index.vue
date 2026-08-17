<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const CELL_W = 222;

const ref0 = useTemplateRef("ref0");

// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <VBtn @click="ref0?.scroll.head">scroll.head</VBtn>
    <VBtn @click="ref0?.scroll.tail">scroll.tail</VBtn>
    <VBtn @click="ref0?.scroll.rewind">scroll.rewind</VBtn>
    <VBtn @click="ref0?.scroll.forward">scroll.forward</VBtn>
    <AppProvidesOnResizeKey v-slot="context">
      <AppGridAutoCellsHorizontal
        ref="ref0"
        :key="context.provides.key"
        :cell-width="CELL_W"
        :scroll="CELL_W * 2.33"
        :cell-min-height="99"
        :style="{ height: `calc(100vh - 192px - 1rem)` }"
        class="gap-1 pa-1"
      >
        <VCard link v-for="i in 122" :key="i">{{ i }}</VCard>
      </AppGridAutoCellsHorizontal>
    </AppProvidesOnResizeKey>
  </AppBoxPageWrap>
</template>
