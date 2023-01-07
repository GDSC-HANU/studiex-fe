export interface SupplyItem {
  key: string,
  value: any,
  operator: Operator,
  description: string,
  clone(): SupplyItem,
  equals(other: SupplyItem): boolean
}

export class SupplyItemIS implements SupplyItem {
  key: string
  value: string
  operator = Operator.IS
  description: string
  constructor(key: string, value: string, description: string) {
    this.key = key
    this.value = value
    this.description = description
  }

  clone() {
    return new SupplyItemIS(this.key, this.value, this.description)
  }

  equals(other: SupplyItemIS) {
    return this.key === other.key
    && this.value === other.value
    && this.operator === other.operator
    && this.description === other.description
  }
}


export class SupplyItemARE implements SupplyItem {
  key: string
  value: string[]
  operator = Operator.ARE
  description: string
  constructor(key: string, value: string[], description: string) {
    this.key = key
    this.value = value
    this.description = description
  }

  clone() {
    return new SupplyItemARE(this.key, this.value, this.description)
  }

  equals(other: SupplyItemARE) {
    return this.key === other.key
    && this.value.every((value, index) => value === other.value[index])
    && this.value.length === other.value.length
    && this.operator === other.operator
    && this.description === other.description
  }
}


export class SupplyItemBETWEEN implements SupplyItem {
  key: string
  value: {
    minValue: number,
    maxValue: number
  }
  operator = Operator.BETWEEN
  description: string
  constructor(key: string, value: { minValue: number, maxValue: number }, description: string) {
    this.key = key
    this.value = value
    this.description = description
  }

  clone() {
    return new SupplyItemBETWEEN(this.key, this.value, this.description)
  }

  equals(other: SupplyItemBETWEEN) {
    return this.key === other.key
    && this.value.minValue === other.value.minValue
    && this.value.maxValue === other.value.maxValue
    && this.operator === other.operator
    && this.description === other.description
  }
}

export class SupplyItemCustom {
  key: string
  value: string
  description: string

  constructor(key: string, value: string, description: string) {
    this.key = key
    this.value = value
    this.description = description
  }

  clone() {
    return new SupplyItemCustom(this.key, this.value, this.description)
  }

  equals(other: SupplyItemCustom) {
    return this.key === other.key
    && this.value === other.value
    && this.description === other.description
  }
}

export enum Operator {
  IS = 'IS',
  ARE = 'ARE',
  BETWEEN = 'BETWEEN'
}