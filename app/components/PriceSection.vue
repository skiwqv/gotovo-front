<script setup lang="ts">
const audience = ['agencies', 'cleaning', 'owners']

const PRICE_PER_APARTMENT = 2
const MIN_MONTHLY = 10
const MAX_APARTMENTS = 100

const { locale } = useI18n()
const apartments = ref(20)
const monthly = computed(() => Math.max(apartments.value * PRICE_PER_APARTMENT, MIN_MONTHLY))
const isMinimum = computed(() => apartments.value * PRICE_PER_APARTMENT < MIN_MONTHLY)
const fill = computed(() => `${((apartments.value - 1) / (MAX_APARTMENTS - 1)) * 100}%`)

const format = (amount: number) => amount.toLocaleString(locale.value === 'me' ? 'sr-Latn-ME' : locale.value)
</script>

<template>
  <section id="price" aria-labelledby="audience-title" class="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
    <div class="mx-auto grid max-w-[1200px] items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
      <div v-reveal class="flex min-w-0 flex-col gap-5">
        <h2 id="audience-title" class="text-[32px] leading-[1.1] font-bold tracking-[-0.02em] lg:text-[40px]">{{ $t('audience.title') }}</h2>
        <p v-for="key in audience" :key="key" class="text-lg leading-normal text-muted">
          <strong class="font-semibold text-navy">{{ $t(`audience.${key}.who`) }}</strong>{{ $t(`audience.${key}.text`) }}
        </p>
      </div>

      <div v-reveal="120" class="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_1px_2px_rgba(18,50,74,0.06)] sm:rounded-[28px] sm:p-10">
        <h3 class="text-base font-semibold text-muted-2">{{ $t('price.label') }}</h3>
        <p class="flex flex-wrap items-baseline gap-x-2">
          <span class="text-[56px] leading-none sm:text-[64px] font-bold tracking-[-0.03em]">{{ $t('price.amount') }}</span>
          <span class="text-lg text-muted">{{ $t('price.per') }}</span>
        </p>
        <p class="text-base text-muted">{{ $t('price.terms') }}</p>

        <div class="flex flex-col gap-3 rounded-[20px] bg-stone p-5">
          <div class="flex items-baseline justify-between gap-3">
            <label for="price-apartments" class="text-[15px] font-semibold">{{ $t('price.calc.label') }}</label>
            <output for="price-apartments" class="text-2xl font-bold tabular-nums">{{ apartments }}</output>
          </div>
          <input
            id="price-apartments"
            v-model.number="apartments"
            type="range"
            min="1"
            :max="MAX_APARTMENTS"
            aria-describedby="price-result"
            class="range-input"
            :style="{ '--fill': fill }"
          >
          <div id="price-result" class="flex flex-col gap-1">
            <p class="flex flex-wrap items-baseline gap-x-2">
              <span class="text-2xl font-bold tabular-nums">{{ $t('price.calc.monthly', { amount: format(monthly) }) }}</span>
              <span v-if="isMinimum" class="text-sm text-muted-2">{{ $t('price.calc.minimum') }}</span>
            </p>
            <p class="text-[15px] text-muted tabular-nums">{{ $t('price.calc.yearly', { amount: format(monthly * 10) }) }}</p>
          </div>
        </div>

        <p class="rounded-[14px] bg-[#E3F4EC] px-4 py-3.5 text-base font-semibold text-[#146C48]">{{ $t('price.free') }}</p>
      </div>
    </div>
  </section>
</template>
