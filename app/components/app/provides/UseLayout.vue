<script setup lang="ts">
import { useLayout } from "vuetify";

import type { TFunction } from "~/types";

const { $$ } = useNuxtApp();
const { getLayoutItem } = useLayout();

const access = (
  callbacks: Record<
    string,
    TFunction<void, ReturnType<ReturnType<typeof useLayout>["getLayoutItem"]>>
  >,
) => {
  $$.each(callbacks, (callback, name) => {
    callback(getLayoutItem(name));
  });
};

// @@eos
</script>

<template>
  <slot :layout="{ access }" />
</template>
