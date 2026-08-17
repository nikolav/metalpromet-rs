<script setup lang="ts">
import { filter } from "rxjs";
import { TOKEN_appEmitter$ } from "~/keys";

const key = shallowRef("");
useSubscription(
  inject(TOKEN_appEmitter$)!
    .pipe(filter((evt) => useAppConfig().events.EVENT_RESIZE === evt.type))
    .subscribe((evt) => {
      key.value = `key-${evt.payload}`;
    }),
);

// @@eos
</script>

<template>
  <slot :provides="{ key }" />
</template>
