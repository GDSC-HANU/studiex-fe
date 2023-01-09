import { AllowedDemandItem } from "./allowedDemandItem";

export class AllowedDemand {
  subjectName: string;
  allowedDemandItems: AllowedDemandItem[];

  constructor(subjectName: string, allowedDemandItems: AllowedDemandItem[]) {
    this.subjectName = subjectName;
    this.allowedDemandItems = allowedDemandItems;
  }

  getAllowedDemandItemByKey(key: string): AllowedDemandItem | null {
    return (
      this.allowedDemandItems.find(
        (allowedDemandItem) => allowedDemandItem.key === key
      ) || null
    );
  }
}
