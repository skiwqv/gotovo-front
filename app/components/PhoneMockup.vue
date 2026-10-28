<script setup lang="ts">
const root = ref<HTMLElement>()
const step = ref(0)

const rooms = computed(() => (step.value >= 2 ? 5 : step.value >= 1 ? 4 : 3))
const studioDone = computed(() => step.value >= 3)
const doneCount = computed(() => (studioDone.value ? 2 : 1))
const assigned = computed(() => step.value >= 4)

const timeline = [1300, 2000, 2600, 3500]
const timers: ReturnType<typeof setTimeout>[] = []
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      observer?.disconnect()
      timeline.forEach((delay, i) => timers.push(setTimeout(() => (step.value = i + 1), delay)))
    },
    { threshold: 0.5 },
  )
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  timers.forEach(clearTimeout)
})

const swap = {
  mode: 'out-in' as const,
  type: 'transition' as const,
  enterActiveClass: 'transition duration-300 ease-out',
  enterFromClass: 'opacity-0 translate-y-1',
  leaveActiveClass: 'transition duration-200 ease-in',
  leaveToClass: 'opacity-0',
}
</script>

<template>
  <div
    ref="root"
    role="img"
    :aria-label="$t('phone.label')"
    class="h-[600px] w-full max-w-[380px] rounded-[52px] bg-navy p-3 shadow-[0_32px_80px_rgba(18,50,74,0.28),0_4px_12px_rgba(18,50,74,0.12)] motion-safe:animate-rise motion-safe:[animation-delay:200ms]"
  >
    <div aria-hidden="true" class="relative flex h-full flex-col overflow-hidden rounded-[42px] bg-navy">
      <div class="flex flex-col gap-3.5 px-6 pt-6 pb-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <AppLogo :size="28" on-dark />
            <span class="text-lg font-semibold text-white">gotovo</span>
          </div>
          <span class="flex size-9 items-center justify-center rounded-full bg-[#E98A62] text-[15px] font-bold text-navy">
            {{ $t('phone.avatar') }}
          </span>
        </div>
        <div class="flex flex-col gap-0.5">
          <p class="text-sm text-[#A9BCCB]">{{ $t('phone.date') }}</p>
          <p class="text-[26px] leading-tight font-bold text-white">{{ $t('phone.today') }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="h-2 overflow-hidden rounded-full bg-white/15">
            <div
              class="h-2 origin-left rounded-full bg-[#3CC48A] transition-[width] duration-700 ease-out motion-safe:animate-fill motion-safe:[animation-delay:600ms]"
              :style="{ width: `${doneCount * 25}%` }"
            />
          </div>
          <Transition v-bind="swap">
            <p :key="doneCount" class="text-[13px] text-on-dark">{{ $t('phone.progress', { n: doneCount }) }}</p>
          </Transition>
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-2 rounded-t-[20px] bg-stone px-3.5 py-3.5">
        <div
          class="flex flex-col gap-1.5 rounded-2xl border-[1.5px] px-4 py-3 transition-colors duration-500 motion-safe:animate-rise motion-safe:[animation-delay:500ms]"
          :class="assigned ? 'border-transparent bg-white shadow-[0_2px_8px_rgba(18,50,74,0.08)]' : 'border-[#F0C9B8] bg-[#FDF3EE]'"
        >
          <p class="text-[15px] font-semibold">{{ $t('phone.alert.name') }}</p>
          <div class="flex min-h-6 items-center justify-between gap-2">
            <span class="text-xs transition-colors duration-500" :class="assigned ? 'text-muted-2' : 'font-medium text-[#9A3F1F]'">
              {{ $t('phone.alert.time') }}
            </span>
            <Transition v-bind="swap">
              <span v-if="assigned" class="rounded-full bg-[#E2EFF6] px-2.5 py-1 text-xs font-semibold text-[#1C6A8C]">
                {{ $t('phone.alert.assigned') }}
              </span>
              <span v-else class="rounded-lg bg-terracotta-dark px-2.5 py-1 text-xs font-semibold text-white motion-safe:animate-ring">
                {{ $t('phone.alert.action') }}
              </span>
            </Transition>
          </div>
        </div>

        <div class="flex flex-col gap-1.5 rounded-2xl bg-white px-4 py-3 shadow-[0_2px_8px_rgba(18,50,74,0.08)] motion-safe:animate-rise motion-safe:[animation-delay:620ms]">
          <p class="text-[15px] font-semibold">{{ $t('phone.progressCard.name') }}</p>
          <Transition v-bind="swap">
            <div v-if="studioDone" class="flex min-h-6 items-center justify-between gap-2">
              <span class="text-xs text-muted-2">{{ $t('phone.done.photos', { n: 5 }) }}</span>
              <span class="rounded-full bg-[#E3F4EC] px-2.5 py-1 text-xs font-semibold text-[#146C48]">{{ $t('phone.done.status') }}</span>
            </div>
            <div v-else class="flex flex-col gap-1.5">
              <div class="flex min-h-6 items-center justify-between gap-2">
                <span class="text-xs font-semibold text-[#1C6A8C]">{{ $t('phone.progressCard.status') }}</span>
                <span class="text-xs text-muted-2">{{ $t('phone.progressCard.rooms', { n: rooms }) }}</span>
              </div>
              <div class="h-1.5 overflow-hidden rounded-full bg-[#E2EFF6]">
                <div
                  class="h-1.5 origin-left rounded-full bg-bay transition-[width] duration-700 ease-out motion-safe:animate-fill motion-safe:[animation-delay:700ms]"
                  :style="{ width: `${rooms * 20}%` }"
                />
              </div>
            </div>
          </Transition>
        </div>

        <div class="flex flex-col gap-1.5 rounded-2xl bg-white px-4 py-3 shadow-[0_2px_8px_rgba(18,50,74,0.08)] motion-safe:animate-rise motion-safe:[animation-delay:740ms]">
          <p class="text-[15px] font-semibold">{{ $t('phone.done.name') }}</p>
          <div class="flex min-h-6 items-center justify-between gap-2">
            <span class="text-xs text-muted-2">{{ $t('phone.done.photos', { n: 6 }) }}</span>
            <span class="rounded-full bg-[#E3F4EC] px-2.5 py-1 text-xs font-semibold text-[#146C48]">{{ $t('phone.done.status') }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-1.5 rounded-2xl bg-white px-4 py-3 shadow-[0_2px_8px_rgba(18,50,74,0.08)] motion-safe:animate-rise motion-safe:[animation-delay:860ms]">
          <p class="text-[15px] font-semibold">{{ $t('phone.later.name') }}</p>
          <div class="flex min-h-6 items-center justify-between gap-2">
            <span class="text-xs text-muted-2">{{ $t('phone.later.time') }}</span>
            <span class="rounded-full bg-[#F1EEE8] px-2.5 py-1 text-xs font-semibold text-muted-2">{{ $t('phone.later.status') }}</span>
          </div>
        </div>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-b from-stone/0 to-stone" />
    </div>
  </div>
</template>
