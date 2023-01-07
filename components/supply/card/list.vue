<template>
  <div class="md:p-3">
    <supply-card
      v-for="supply in supplyStore.supplys.supplys"
      :key="supply.subjectName"
      :supply="supply"
      class="mb-5 md:mb-8"
    />
    <supply-add
      class="mb-5 md:mb-8"
      v-if="allowedSupplyStore.remainAllowedSupply.length !== 0"
    />
  </div>
</template>

<script lang="ts" setup>
import { useSupplyStore } from '~~/store/supply';
import { useAllowedSupplyStore } from '~~/store/allowedSupply';

const supplyStore = useSupplyStore()
const allowedSupplyStore = useAllowedSupplyStore()

</script>

<style scoped>
</style>