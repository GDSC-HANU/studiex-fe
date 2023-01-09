export enum AllowedOperator {
  ONE_OF = "ONE_OF",
  MANY_OF = "MANY_OF",
  BETWEEN = "BETWEEN",
}

export interface AllowedDemandItem {
  key: string;
  operator: AllowedOperator;
  value: any;
  required: boolean;
}

export class AllowedDemandItemONE_OF implements AllowedDemandItem {
  key: string;
  operator: AllowedOperator.ONE_OF;
  value: string[];
  required: boolean;

  constructor(key: string, value: string[], required: boolean) {
    this.key = key;
    this.value = value;
    this.required = required;
  }
}

export class AllowedDemandItemMANY_OF implements AllowedDemandItem {
  key: string;
  value: string[];
  operator: AllowedOperator.MANY_OF;
  required: boolean;

  constructor(key: string, value: string[], required: boolean) {
    this.key = key;
    this.value = value;
    this.required = required;
  }
}

export class AllowedDemandItemBETWEEN implements AllowedDemandItem {
  key: string;
  value:
    | string[]
    | {
        minValue: number;
        maxValue: number;
        difference: number;
      };
  operator: AllowedOperator.BETWEEN;
  required: boolean;

  constructor(
    key: string,
    value:
      | string[]
      | {
          minValue: number;
          maxValue: number;
          difference: number;
        },
    required: boolean
  ) {
    this.key = key;
    this.value = value;
    this.required = required;
  }
}
