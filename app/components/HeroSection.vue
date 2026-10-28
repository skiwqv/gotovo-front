<template>
  <section
    id="top"
    class="mx-auto grid max-w-[1200px] items-center gap-10 px-4 pt-2 pb-14 sm:gap-12 sm:pt-4 sm:pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14 lg:pb-20"
  >
    <div class="flex min-w-0 flex-col gap-5 sm:gap-6">
      <p class="self-start rounded-2xl bg-white px-3.5 py-1.5 text-sm sm:rounded-full sm:px-4 sm:py-2 sm:text-[15px] font-medium text-muted-2 motion-safe:animate-rise">
        {{ $t('hero.badge') }}
      </p>
      <h1
        class="text-[38px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[56px] motion-safe:animate-rise motion-safe:[animation-delay:80ms]"
      >
        {{ $t('hero.title') }}
      </h1>
      <p class="max-w-[560px] text-lg leading-normal text-muted sm:text-xl motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
        <a
          href="#pilot"
          class="rounded-[14px] bg-terracotta-dark px-7 py-4 text-center text-lg font-semibold text-white no-underline shadow-[0_8px_24px_rgba(181,77,40,0.25)] transition hover:-translate-y-0.5 hover:bg-[#9A3F1F] hover:shadow-[0_12px_28px_rgba(181,77,40,0.32)]"
        >
          {{ $t('hero.cta') }}
        </a>
        <a href="#how" class="px-3 py-3 text-center text-lg font-semibold sm:py-4 text-navy underline-offset-4 hover:text-terracotta-dark">
          {{ $t('hero.how') }}
        </a>
      </div>
      <p class="text-[15px] text-muted-2 motion-safe:animate-rise motion-safe:[animation-delay:320ms]">{{ $t('hero.note') }}</p>
    </div>

    <div class="flex min-w-0 justify-center">
      <PhoneMockup />
    </div>
  </section>
</template>
