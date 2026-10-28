<script setup lang="ts">
import { legalDocs, legalSlugs } from '~/legal'
import type { LegalLocale, LegalSlug } from '~/legal/types'

const props = defineProps<{ slug: LegalSlug }>()

const { locale } = useI18n()
const localePath = useLocalePath()

const doc = computed(() => legalDocs[props.slug][locale.value as LegalLocale])
const others = computed(() =>
  legalSlugs
    .filter((slug) => slug !== props.slug)
    .map((slug) => ({ slug, doc: legalDocs[slug][locale.value as LegalLocale] })),
)

useSeoMeta({
  title: () => `${doc.value.title} — Gotovo`,
  ogTitle: () => `${doc.value.title} — Gotovo`,
  description: () => doc.value.description,
  ogDescription: () => doc.value.description,
})

const number = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <div class="overflow-x-clip">
    <SiteHeader />
    <main class="px-4 pt-4 pb-20 sm:px-6 lg:pb-28">
      <div class="mx-auto max-w-[800px]">
        <NuxtLink
          :to="localePath('/')"
          class="inline-flex items-center gap-2 text-[15px] font-medium text-muted-2 no-underline hover:text-terracotta-dark"
        >
          <span aria-hidden="true">←</span> {{ $t('legal.back') }}
        </NuxtLink>

        <header class="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          <p class="text-[15px] font-semibold tracking-[0.08em] text-terracotta-dark uppercase">{{ $t('legal.eyebrow') }}</p>
          <h1 class="text-[30px] leading-[1.1] font-bold tracking-[-0.02em] [overflow-wrap:anywhere] hyphens-auto sm:text-5xl">{{ doc.title }}</h1>
          <p class="text-[15px] text-muted-2">{{ $t('legal.updated') }}</p>
          <p class="text-[17px] leading-relaxed text-muted sm:text-lg">{{ doc.intro }}</p>
        </header>

        <article class="mt-8 rounded-3xl bg-white p-5 sm:mt-10 sm:rounded-[28px] sm:p-10 lg:p-12">
          <section
            v-for="(section, i) in doc.sections"
            :key="section.title"
            class="mt-8 border-t border-sand pt-8 first:mt-0 first:border-0 first:pt-0"
          >
            <h2 class="flex items-baseline gap-3 text-xl leading-snug font-semibold sm:text-[22px]">
              <span class="text-[15px] font-semibold text-terracotta-dark tabular-nums" aria-hidden="true">{{ number(i) }}</span>
              {{ section.title }}
            </h2>
            <template v-for="(block, j) in section.body" :key="j">
              <p v-if="typeof block === 'string'" class="mt-3 text-base leading-[1.7] text-muted sm:text-[17px]">
                <LegalText :text="block" />
              </p>
              <ul v-else class="mt-3 flex flex-col gap-2">
                <li v-for="item in block.list" :key="item" class="flex gap-3 text-base leading-[1.7] text-muted sm:text-[17px]">
                  <span class="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-bay" aria-hidden="true" />
                  <span><LegalText :text="item" /></span>
                </li>
              </ul>
            </template>
          </section>
        </article>

        <nav :aria-label="$t('legal.other')" class="mt-12">
          <h2 class="text-[15px] font-semibold text-muted-2">{{ $t('legal.other') }}</h2>
          <ul class="mt-4 grid gap-4 sm:grid-cols-2">
            <li v-for="item in others" :key="item.slug">
              <NuxtLink
                :to="localePath(`/${item.slug}`)"
                class="group flex h-full flex-col gap-2 rounded-[20px] bg-white p-5 no-underline transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(18,50,74,0.08)]"
              >
                <span class="flex items-center justify-between gap-3 text-lg font-semibold text-navy">
                  {{ item.doc.title }}
                  <span class="text-terracotta-dark transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </span>
                <span class="text-[15px] leading-normal text-muted">{{ item.doc.description }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
