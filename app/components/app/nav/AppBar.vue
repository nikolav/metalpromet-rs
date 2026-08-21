<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";

import { isPresent } from "~/utils/is-present";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

// defineOptions({
//   name: "COMPONENT_NAME",
//   inheritAttrs: false,
// });

const d = useDisplay();
const { $$ } = useNuxtApp();
const localePath = useLocalePath();

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

const toggleNavMenu = useToggleFlag();

const navItems = <any[]>[
  {
    title: "Početna",
    icon: "mdi:home",
    props: {
      to: localePath({ name: "index" }),
    },
  },
  {
    title: "Projekti",
    icon: "mdi:eiffel-tower",
    props: {
      to: localePath({ name: "projects" }),
    },
  },
  {
    title: "Delatnosti",
    icon: "mdi:toolbox",
    props: {
      to: localePath({ name: "services" }),
    },
  },
  {
    title: "O nama",
    icon: "$info",
    props: {
      to: localePath({ name: "about" }),
    },
  },
  {
    title: "Kontakt",
    icon: "mdi:forum",
    props: {
      to: localePath({ name: "contact" }),
    },
  },
];
const mergeItemProps = $$.deepmerge();

// @@eos
</script>

<template>
  <VAppBar
    class="component--AppNavAppBar pe-2"
    :elevation="d.smAndUp.value ? 1 : 3"
    tile
    :height="$$.config('layout.component.AppNavAppBar.height')!"
  >
    <template v-if="d.mobile.value">
      <VAppBarNavIcon variant="plain" @click="toggleNavMenu" />
      <AppOverlayScreen
        v-model="toggleNavMenu.isActive.value"
        transition="app-transition-slide-in-out-x-full"
        :props-sheet="{
          class: 'space-y-4',
        }"
      >
        <!-- nav:header -->
        <VListItem
          class="ps-2 pe-0 mx-0 [font-variant-caps:small-caps] !bg-[url('/images/stock/019.png')] !bg-no-repeat *!bg-cover !bg-[79%_0%] bg-[size:133%] !bg-blend-color-dodge"
          :class="{
            '!bg-[rgba(var(--v-theme-ui),.122)]': !isDark,
            '!bg-[rgba(var(--v-theme-ui),.33)]': isDark,
          }"
          prepend-gap=".5rem"
          elevation="1"
        >
          <template #append>
            <AppBtnClose @click="toggleNavMenu.off" />
          </template>
          <template #prepend>
            <IconX
              icon="local:logo-mp"
              size="2rem"
              class="text-[rgba(var(--v-theme-ui),1)] mx-1"
            />
          </template>
          <VListItemTitle>Metal-Promet</VListItemTitle>
          <VListItemSubtitle class="opacity-50">Mladenovac</VListItemSubtitle>
        </VListItem>

        <!-- nav:links -->
        <VList
          tile
          color="accent"
          bg-color="transparent"
          @click="toggleNavMenu.off"
          variant="text"
          prepend-gap="1rem"
          class="space-y-1 mx-1"
          :items="
            navItems.map((node) =>
              isPresent(node.type)
                ? node
                : mergeItemProps(node, {
                    props: {
                      rounded: 'xl',
                    },
                  }),
            )
          "
        >
          <template #prepend="{ item }">
            <template v-if="!item.type">
              <IconX
                v-if="item.icon"
                :icon="item.icon"
                size="1.5rem"
                class="opacity-20"
              />
              <strong class="opacity-20" v-else>🚧</strong>
            </template>
          </template>
        </VList>
      </AppOverlayScreen>
    </template>
    <template v-else>
      <VAppBarTitle>
        <NuxtLinkLocale
          :to="localePath({ name: 'index' })"
          class="no-underline text-inherit"
          title="Metal-Promet Mladenovac"
        >
          <IconX
            icon="local:logo-mp"
            size="2rem"
            class="text-[rgba(var(--v-theme-ui),1)]"
          />
        </NuxtLinkLocale>
      </VAppBarTitle>
      <AppNavLine />
    </template>
  </VAppBar>
</template>

<!-- global styles -->
<style lang="scss">
#ID-53dade55-8738-53dd-87a1-4203e9914854 .v-field__field {
  margin-inline-start: 2px;
}
</style>
