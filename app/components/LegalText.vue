<script setup lang="ts">
import { operator } from '~/legal/operator'

const props = defineProps<{ text: string }>()

const parts = computed(() => props.text.split(/(\{name\}|\{email\})/).filter(Boolean))
</script>

<template>
  <template v-for="(part, i) in parts" :key="i">
    <a
      v-if="part === '{email}' && operator.email"
      :href="`mailto:${operator.email}`"
      class="font-medium text-navy underline underline-offset-2 hover:text-terracotta-dark"
    >{{ operator.email }}</a>
    <template v-else-if="part === '{name}' && operator.name">{{ operator.name }}</template>
    <mark v-else-if="part === '{name}' || part === '{email}'" class="rounded-md bg-[#FFEFA8] px-1.5 py-0.5 text-navy">
      {{ $t(part === '{name}' ? 'legal.missingName' : 'legal.missingEmail') }}
    </mark>
    <template v-else>{{ part }}</template>
  </template>
</template>
