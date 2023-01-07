import { AllowedSupply } from "./allowedSupply"

export class AllowedSupplys {
  allowedSupplys: AllowedSupply[]

  constructor(allowedSupplys: AllowedSupply[]) {
    this.allowedSupplys = allowedSupplys
  }

  getAllowSupplysBySubjectName(subjectName: String): AllowedSupply | null {
    return this.allowedSupplys.find(allowedSupply => allowedSupply.subjectName === subjectName) || null
  }

  toJSON() {
    return { ...this }
  }
}