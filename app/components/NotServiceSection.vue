<template>
  <section aria-labelledby="not-service-title" class="px-4 pb-14 sm:px-6 sm:pb-20 lg:pb-24">
    <div
      v-reveal
      class="mx-auto grid max-w-[1200px] items-center gap-6 rounded-3xl bg-navy p-6 sm:gap-8 sm:rounded-[28px] sm:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)]"
    >
      <div class="flex min-w-0 flex-col gap-3">
        <h2 id="not-service-title" class="text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-white lg:text-[34px]">
          {{ $t('notService.title') }}
        </h2>
        <p class="text-[17px] leading-normal text-on-dark sm:text-lg">{{ $t('notService.text') }}</p>
      </div>
      <ul class="flex flex-col gap-3">
        <li class="rounded-[14px] bg-white/8 px-[18px] py-4 text-base text-white">{{ $t('notService.alert') }}</li>
        <li class="rounded-[14px] bg-white/8 px-[18px] py-4 text-base text-white">{{ $t('notService.workload') }}</li>
      </ul>
    </div>
  </section>
</template>
