export enum Operator {
  IS = "IS",
  INCLUDE_ANY = "INCLUDE_ANY",
  INCLUDE_ALL = "INCLUDE_ALL",
  BETWEEN = "BETWEEN",
}

export interface DemandItem {
  key: string;
  operator: Operator;
  value: any;
  description: string;
  clone(): DemandItem;
  equals(other: DemandItem): boolean;
}

export class DemandItemIS implements DemandItem {
  key: string;
  value: string;
  operator: Operator.IS;
  description: string;

  constructor(key: string, value: string, description: string) {
    this.key = key;
    this.value = value;
    this.description = description;
  }

  clone() {
    return new DemandItemIS(this.key, this.value, this.description);
  }

  equals(other: DemandItem): boolean {
    return (
      this.key === other.key &&
      this.value === other.value &&
      this.operator === other.operator &&
      this.description === other.description
    );
  }
}

export class DemandItemANY implements DemandItem {
  key: string;
  value: string[];
  operator: Operator.INCLUDE_ANY;
  description: string;

  constructor(key: string, value: string[], description: string) {
    this.key = key;
    this.value = value;
    this.description = description;
  }

  clone() {
    return new DemandItemANY(this.key, this.value, this.description);
  }

  equals(other: DemandItem): boolean {
    return (
      this.key === other.key &&
      this.value === other.value &&
      this.operator === other.operator &&
      this.description === other.description
    );
  }
}

export class DemandItemALL implements DemandItem {
  key: string;
  value: string[];
  operator: Operator.INCLUDE_ALL;
  description: string;

  constructor(key: string, value: string[], description: string) {
    this.key = key;
    this.value = value;
    this.description = description;
  }

  clone() {
    return new DemandItemALL(this.key, this.value, this.description);
  }

  equals(other: DemandItem): boolean {
    return (
      this.key === other.key &&
      this.value === other.value &&
      this.operator === other.operator &&
      this.description === other.description
    );
  }
}

export class DemandItemBETWEEN implements DemandItem {
  key: string;
  value: {
    minValue: number;
    maxValue: number;
  };
  operator: Operator.BETWEEN;
  description: string;

  constructor(
    key: string,
    value: { minValue: number; maxValue: number },
    description: string
  ) {
    this.key = key;
    this.value = value;
    this.description = description;
  }

  clone() {
    return new DemandItemBETWEEN(this.key, this.value, this.description);
  }

  equals(other: DemandItem): boolean {
    return (
      this.key === other.key &&
      this.value.minValue === other.value.minVal &&
      this.value.maxValue === other.value.maxVal &&
      this.operator === other.operator &&
      this.description === other.description
    );
  }
}

export class DemandItemCustom {
  key: string;
  value: string;
  description: string;

  constructor(key: string, value: string, description: string) {
    this.key = key;
    this.value = value;
    this.description = description;
  }

  clone() {
    return new DemandItemCustom(this.key, this.value, this.description);
  }

  equals(other: DemandItemCustom): boolean {
    return (
      this.key === other.key &&
      this.value === other.value &&
      this.description === other.description
    );
  }
}
