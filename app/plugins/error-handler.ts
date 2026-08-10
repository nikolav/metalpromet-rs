import { onDebug } from "~/utils/on-debug";

export default defineNuxtPlugin({
  name: "handle-errors",
  enforce: "pre",
  setup: (nuxtapp) => {
    nuxtapp.vueApp.config.errorHandler = (error, instance, info) => {
      onDebug({
        "errorHandler.vue@handle-errors.plugin": { error, instance, info },
      });
    };
  },
});
