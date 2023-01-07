<template>
  <div class="add-supply shadow">
    <span>Add Supply</span>
    <PlusIcon class="w-6 h-6" />
  </div>
</template>

<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
.add-supply {
  @apply bg-slate-50 p-5 rounded-lg flex gap-3 items-center justify-center cursor-pointer transition
  hover:bg-slate-100 active:bg-slate-300;
}
</style>
