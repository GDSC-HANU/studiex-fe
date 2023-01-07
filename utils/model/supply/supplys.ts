import { Priority, Supply } from "./supply"

export class Supplys {
  supplys: Supply[]

  constructor(supplys: Supply[]) {
    this.supplys = supplys
  }

  getSupplyBySubjectName(subjectName: string): Supply | null {
    return this.supplys.find(supply => supply.subjectName === subjectName) || null
  }

  getSupplysByPriority(priority: Priority) {
    return this.supplys.filter(supply => supply.priority = priority)
  }

  getActiveSupplys() {
    return this.supplys.filter(supply => supply.active)
  }

  getSubjectNames() {
    return this.supplys.map(supply => supply.subjectName)
  }

  clone() {
    return new Supplys(this.supplys.map(supply => supply.clone()))
  }

  equals(other: Supplys) {
    return this.supplys.length === other.supplys.length
      && this.supplys.every((supply, index) => supply.equals(other.supplys[index]))
  }

  toJSON() {
    return { ...this }
  }
}