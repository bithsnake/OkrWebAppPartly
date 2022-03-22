import { KeyResultDto, ObjectiveDto, PeriodDto } from "../models/OkrDtos";

export interface IOkr {
    id?: number | null;
    periods: PeriodDto[];
    objectives: ObjectiveDto[];
    keyresults: KeyResultDto[];
}
/** */
export interface IOkrPeriod {
    id: number;
    period: string;
    subTitle: string;
}
export interface IOkrObjective{
    periodId : number
    id: number;
    title: string;
    okrDescription: {
        title: string,
        subtitle: string,
        icon: string,
    },
}
export interface IOkrKeyResult {
    periodId: number,
    objectiveId : number,
    id: number,
    task: string,
    goal: number,
    progress : number  
}