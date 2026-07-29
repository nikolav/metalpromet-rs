<script setup lang="ts">
import { mergeProps } from "vue";
import { useTheme } from "vuetify";

import { isPresent } from "~/utils/is-present";
import { onDebug } from "~/utils/on-debug";

defineOptions({
  inheritAttrs: false,
});

const MP_LOCATION = { lat: 44.4215007, lng: 20.6993889 };

const props = withDefaults(
  defineProps<{
    mapOptions?: any;
    markerLocation?: any;
    markerTitle?: string;
  }>(),
  {
    markerLocation: { lat: 44.4215007, lng: 20.6993889 },
    markerTitle: "Metal-Promet Mladenovac",
  },
);

const theme = useTheme();
const l = useI18n();
const { $$ } = useNuxtApp();

const isDark = computed(() => theme.global.current.value.dark);
const language = computed(
  () => $$.find(l.locales.value, { code: l.locale.value })?.language,
);

// @ready add marker
const onMapReady = ({ map, mapsApi }: any) => {
  if ([map, mapsApi].every(isPresent)) {
    try {
      const { Marker } = toValue(mapsApi);
      const map_ = toValue(map);
      onDebug({
        "GoogleMaps:Map": {
          marker: new Marker({
            position: props.markerLocation,
            map: map_,
            title: props.markerTitle,
          }),
          map: map_,
        },
      });
    } catch (error) {
      onDebug({ "maps:error": error });
    }
  }
};

// @@eos
</script>

<template>
  <AppBoxBase class="component--AppMapsLocationSingle">
    <ScriptGoogleMaps
      :language
      :color-mode="isDark ? 'dark' : 'light'"
      :map-options="
        mergeProps(
          {
            center: MP_LOCATION,
            zoom: 12,
          },
          props.mapOptions,
        )
      "
      class="w-100 h-100"
      @ready="onMapReady"
      v-bind="$attrs"
    />
  </AppBoxBase>
</template>

<!-- scoped component styles -->
<style lang="scss" scoped></style>
<!-- css modules, per-class hashing -->
<style module></style>
<!-- global styles -->
<style lang="scss"></style>
