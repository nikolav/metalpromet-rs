<script setup lang="ts">
const route = useRoute();
const seoLocaleHead = useLocaleHead();
const { t } = useI18n();
const { $$ } = useNuxtApp();

const title = computed(() =>
  t(String($$.get(route.meta, "context.title", "#TBD"))),
);
const description = computed(() =>
  t(String($$.get(route.meta, "context.description", "#TBD"))),
);

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: $$.config("public.siteSeoImage"),
  twitterCard: "summary_large_image",
});

// @@eos
</script>

<template>
  <Html
    :lang="seoLocaleHead.htmlAttrs.lang"
    :dir="seoLocaleHead.htmlAttrs.dir"
  />
  <Title>{{ title }}</Title>
  <template v-for="link in seoLocaleHead.link">
    <Link
      :id="`${link.id}`"
      :rel="`${link.rel ?? ''}`"
      :href="`${link.href ?? ''}`"
      :hreflang="(<any>link).hreflang"
    />
  </template>
  <template v-for="meta in seoLocaleHead.meta">
    <Meta
      :id="`${meta.id}`"
      :property="`${meta.property ?? ''}`"
      :content="`${meta.content ?? ''}`"
    />
  </template>
</template>
