<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number
    onDark?: boolean
  }>(),
  { size: 40, onDark: false },
)

const colors = computed(() =>
  props.onDark
    ? { roof: '#FFFFFF', check: '#E98A62', wave: '#5FB4D9' }
    : { roof: '#12324A', check: '#D9643A', wave: '#2E8FB8' },
)
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 160 160" aria-hidden="true" class="shrink-0">
    <path
      d="M24 66 L80 22 L136 66"
      fill="none"
      :stroke="colors.roof"
      stroke-width="14"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54 88 L72 106 L106 72"
      fill="none"
      :stroke="colors.check"
      stroke-width="14"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24 134 Q 38 122 52 134 T 80 134 T 108 134 T 136 134"
      fill="none"
      :stroke="colors.wave"
      stroke-width="10"
      stroke-linecap="round"
    />
  </svg>
</template>
