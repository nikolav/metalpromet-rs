import { useSubscription } from "@vueuse/rxjs";

import type { TDirective } from "~/types";
import { onDebug } from "~/utils/on-debug";
import { useDom } from "~/composables/dom/use-dom";

// augment the GlobalDirectives interface
declare module "vue" {
  export interface GlobalDirectives {
    vDemo: TDirective;
  }
}

export const vDemo = <TDirective>{
  // .mounted .updated .beforeUnmount ...
  mounted: (el, binding) => {
    useSubscription(
      useDom(el).subscribe(($coll) => {
        $coll.on({
          click: (event) => {
            onDebug({
              "@directive v-demo": {
                el,
                binding,
                event,
              },
            });
          },
        });
      }),
    );
  },
};
