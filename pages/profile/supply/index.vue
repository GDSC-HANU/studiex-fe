<template>
  <div class="supply">
    <supply-header class="p-3 mb-2 md:p-0 md:mb-5" />
    <div v-if="firstLoading">
      <supply-loading />
    </div>
    <div v-else-if="0">empty</div>
    <supply-card-list v-else/>
  </div>
</template>

<script lang="ts" setup>
import { useAllowedSupplyStore } from '~~/store/allowedSupply';
import { useSupplyStore } from '~~/store/supply';

const allowedSupplyStore = useAllowedSupplyStore()
const supplyStore = useSupplyStore()

const firstLoading = ref(true)


onMounted(async () => {
  await supplyStore.initSupplys()
  await allowedSupplyStore.initAllowedSupplys()
  firstLoading.value = false
})

</script>

<style scoped>

</style>