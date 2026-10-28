<script setup lang="ts">
import { legalDocs, legalSlugs } from '~/legal'
import type { LegalLocale } from '~/legal/types'

const { locale } = useI18n()
const localePath = useLocalePath()

const links = computed(() => legalSlugs.map((slug) => ({ slug, title: legalDocs[slug][locale.value as LegalLocale].title })))
</script>

<template>
  <footer class="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 sm:px-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2.5 text-navy no-underline" :aria-label="$t('nav.home')">
        <AppLogo :size="32" />
        <span class="text-xl font-semibold tracking-[-0.02em]">gotovo</span>
      </NuxtLink>
      <p class="text-[15px] text-muted-2">{{ $t('footer.made') }}</p>
    </div>
    <nav :aria-label="$t('footer.legal')" class="border-t border-sand pt-6">
      <ul class="flex flex-wrap gap-x-6 gap-y-2">
        <li v-for="link in links" :key="link.slug">
          <NuxtLink :to="localePath(`/${link.slug}`)" class="text-[15px] text-muted-2 underline-offset-4 hover:text-terracotta-dark hover:underline">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
