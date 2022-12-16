import { Operator } from "~~/utils/model/supply";
import { AllowedOperator } from "./model/allowed";

export function mapOperator(operator: AllowedOperator.ONE_OF | AllowedOperator.MANY_OF | AllowedOperator.BETWEEN) {
  if (operator === AllowedOperator.ONE_OF)
    return Operator.IS;
  if (operator === AllowedOperator.MANY_OF)
    return Operator.ARE;
  if (operator === AllowedOperator.BETWEEN)
    return Operator.BETWEEN;
}
