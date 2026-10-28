<script setup lang="ts">
const localePath = useLocalePath()
const section = (id: string) => ({ path: localePath('/'), hash: `#${id}` })
</script>

<template>
  <header class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-5 sm:px-6 sm:py-6">
    <NuxtLink
      :to="localePath('/')"
      :aria-label="$t('nav.home')"
      class="flex items-center gap-2.5 no-underline"
    >
      <AppLogo :size="40" />
      <span class="text-[26px] font-semibold tracking-[-0.02em] text-navy">gotovo</span>
    </NuxtLink>

    <div class="flex items-center gap-6">
      <NuxtLink :to="section('how')" class="hidden text-base no-underline hover:text-terracotta-dark md:inline">{{ $t('nav.how') }}</NuxtLink>
      <NuxtLink :to="section('price')" class="hidden text-base no-underline hover:text-terracotta-dark md:inline">{{ $t('nav.price') }}</NuxtLink>
      <LangSwitcher />
      <NuxtLink
        :to="section('pilot')"
        class="hidden rounded-xl bg-navy px-5 py-3 text-base font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#0B2133] sm:inline-block"
      >
        {{ $t('nav.pilot') }}
      </NuxtLink>
    </div>
  </header>
</template>
