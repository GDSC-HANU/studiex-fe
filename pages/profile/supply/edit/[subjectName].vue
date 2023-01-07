<template>
  <div>
    <div v-if="firstLoading">
      <supply-edit-loading />
    </div>
    <template v-else>
      <supply-edit />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useSupplyStore } from '~~/store/supply';
import { useAllowedSupplyStore } from '~~/store/allowedSupply';

const route = useRoute()
const router = useRouter()
const supplyStore = useSupplyStore()
const allowedSupplyStore = useAllowedSupplyStore()

const firstLoading = ref(true)
const subjectName: string = route.params.subjectName as string

const loading = ref(false)

onMounted(async () => {
  await supplyStore.initSupplys()
  await allowedSupplyStore.initAllowedSupplys()
  firstLoading.value = false

  if (supplyStore.supplys.getSupplyBySubjectName(subjectName) === null)
    return router.push('/profile/supply')

  supplyStore.setCurrentSupply(subjectName)
})
</script>

<style scoped>
</style>