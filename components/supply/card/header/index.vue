<template>
  <div>
    <h2 class="text-2xl font-bold mb-2">{{ supply.subjectName }}</h2>
    <div class="flex gap-3">
      <supply-card-header-priority :priority="supply.priority" />
      <supply-card-header-active :active="supply.active" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Supply } from '~~/utils/model/supply/supply';

defineProps({
  supply: {
    type: Object as PropType<Supply>,
    required: true
  }
})
</script>

<style scoped>
</style>