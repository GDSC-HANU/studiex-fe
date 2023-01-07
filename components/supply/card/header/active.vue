<template>
  <supply-card-header-property>
    <template #icon>
      <CheckIcon class="w-4 h-4 text-green-700" v-if="active" />
      <XMarkIcon class="w-4 h-4 text-red-700" v-else/>
    </template>
    <template #text>
      <span v-if="active" class="text-green-700">Active</span>
      <span class="text-red-700" v-else>Don't active</span>
    </template>
  </supply-card-header-property>
</template>

<script lang="ts" setup>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline';

defineProps({
  active: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>

</style>