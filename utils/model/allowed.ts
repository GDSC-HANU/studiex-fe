export interface AllowedSupplyItem {
    key: string,
    operator: AllowedOperator,
    value: any
}

export interface AllowedSupplyItemONE_OF extends AllowedSupplyItem {
    key: string,
    operator: AllowedOperator.ONE_OF,
    value: string[]
}

export interface AllowedSupplyItemMANY_OF extends AllowedSupplyItem {
    key: string,
    operator: AllowedOperator.MANY_OF,
    value: string[]
}

export interface AllowedSupplyItemBETWEEN extends AllowedSupplyItem {
    key: string,
    operator: AllowedOperator.BETWEEN,
    value: {
        minValue: number,
        maxValue: number,
        difference: number
    }
}

enum AllowedOperator {
    'ONE_OF' = 'ONE_OF',
    'MANY_OF' = 'MANY_OF',
    'BETWEEN' = 'BETWEEN'
}
export default interface Allowed {
    subjectName: string,
    allowedSupplyItems: Array<AllowedSupplyItemONE_OF | AllowedSupplyItemMANY_OF | AllowedSupplyItemBETWEEN>
}

export { AllowedOperator }