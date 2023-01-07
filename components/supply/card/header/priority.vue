<template>
  <supply-card-header-property>
    <template #icon>
      <StarIcon class="w-4 h-4 text-slate-700" v-if="priority === Priority.HIGH"/>
      <StarIcon class="w-4 h-4 text-slate-500" v-if="priority === Priority.MEDIUM"/>
      <StarIcon class="w-4 h-4 text-slate-400" v-if="priority === Priority.LOW"/>
    </template>
    <template #text>
      <span class="text-slate-700" v-if="priority === Priority.HIGH">High</span>
      <span class="text-slate-500" v-if="priority === Priority.MEDIUM">Medium</span>
      <span class="text-slate-400" v-if="priority === Priority.LOW">Low</span>
    </template>
  </supply-card-header-property>
</template>

<script lang="ts" setup>
import { StarIcon } from '@heroicons/vue/24/solid';
import { PropType } from 'vue';
import { Priority } from '~~/utils/model/supply/supply';

defineProps({
  priority: {
    type: String as PropType<Priority>,
    required: true
  }
})
</script>

<style scoped>

</style>