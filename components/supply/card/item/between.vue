<template>
  <p>
    <span>{{ value.minValue }}</span>
    <ArrowLongRightIcon class="w-4 h-4 inline mx-2" />
    <span>{{ value.maxValue }}</span>
  </p>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline';

defineProps({
  value: {
    type: Object as PropType<{
      minValue: number,
      maxValue: number
    }>,
    required: true
  }
})
</script>

<style scoped>
</style>