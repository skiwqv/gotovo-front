<script setup lang="ts">
import type { IconName } from './AppIcon.vue'

const items: { key: string; icon: IconName; bg: string }[] = [
  { key: 'messages', icon: 'chat', bg: 'bg-navy' },
  { key: 'time', icon: 'clock', bg: 'bg-bay' },
  { key: 'review', icon: 'star', bg: 'bg-terracotta-dark' },
]
</script>

<template>
  <section aria-labelledby="pains-title" class="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-26">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 sm:gap-12">
      <div v-reveal class="flex flex-col gap-3">
        <p class="text-[15px] font-semibold tracking-[0.08em] text-terracotta-dark uppercase">{{ $t('pains.eyebrow') }}</p>
        <h2 id="pains-title" class="max-w-[760px] text-[32px] leading-[1.1] font-bold tracking-[-0.02em] lg:text-[44px]">
          {{ $t('pains.title') }}
        </h2>
      </div>
      <ul class="grid gap-4 sm:gap-6 md:grid-cols-3">
        <li
          v-for="(item, i) in items"
          :key="item.key"
          v-reveal="i * 100"
          class="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 rounded-3xl bg-stone p-6 transition sm:flex sm:flex-col sm:items-start sm:gap-5 sm:rounded-[28px] sm:p-9 duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(18,50,74,0.10)]"
        >
          <div class="flex size-12 shrink-0 items-center justify-center rounded-[14px] sm:size-15 sm:rounded-[18px] text-white" :class="item.bg">
            <AppIcon :name="item.icon" />
          </div>
          <h3 class="text-xl leading-tight font-semibold sm:text-2xl">{{ $t(`pains.${item.key}.title`) }}</h3>
          <p class="col-span-2 text-base leading-[1.55] text-muted sm:text-[17px]">{{ $t(`pains.${item.key}.text`) }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
