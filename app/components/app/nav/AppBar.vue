<script setup lang="ts">
import { useDisplay, useTheme } from "vuetify";
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

const query = ref<string>();
const toggleNavMenu = useToggleFlag();

// @@eos
</script>

<template>
  <VAppBar
    class="component--AppNavAppBar pe-2"
    :elevation="d.smAndUp.value ? 1 : 3"
    tile
    :height="$$.config('layout.component.AppNavAppBar.height')!"
  >
    <template v-if="!d.smAndUp.value">
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

        <!-- nav:search -->
        <VForm
          id="ID-53dade55-8738-53dd-87a1-4203e9914854"
          :autocomplete="false"
          @submit.prevent
        >
          <VTextField
            v-model="query"
            type="text"
            class="px-2"
            density="comfortable"
            hide-details
            variant="solo-inverted"
            rounded="pill"
            single-line
            center-affix
            clearable
            placeholder="Traži stranu..."
          >
            <template #prepend-inner>
              <IconX icon="mdi:magnify" size="1.5rem" class="opacity-20" />
            </template>
          </VTextField>
        </VForm>

        <!-- nav:links -->
        <VList
          bg-color="transparent"
          @click="toggleNavMenu.off"
          variant="plain"
          :items="[
            {
              title: '🏠 Početna',
              value: 'QgM0LY9RCZhQ1Mx12r',
              props: {
                to: localePath({ name: 'index' }),
              },
            },
            {
              title: '📃 O nama',
              value: 'bsLH59aUgV',
              props: {
                to: localePath({ name: 'about' }),
              },
            },
            {
              title: '👷‍♂️ Usluge',
              value: '5SCvS',
              props: {
                to: localePath({ name: 'under-construction' }),
              },
            },
            {
              title: '📞 Kontakt',
              value: 'NsJXN',
              props: {
                to: localePath({ name: 'contact' }),
              },
            },
            {
              type: 'divider',
              props: {
                inset: true,
                class: 'opacity-20',
              },
            },
            {
              title: '🚧 Demo',
              value: 'XOfxLLYGIJCje4AU8bk8',
              props: {
                to: localePath({ name: 'demo' }),
              },
            },
          ]"
        />
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

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss">
#ID-53dade55-8738-53dd-87a1-4203e9914854 .v-field__field {
  margin-inline-start: 2px;
}
</style>
