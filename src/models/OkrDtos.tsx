import { IOkr, IOkrKeyResult, IOkrObjective, IOkrPeriod } from "../interfaces/OkrInterfaces";
export class OkrDto implements IOkr {
  constructor() {
    this.id = null;
    this.periods = [{
      id: 0,
      period: "",
      subTitle: "",
    }];
    this.objectives = [{
      periodId: 0,
      id: 0,
      title: "",
    }];
  
    this.keyresults = [{
      periodId: 0,
      objectiveId: 0,
      id: 0,
      task: "",
      goal: 0,
      progress: 0
    }];
  }
    id: number | null;
    periods: PeriodDto[];
    objectives: ObjectiveDto[];
    keyresults : KeyResultDto[];
}

export class PeriodDto implements IOkrPeriod {
  constructor() {
    this.id = 0;
    this.period = "";
    this.subTitle = "";
  }
  id: number;
  period: string;
  subTitle: string;
}

export class ObjectiveDto implements IOkrObjective {
  
  constructor() {
    this.periodId = 0;
    this.id = 0;
    this.title = "";
    this.okrDescription = { title: "", subtitle: "", icon: '' };
  }
  periodId: number;
  id: number;
  title: string;
  okrDescription: { title: string; subtitle: string; icon: string; };
}

export class KeyResultDto implements IOkrKeyResult {
  constructor() {
    this.periodId = 0;
    this.objectiveId = 0;
    this.id = 0;
    this.task = "";
    this.goal = 0;
    this.progress = 0;
  }
  
  periodId: number;
  objectiveId: number;
  id: number;
  task: string;
  goal: number;
  progress: number;
}
