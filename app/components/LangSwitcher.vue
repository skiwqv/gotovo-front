<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <nav :aria-label="$t('nav.language')" class="flex items-center gap-0.5 rounded-full bg-sand p-1">
    <NuxtLink
      v-for="item in locales"
      :key="item.code"
      :to="localePath('/', item.code)"
      :hreflang="item.language"
      :aria-current="item.code === locale ? 'true' : undefined"
      class="flex min-h-9 items-center rounded-full px-3 py-2 text-sm font-semibold no-underline"
      :class="item.code === locale ? 'bg-white text-navy' : 'text-muted-2 hover:text-navy'"
    >
      {{ item.code.toUpperCase() }}<span class="sr-only" :lang="item.language">&nbsp;— {{ item.name }}</span>
    </NuxtLink>
  </nav>
</template>
