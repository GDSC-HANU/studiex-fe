import getSupplyApi from "~~/utils/api/supply/getSupplyApi"
import { Supply } from "~~/utils/model/supply/supply"
import { Supplys } from "~~/utils/model/supply/supplys"

export const useSupplyStore = defineStore('supply', () => {
  const supplys = ref<Supplys>(new Supplys([]))

  async function initSupplys() {
    if (supplys.value.supplys.length === 0)
      supplys.value = await getSupplyApi()
  }

  const currentSupply = ref<Supply | null>(null)
  function setCurrentSupply(subjectName: string) {
    currentSupply.value = supplys.value.getSupplyBySubjectName(subjectName) ?
    supplys.value.getSupplyBySubjectName(subjectName).clone() :
    null
  }

  return {
    supplys,
    initSupplys,
    currentSupply,
    setCurrentSupply
  }
})