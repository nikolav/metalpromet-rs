<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const tagret = useTemplateRef("targetAppBoxRoot");
watchEffect(() => {
  console.log([
    tagret.value?.size.width.value,
    tagret.value?.size.height.value,
  ]);
});
// @@eos
</script>

<template>
  <AppBoxPageWrap class="page--under-construction">
    <AppBoxRoot ref="targetAppBoxRoot" width="320" height="240" elevation="1" rounded>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ducimus vitae vero.
      </p>
    </AppBoxRoot>
  </AppBoxPageWrap>
</template>
