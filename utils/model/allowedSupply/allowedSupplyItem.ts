export interface AllowedSupplyItem {
  key: string,
  operator: AllowedOperator,
  value: any,
  required: boolean
}

export class AllowedSupplyItemONE_OF implements AllowedSupplyItem {
  key: string
  operator = AllowedOperator.ONE_OF
  value: string[]
  required: boolean

  constructor(key: string, value: string[], required: boolean) {
    this.key = key
    this.value = value
    this.required = required
  }
}

export class AllowedSupplyItemMANY_OF implements AllowedSupplyItem {
  key: string
  operator = AllowedOperator.MANY_OF
  value: string[]
  required: boolean

  constructor(key: string, value: string[], required: boolean) {
    this.key = key
    this.value = value
    this.required = required
  }
}

export class AllowedSupplyItemBETWEEN implements AllowedSupplyItem {
  key: string
  operator = AllowedOperator.BETWEEN
  value: {
    minValue: number,
    maxValue: number,
    difference: number
  }
  required: boolean

  constructor(key: string, value: {
    minValue: number,
    maxValue: number,
    difference: number
  }, required: boolean) {
    this.key = key
    this.value = value
    this.required = required
  }
}

export enum AllowedOperator {
  'ONE_OF' = 'ONE_OF',
  'MANY_OF' = 'MANY_OF',
  'BETWEEN' = 'BETWEEN'
}