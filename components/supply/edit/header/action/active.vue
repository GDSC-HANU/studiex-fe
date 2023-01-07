<template>
  <div
    class="flex items-center gap-3 transition hover:bg-slate-200 active:bg-slate-300 cursor-pointer h-10 px-3"
    @click="toggleActive"
  >
    <StarIconOutline
      class="w-6 h-6 text-gray-400"
      v-show="!currentSupply.active"
    />
    <StarIconSolid
      class="w-6 h-6 text-yellow-400"
      v-show="currentSupply.active"
    />
    <p v-show="!currentSupply.active">Active Supply</p>
    <p v-show="currentSupply.active">Disable Supply</p>
  </div>
</template>

<script lang="ts" setup>
import { StarIcon as StarIconOutline } from '@heroicons/vue/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/vue/24/solid';
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()

function toggleActive() {
  currentSupply.active = !currentSupply.active
}
</script>

<style scoped>
</style>