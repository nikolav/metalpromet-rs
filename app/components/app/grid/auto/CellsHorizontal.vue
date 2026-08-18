<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    auto?: boolean;
    cellMinHeight?: any;
    cellWidth?: any;
  }>(),
  {
    auto: true,
    cellMinHeight: 240,
    cellWidth: 320,
  },
);

const { $$ } = useNuxtApp();

const refAppGridAutoCellsHorizontal = useTemplateRef(
  "ref-AppGridAutoCellsHorizontal",
);

const el_ = computed(() => refAppGridAutoCellsHorizontal.value?.$el);
const { x: scrollX } = useScroll(el_, {
  behavior: "smooth",
});

const sw = usePointerSwipe(el_, {
  threshold: 30,
  disableTextSelect: true,
});

const xMax = computed(() =>
  $$.isPresent(el_.value)
    ? Math.max(0, el_.value.scrollWidth - el_.value.clientWidth)
    : undefined,
);

const ch = computed(() =>
  $$.isNumeric(props.cellMinHeight)
    ? `${props.cellMinHeight}px`
    : props.cellMinHeight,
);
const cw = computed(() =>
  $$.isNumeric(props.cellWidth) ? `${props.cellWidth}px` : props.cellWidth,
);

const x = shallowRef(0);
const scrollHead = () => {
  x.value = 0;
};
const scrollTail = () => {
  if (!$$.isPresent(xMax.value)) return;
  x.value = xMax.value;
};
const scrollForward = (value?: number) => {
  if (!$$.isPresent(xMax.value)) return;
  x.value = Math.min(xMax.value, x.value + (value ?? props.cellWidth));
};
const scrollRewind = (value?: number) => {
  x.value = Math.max(0, x.value - (value ?? props.cellWidth));
};
watchEffect(() => {
  scrollX.value = x.value;
});

const isHead = computed(() => ($$.isNumeric(x.value) ? 0 == x.value : false));
const isTail = computed(() =>
  $$.every([x.value, xMax.value], $$.isNumeric)
    ? Number(xMax.value) <= x.value
    : false,
);

// scroll:small for small distance, x3 for large;
const calcScrollLength = (diff: number) =>
  props.cellWidth < Math.abs(diff) * 7.85
    ? 3 * props.cellWidth
    : props.cellWidth;
// @swipe scroll:simple
watch(sw.direction, (dir) => {
  if (!el_.value) return;
  switch (true) {
    case "left" === dir:
      scrollForward(calcScrollLength(sw.distanceX.value));
      break;
    case "right" === dir:
      scrollRewind(calcScrollLength(sw.distanceX.value));
      break;

    default:
      break;
  }
});

onMounted(scrollHead);

defineExpose({
  xMax,
  isHead,
  isTail,
  scroll: {
    head: scrollHead,
    tail: scrollTail,
    forward: scrollForward,
    rewind: scrollRewind,
  },
});
// @@eos
</script>

<template>
  <AppBoxBase
    ref="ref-AppGridAutoCellsHorizontal"
    class="component--AppGridAutoCellsHorizontal"
    :class="{
      'grid app-grid-auto-cells-h overflow-x-hidden overflow-y-hidden scroll-smooth scrollbar-hidden touch-pan-y [-webkit-overflow-scrolling:touch]':
        props.auto,
    }"
  >
    <slot />
  </AppBoxBase>
</template>

<style lang="scss" scoped>
.app-grid-auto-cells-h {
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, minmax(v-bind(ch), 1fr));
  grid-auto-columns: v-bind(cw);
}
</style>
