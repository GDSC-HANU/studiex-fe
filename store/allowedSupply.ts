import getAllowedSupplyApi from "~~/utils/api/allowedSupply/getAllowedSupplyApi"
import { AllowedSupplys } from "~~/utils/model/allowedSupply/allowedSupplys"
import { useSupplyStore } from "./supply"


export const useAllowedSupplyStore = defineStore('allowedSupply', () => {
  const allowedSupplys = ref<AllowedSupplys>(new AllowedSupplys([]))
  async function initAllowedSupplys() {
    if (allowedSupplys.value.allowedSupplys.length === 0)
      allowedSupplys.value = await getAllowedSupplyApi()
  }
  
  const supplyStore = useSupplyStore()
  const currentAllowedSupply = computed(() => {
    const current = allowedSupplys.value.getAllowSupplysBySubjectName(supplyStore.currentSupply.subjectName)
    if (current === null)
      throw new Error(`Wrong data, no allowedSupply match for supply ${supplyStore.currentSupply.subjectName}`)
    return current
  })
  const remainAllowedSupply = computed(() => {
    return allowedSupplys.value.allowedSupplys.filter(allowedSupply => {
      return !supplyStore.supplys.getSubjectNames().includes(allowedSupply.subjectName)
    })
  })

  return {
    allowedSupplys,
    initAllowedSupplys,
    currentAllowedSupply,
    remainAllowedSupply
  }
})