<template>
  <ul class="flex h-12 items-center">
    <li
      v-for="_priority in Object.keys(Priority)"
      :key="_priority"
      class="flex-1 text-center px-3 border-r border-slate-300 last:border-none transition"
      :class="`${_priority === currentSupply.priority ? 'font-bold' : 'text-slate-400 cursor-pointer hover:underline hover:text-slate-800'}`"
      @click="handlePriorityChange(_priority as Priority)"
    >
      {{ _priority }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Priority } from '~~/utils/model/supply/supply';
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()

function handlePriorityChange(priority: Priority) {
  currentSupply.priority = priority
}

</script>


<style scoped>
</style>