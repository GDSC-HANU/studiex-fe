import { DemandItem, DemandItemCustom } from "./demandItem";

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export class Demand {
  subjectName: String;
  active: boolean;
  priority: Priority;
  demandItem: DemandItem[];
  customDemandItem: DemandItemCustom[];

  constructor(
    subjectName: String,
    active: boolean,
    priority: Priority,
    demandItem: DemandItem[],
    customDemandItem: DemandItemCustom[]
  ) {
    this.subjectName = subjectName;
    this.active = active;
    this.priority = priority;
    this.demandItem = demandItem;
    this.customDemandItem = customDemandItem;
  }

  clone() {
    return new Demand(
      this.subjectName,
      this.active,
      this.priority,
      this.demandItem.map((demandItem) => demandItem.clone()),
      this.customDemandItem.map((customDemandItem) => customDemandItem.clone())
    );
  }

  equals(other: Demand) {
    return (
      this.subjectName === other.subjectName &&
      this.active === other.active &&
      this.priority === other.priority &&
      this.demandItem.every((DemandItem, index) =>
        DemandItem.equals(other.demandItem[index])
      ) &&
      this.customDemandItem.every((DemandItem, index) =>
        DemandItem.equals(other.customDemandItem[index])
      )
    );
  }

  getDemandItemByKey(key: string) {
    return this.demandItem.find((demandItem) => demandItem.key === key) || null;
  }

  getDemandCustomItemByKey(key: string) {
    return (
      this.demandItem.find(
        (customDemandItem) => customDemandItem.key === key
      ) || null
    );
  }
}
