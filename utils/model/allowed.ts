import AllowedOperator from "./allowedOperator"

export interface Allowed {
    name: string,
    items: Array<{
        key: string,
        operator: AllowedOperator.ONE_OF,
        value: string[]
    } | {
        key: string,
        operator: AllowedOperator.MANY_OF,
        value: string[]
    } | {
        key: string,
        operator: AllowedOperator.BETWEEN,
        value: {
            minValue: number,
            maxValue: number,
            difference: number
        }
    }>
}