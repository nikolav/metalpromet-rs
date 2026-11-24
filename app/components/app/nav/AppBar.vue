<script setup lang="ts">
import { useDisplay } from "vuetify";

import { isPresent } from "~/utils/is-present";
import { useToggleFlag } from "~/composables/utils/use-toggle-flag";

const { $$ } = useNuxtApp();
const d = useDisplay();
const localePath = useLocalePath();

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
    icon: "material-symbols:id-card-outline",
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
    :elevation="d.mobile.value ? 3 : 1"
    tile
    :height="$$.config('layout.component.AppNavAppBar.height')!"
  >
    <template v-if="d.mobile.value">
      <VAppBarNavIcon variant="plain" @click="toggleNavMenu" />
      <AppOverlayScreen
        v-model="toggleNavMenu.isActive.value"
        transition="app-transition-slide-in-out-x-full"
      >
        <!-- header -->
        <VListItem
          class="ps-2 pe-0 mx-0 [font-variant-caps:small-caps] !bg-v-surface-variant"
          prepend-gap=".5rem"
        >
          <template #append>
            <AppBtnClose @click="toggleNavMenu.off" />
          </template>
          <template #prepend>
            <IconX
              icon="local:logo-mp-title"
              size="2rem"
              class="text-[rgba(var(--v-theme-ui),1)] mx-1"
            />
          </template>
        </VListItem>

        <!-- nav:links -->
        <VList
          variant="flat"
          tile
          color="primary"
          prepend-gap="1.22rem"
          class="space-y-2 px-2"
          @click="toggleNavMenu.off"
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
          :to="$localePath({ name: 'index' })"
          class="no-underline text-inherit"
          title="Metal-Promet Mladenovac"
        >
          <IconX
            icon="local:logo-mp-title"
            size="2rem"
            class="text-[rgba(var(--v-theme-ui),1)]"
          />
        </NuxtLinkLocale>
      </VAppBarTitle>
      <AppNavLine />
    </template>
  </VAppBar>
</template>
