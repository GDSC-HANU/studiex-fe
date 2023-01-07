import { AllowedSupplyItem } from "./allowedSupplyItem"

export class AllowedSupply {
  subjectName: string
  allowedSupplyItems: AllowedSupplyItem[]

  constructor(subjectName: string, allowedSupplyItems: AllowedSupplyItem[]) {
    this.subjectName = subjectName
    this.allowedSupplyItems = allowedSupplyItems
  }

  getAllowedSupplyItemByKey(key: string): AllowedSupplyItem | null {
    return this.allowedSupplyItems.find(
      allowedSupplyItem => allowedSupplyItem.key === key
    ) || null
  }
}