<script setup lang="ts">
const props = defineProps<{
  name: string
  legend: string
  options: { value: string; label: string }[]
  error?: string
}>()

const model = defineModel<string>({ required: true })
const inputs = useTemplateRef<HTMLInputElement[]>('inputs')

defineExpose({
  focus: () => (inputs.value?.find((input) => input.checked) ?? inputs.value?.[0])?.focus(),
})

const errorId = computed(() => `${props.name}-error`)
</script>

<template>
  <fieldset class="min-w-0" :aria-describedby="error ? errorId : undefined">
    <legend class="mb-1.5 text-[15px] font-semibold">{{ legend }}</legend>
    <div class="flex flex-wrap gap-2">
      <label v-for="option in options" :key="option.value" class="cursor-pointer">
        <input
          ref="inputs"
          v-model="model"
          type="radio"
          :name="name"
          :value="option.value"
          :aria-invalid="!!error"
          class="peer sr-only"
        >
        <span
          class="block rounded-full border px-4 py-2 text-[15px] font-medium text-navy transition-colors select-none hover:border-navy peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-bay"
          :class="error ? 'border-terracotta-dark' : 'border-line'"
        >
          {{ option.label }}
        </span>
      </label>
    </div>
    <p :id="errorId" class="mt-1 min-h-5 text-sm text-terracotta-dark">{{ error }}</p>
  </fieldset>
</template>
