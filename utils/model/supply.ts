export interface SupplyItem {
    key: string,
    operator: Operator,
    value: any
}

export interface SupplyItemIS extends SupplyItem {
    operator: Operator.IS,
    value: string
}

export interface SupplyItemARE extends SupplyItem {
    operator: Operator.ARE,
    value: string[]
}

export interface SupplyItemBETWEEN extends SupplyItem {
    operator: Operator.BETWEEN,
    value: {
        minValue: number,
        maxValue: number
    }
}


export default interface Supply {
    subjectName: string,
    active: boolean,
    supplyItems: Array<SupplyItemIS | SupplyItemARE | SupplyItemBETWEEN>
}

enum Operator {
    'IS' = 'IS',
    'ARE' = 'ARE',
    'BETWEEN' = 'BETWEEN'
}

export { Operator }