<script setup lang="ts">
import { apartmentRanges, cities, sendPilotRequest, type ApartmentRange, type City } from '~/utils/pilotRequest'

type Field = 'name' | 'contact' | 'apartments' | 'city' | 'consent'

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()

const apartmentOptions = apartmentRanges.map((range) => ({ value: range, label: range.replace('-', '–') }))
const cityOptions = computed(() => cities.map((city) => ({ value: city, label: t(`pilot.cities.${city}`) })))

const form = reactive({
  name: '',
  contact: '',
  apartments: '' as ApartmentRange | '',
  city: '' as City | '',
  consent: false,
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const submitted = ref(false)
const successHeading = ref<HTMLElement>()

const fieldRefs: Record<Field, Ref<{ focus: () => void } | undefined>> = {
  name: ref(),
  contact: ref(),
  apartments: ref(),
  city: ref(),
  consent: ref(),
}

const errors = computed(() => {
  const result: Partial<Record<Field, string>> = {}
  if (form.name.trim().length < 2) result.name = 'pilot.errors.name'
  const contact = form.contact.trim()
  const digits = contact.replace(/\D/g, '').length
  if (digits < 6 && !/^@?[\p{L}\d_.]{3,}$/u.test(contact)) result.contact = 'pilot.errors.contact'
  if (!form.apartments) result.apartments = 'pilot.errors.apartments'
  if (!form.city) result.city = 'pilot.errors.city'
  if (!form.consent) result.consent = 'pilot.errors.consent'
  return result
})

function errorFor(field: Field) {
  return submitted.value ? errors.value[field] : undefined
}

const formMessage = computed(() => {
  if (status.value === 'error') return t('pilot.errors.submit')
  const consentError = errorFor('consent')
  return consentError ? t(consentError) : ''
})

async function onSubmit() {
  submitted.value = true
  const firstInvalid = (Object.keys(fieldRefs) as Field[]).find((field) => errors.value[field])
  if (firstInvalid) {
    fieldRefs[firstInvalid].value?.focus()
    return
  }

  status.value = 'sending'
  try {
    await sendPilotRequest(config.public, {
      name: form.name.trim(),
      contact: form.contact.trim(),
      apartments: form.apartments as ApartmentRange,
      city: form.city as City,
      locale: locale.value,
      consent: true,
    })
    status.value = 'success'
    await nextTick()
    successHeading.value?.focus()
  } catch (error) {
    console.error(error)
    status.value = 'error'
  }
}

const inputClass =
  'w-full rounded-xl border bg-white px-4 py-3 text-base text-navy placeholder:text-muted-2 focus:border-bay focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-bay'
</script>

<template>
  <section id="pilot" aria-labelledby="pilot-title" class="bg-navy px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
    <div class="mx-auto grid max-w-[1200px] items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-12">
      <div v-reveal class="flex min-w-0 flex-col gap-4">
        <h2 id="pilot-title" class="text-[32px] leading-[1.1] font-bold tracking-[-0.02em] text-white lg:text-[40px]">
          {{ $t('pilot.title') }}
        </h2>
        <p class="text-lg leading-normal text-on-dark">{{ $t('pilot.text') }}</p>
      </div>

      <div v-reveal="120" class="grid rounded-3xl bg-white p-5 sm:p-7">
        <form
          novalidate
          :inert="status === 'success'"
          class="col-start-1 row-start-1 flex flex-col gap-2 transition-[opacity,visibility] duration-300"
          :class="{ 'invisible opacity-0': status === 'success' }"
          @submit.prevent="onSubmit"
        >
          <div class="flex flex-col gap-1">
            <label for="pilot-name" class="text-[15px] font-semibold">{{ $t('pilot.name') }}</label>
            <input
              id="pilot-name"
              :ref="fieldRefs.name"
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              maxlength="100"
              :placeholder="$t('pilot.namePlaceholder')"
              :aria-invalid="!!errorFor('name')"
              :aria-describedby="errorFor('name') ? 'pilot-name-error' : undefined"
              :class="[inputClass, errorFor('name') ? 'border-terracotta-dark' : 'border-line']"
            >
            <p id="pilot-name-error" class="min-h-5 text-sm text-terracotta-dark">
              {{ errorFor('name') && $t(errorFor('name')!) }}
            </p>
          </div>

          <div class="flex flex-col gap-1">
            <label for="pilot-contact" class="text-[15px] font-semibold">{{ $t('pilot.contact') }}</label>
            <input
              id="pilot-contact"
              :ref="fieldRefs.contact"
              v-model="form.contact"
              type="text"
              name="contact"
              autocomplete="tel"
              maxlength="100"
              :placeholder="$t('pilot.contactPlaceholder')"
              :aria-invalid="!!errorFor('contact')"
              :aria-describedby="errorFor('contact') ? 'pilot-contact-error' : undefined"
              :class="[inputClass, errorFor('contact') ? 'border-terracotta-dark' : 'border-line']"
            >
            <p id="pilot-contact-error" class="min-h-5 text-sm text-terracotta-dark">
              {{ errorFor('contact') && $t(errorFor('contact')!) }}
            </p>
          </div>

          <ChoiceChips
            :ref="fieldRefs.apartments"
            v-model="form.apartments"
            name="pilot-apartments"
            :legend="$t('pilot.apartments')"
            :options="apartmentOptions"
            :error="errorFor('apartments') && $t(errorFor('apartments')!)"
          />

          <ChoiceChips
            :ref="fieldRefs.city"
            v-model="form.city"
            name="pilot-city"
            :legend="$t('pilot.city')"
            :options="cityOptions"
            :error="errorFor('city') && $t(errorFor('city')!)"
          />

          <div class="mt-1 flex items-start gap-3">
            <input
              id="pilot-consent"
              :ref="fieldRefs.consent"
              v-model="form.consent"
              type="checkbox"
              name="consent"
              :aria-invalid="!!errorFor('consent')"
              :aria-describedby="errorFor('consent') ? 'pilot-form-message' : undefined"
              class="mt-0.5 size-5 shrink-0 cursor-pointer rounded accent-terracotta-dark"
              :class="{ 'outline-2 outline-offset-2 outline-terracotta-dark': errorFor('consent') }"
            >
            <label for="pilot-consent" class="cursor-pointer text-sm leading-snug text-muted">
              <i18n-t keypath="pilot.consent" scope="global">
                <template #policy>
                  <NuxtLink
                    :to="localePath('/privacy')"
                    target="_blank"
                    class="font-medium text-navy underline underline-offset-2 hover:text-terracotta-dark"
                  >{{ $t('pilot.consentPolicy') }}</NuxtLink>
                </template>
              </i18n-t>
            </label>
          </div>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="mt-4 min-h-13 cursor-pointer rounded-[14px] bg-terracotta-dark px-6 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#9A3F1F] disabled:cursor-wait disabled:opacity-80"
          >
            {{ status === 'sending' ? $t('pilot.sending') : $t('pilot.submit') }}
          </button>

          <p id="pilot-form-message" aria-live="assertive" class="mt-1.5 min-h-5 text-sm font-medium text-[#9A3F1F]">
            {{ formMessage }}
          </p>
        </form>

        <Transition
          enter-active-class="transition duration-500 delay-150 ease-out"
          enter-from-class="opacity-0 translate-y-2"
        >
          <div
            v-if="status === 'success'"
            role="status"
            class="col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 px-4 text-center"
          >
            <span class="mb-2 flex size-16 items-center justify-center rounded-[20px] bg-green text-white" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h3 ref="successHeading" tabindex="-1" class="text-2xl font-semibold focus:outline-none">
              {{ $t('pilot.successTitle') }}
            </h3>
            <p class="max-w-[320px] text-[17px] leading-normal text-muted">{{ $t('pilot.successText') }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
