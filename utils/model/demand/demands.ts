import { Demand, Priority } from "./demand";

export class Demands {
  demands: Demand[];

  constructor(demands: Demand[]) {
    this.demands = demands;
  }

  getDemandBySubjectName(subjectName: string) {
    return (
      this.demands.find((demand) => demand.subjectName === subjectName) || null
    );
  }

  getDemandsByPriority(priority: Priority) {
    return (
      this.demands.filter((demand) => demand.priority === priority) || null
    );
  }

  getActiveDemands() {
    return this.demands.filter((demand) => demand.active);
  }

  getSubjectNames() {
    return this.demands.map((demand) => demand.subjectName);
  }

  clone() {
    return new Demands(this.demands.map((demand) => demand.clone()));
  }

  equals(other: Demands) {
    return (
      this.demands.length === other.demands.length &&
      this.demands.every((demand, index) => demand.equals(other.demands[index]))
    );
  }

  toJSON() {
    return { ...this };
  }
}
