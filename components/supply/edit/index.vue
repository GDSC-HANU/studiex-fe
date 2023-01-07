<template>
  <div class="bg-slate-50 shadow md:rounded-lg p-3 md:p-5 mt-5 md:m-3 md:mt-3">
    <supply-edit-header />
    <div
      class="border-t my-5"
      :class="currentSupply.active ? 'border-slate-300' : 'border-slate-400'"
    ></div>
    <supply-edit-item-list
    />
    <div
      class="border-t my-5"
      :class="currentSupply.active ? 'border-slate-300' : 'border-slate-400'"
    ></div>
    <supply-edit-add />
  </div>
</template>

<script lang="ts" setup>
import { useSupplyStore } from '~~/store/supply';

const { currentSupply } = useSupplyStore()
</script>

<style scoped>
</style>