import { AllowedDemand } from "./allowedDemand";

export class AllowedDemands {
  allowedDemands: AllowedDemand[];

  constructor(allowedDemands: AllowedDemand[]) {
    this.allowedDemands = allowedDemands;
  }

  getAllowedDemandsBySubjectName(subjectName: string): AllowedDemand | null {
    return (
      this.allowedDemands.find(
        (allowedDemand) => allowedDemand.subjectName === subjectName
      ) || null
    );
  }

  toJSON() {
    return { ...this };
  }
}
