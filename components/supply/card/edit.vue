<template>
  <nuxt-link
    class="icon-button"
    :to="`/profile/supply/edit/${subjectName}`"
  >
    <PencilSquareIcon class="w-6 h-6" />
  </nuxt-link>
</template>

<script lang="ts" setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';

defineProps({
  subjectName: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
</style>