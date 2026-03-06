<template>
  <div class="date-card">
    <span class="date-card__label">{{ label }}</span>
    <div class="date-card__value">{{ formatDate(computedDate) }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { addDays, formatDate } from 'jeanhyv8';

const props = defineProps(['date', 'label', 'daysToAdd']);

const computedDate = computed(() => {
  return props.daysToAdd > 0 ? addDays(props.date, props.daysToAdd) : props.date;
});
</script>