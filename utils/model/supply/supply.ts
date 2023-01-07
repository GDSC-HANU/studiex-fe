import { SupplyItem, SupplyItemCustom } from "./supplyItem"

export class Supply {
  subjectName: string
  active: boolean
  priority: Priority
  supplyItems: SupplyItem[]
  customSupplyItems: SupplyItemCustom[]

  constructor(subjectName: string, active: boolean, priority: Priority, supplyItems: SupplyItem[], customSupplyItems: SupplyItemCustom[]) {
    this.subjectName = subjectName
    this.active = active
    this.priority = priority
    this.supplyItems = supplyItems
    this.customSupplyItems = customSupplyItems
  }

  clone() {
    return new Supply(
      this.subjectName,
      this.active,
      this.priority,
      this.supplyItems.map(supplyItem => supplyItem.clone()),
      this.customSupplyItems.map(customSupplyItem => customSupplyItem.clone())
    )
  }

  equals(other: Supply) {
    return this.subjectName === other.subjectName
      && this.active === other.active
      && this.priority === other.priority
      && this.supplyItems.length === other.supplyItems.length
      && this.supplyItems.every((supplyItem, index) => supplyItem.equals(other.supplyItems[index]))
      && this.customSupplyItems.length === other.customSupplyItems.length
      && this.customSupplyItems.every((customSupplyItem, index) => customSupplyItem.equals(other.customSupplyItems[index]))
  }

  getSupplyItemByKey(key: string): SupplyItem | null {
    return this.supplyItems.find(
      supplyItem => supplyItem.key === key
    ) || null
  }

  getSupplyItemCustomByKey(key: string): SupplyItemCustom | null {
    return this.customSupplyItems.find(
      customSupplyItem => customSupplyItem.key === key
    ) || null
  }
}

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}