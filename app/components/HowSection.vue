<script setup lang="ts">
const steps = [
  { key: 'calendars', mark: '1', bg: 'bg-navy' },
  { key: 'link', mark: '2', bg: 'bg-navy' },
  { key: 'photo', mark: '✓', bg: 'bg-terracotta-dark' },
]
</script>

<template>
  <section id="how" aria-labelledby="how-title" class="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 sm:gap-10">
      <h2 id="how-title" v-reveal class="text-[32px] leading-[1.1] font-bold tracking-[-0.02em] lg:text-[40px]">{{ $t('how.title') }}</h2>
      <ol class="grid gap-8 md:grid-cols-3 md:gap-6">
        <li v-for="(step, i) in steps" :key="step.key" v-reveal="i * 120" class="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 sm:flex sm:flex-col sm:items-start sm:gap-4">
          <span
            aria-hidden="true"
            class="flex size-12 items-center justify-center rounded-[14px] text-[22px] font-bold text-white"
            :class="step.bg"
          >
            {{ step.mark }}
          </span>
          <h3 class="text-xl leading-tight font-semibold sm:text-[22px]">{{ $t(`how.${step.key}.title`) }}</h3>
          <p class="col-span-2 text-base leading-normal text-muted sm:text-[17px]">{{ $t(`how.${step.key}.text`) }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
