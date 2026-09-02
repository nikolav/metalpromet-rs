<script setup lang="ts">
// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const lroute = useLocaleRoute();
const route = useRoute();
// @@eos
</script>

<template>
  <AppBoxFlex class="component--AppNavLine items-center *:!min-w-[88px]">
    <VBtn
      :key="node.route.name"
      v-for="node in [
        {
          title: 'Početna',
          route: { name: 'index' },
          icon: { icon: 'mdi:home' },
        },
        {
          title: 'Projekti',
          route: { name: 'projects' },
          icon: { icon: 'mdi:eiffel-tower' },
        },
        {
          title: 'Delatnosti',
          route: { name: 'services' },
          icon: { icon: 'mdi:toolbox' },
        },
        {
          title: 'O nama',
          route: { name: 'about' },
          icon: {
            icon: 'material-symbols:id-card-outline',
          },
        },
        {
          title: 'Kontakt',
          route: { name: 'contact' },
          icon: {
            icon: 'mdi:forum',
          },
        },
      ]"
      :to="$localePath(node.route)"
      :variant="lroute(node.route).name != route.name ? 'plain' : 'text'"
      tile
      stacked
    >
      <IconX size="1.33rem" :icon="node.icon.icon" />
      <p v-html="node.title" class="text-nowrap text-none text-subtitle-2" />
    </VBtn>
  </AppBoxFlex>
</template>
