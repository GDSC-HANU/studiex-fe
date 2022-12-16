import Allowed from "~~/utils/model/allowed"

export const useAllowStore = defineStore('allow', () => {
  let allows: Allowed[] = reactive([])

  function initAllows(newAllows: Allowed[]) {
    newAllows.forEach(newAllow => allows.push(newAllow))
  }

  return { allows, initAllows }
})