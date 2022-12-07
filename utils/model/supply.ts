import Operator from "./operator"

export interface Supply {
    name: string,
    items: Array<{
        key: string,
        operator: Operator.IS,
        value: string
    } | {
        key: string,
        operator: Operator.ARE,
        value: string[]
    } | {
        key: string,
        operator: Operator.BETWEEN,
        value: {
            minValue: number,
            maxValue: number
        }
    }>
}