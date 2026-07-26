<script setup lang="ts">
const props = defineProps<{
  propsContent?: any;
  propsStack?: any;
}>();

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppGridStacked grid">
    <AppBoxBase
      class="xd3b10cc3-9143-5dee-8ce3-133a2fa566df"
      v-bind="props.propsContent"
    >
      <slot />
    </AppBoxBase>
    <AppBoxBase
      class="x2c4c81b4-4eb7-5355-9282-c06a6fe49c34"
      v-bind="props.propsStack"
    >
      <slot name="stack" />
    </AppBoxBase>
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped>
.component--AppGridStacked {
  grid-template-areas: "stack";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.xd3b10cc3-9143-5dee-8ce3-133a2fa566df,
.x2c4c81b4-4eb7-5355-9282-c06a6fe49c34 {
  grid-area: stack;
}
</style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
