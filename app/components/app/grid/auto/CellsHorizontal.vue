<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    auto?: boolean;
    cellMinHeight?: any;
    cellWidth?: any;
    scroll?: any;
  }>(),
  {
    auto: true,
    cellMinHeight: 100,
    cellWidth: 100,
    scroll: 100,
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
const scrollForward = () => {
  if (!$$.isPresent(xMax.value)) return;
  x.value = Math.min(xMax.value, x.value + props.scroll);
};
const scrollRewind = () => {
  x.value = Math.max(0, x.value - props.scroll);
};
watchEffect(() => {
  scrollX.value = x.value;
});

onMounted(scrollHead);

defineExpose({
  xMax,
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
    :class="{ 'grid app-grid-auto-cells-h overflow-x-hidden': props.auto }"
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
