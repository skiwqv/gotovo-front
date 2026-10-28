<script setup lang="ts">
export type IconName =
  | 'chat'
  | 'clock'
  | 'star'
  | 'calendar'
  | 'camera'
  | 'warning'
  | 'wallet'
  | 'layers'
  | 'globe'

withDefaults(defineProps<{ name: IconName; size?: number }>(), { size: 28 })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <template v-if="name === 'chat'">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      <path d="M8 11h8M8 14.5h5" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </template>
    <template v-else-if="name === 'star'">
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
    </template>
    <template v-else-if="name === 'calendar'">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15.5l2 2 4-4" />
    </template>
    <template v-else-if="name === 'camera'">
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </template>
    <template v-else-if="name === 'warning'">
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4M12 17h.01" />
    </template>
    <template v-else-if="name === 'wallet'">
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <path d="M16 12.5h2M3 10h18" />
    </template>
    <template v-else-if="name === 'layers'">
      <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
      <path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </template>
  </svg>
</template>
