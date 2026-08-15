<script setup lang="ts">
import { COLOR_PRIMARY } from "~/assets/themes/colors";
import { TOKEN_VAPP } from "~/keys";

const { analyticsEnabled, gtmId: GTMID } = useRuntimeConfig().public;

const { finalizePendingLocaleChange } = useI18n();

const refVApp = useTemplateRef("ref-cbb3f345-9f59-53aa-89ef-9a31c2c7e600");

provide(TOKEN_VAPP, refVApp);

// @@eos
</script>

<template>
  <VApp
    class="*app-container-reset app--root"
    ref="ref-cbb3f345-9f59-53aa-89ef-9a31c2c7e600"
  >
    <template v-if="analyticsEnabled">
      <noscript
        ><iframe
          :src="`https://www.googletagmanager.com/ns.html?id=${GTMID}`"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
    </template>

    <!-- setup misc. -->
    <AppConfigurationBase />

    <!-- app emitter -->
    <AppConfigurationEmit />

    <!-- seo:core -->
    <AppConfigurationSeoBase />

    <!-- theme config -->
    <AppConfigurationTheme />

    <!-- #https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator -->
    <NuxtLoadingIndicator :color="COLOR_PRIMARY" />

    <!-- redirect on auth-change -->
    <AppConfigurationOnAuthChange />

    <!-- routes -->
    <NuxtLayout>
      <NuxtPage :transition="{ onBeforeEnter: finalizePendingLocaleChange }" />
    </NuxtLayout>
  </VApp>
</template>

<!-- scoped component styles, default -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing; $style object available in template -->
<style module></style>
<!-- global styles, rare, prefer styles.scss -->
<style lang="scss"></style>
