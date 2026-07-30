<script setup lang="ts">
defineOptions({
  // name: "COMPONENT_NAME",
  inheritAttrs: false,
});

// @@eos
</script>

<template>
  <VThemeProvider theme="dark">
    <VFooter tile elevation="1" v-bind="$attrs">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        placeat esse nostrum hic. At, sunt laboriosam voluptas natus numquam,
        cum quidem quibusdam magnam earum commodi ipsum, repellendus vel
        voluptates reiciendis!
      </p>
    </VFooter>
  </VThemeProvider>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
