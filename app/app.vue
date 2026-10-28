<script setup lang="ts">
const { t, locale } = useI18n()
const head = useLocaleHead()
const { siteUrl, indexable } = useRuntimeConfig().public
const ogImage = computed(() => `${siteUrl}/og/og-${locale.value}.png`)

useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  link: head.value.link,
  meta: head.value.meta,
}))

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  ogSiteName: 'Gotovo',
  ogImage: () => ogImage.value,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => t('meta.title'),
  twitterCard: 'summary_large_image',
  twitterImage: () => ogImage.value,
  robots: indexable ? undefined : 'noindex, nofollow',
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
