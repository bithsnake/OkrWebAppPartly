import { IOkrKeyResult, IOkrObjective, IOkrPeriod } from "../interfaces/OkrInterfaces";
import { KeyResultDto, ObjectiveDto } from "../models/OkrDtos";
import OKRDATA from '../json/mockSlide.json';

const url: string = 'http://localhost:5000';
export const UseLocalHost: boolean = false;
export let IsLoggedIn: boolean = false; // dummy testing


export const api = {
    FakeLogin: () => { IsLoggedIn = true; localStorage.setItem("LoggedIn", "true"); localStorage.setItem("IsAdmin","true"); console.log("logged in", IsLoggedIn);},
    FakeLogout: () => { IsLoggedIn = false; localStorage.removeItem("LoggedIn"); localStorage.removeItem("IsAdmin"); console.log("logged out", IsLoggedIn);},
    /**This method gets all the current periods.*/
    GetAllPeriods: async () => {

        if (UseLocalHost) {
            const res = await fetch(`${url}/periods`);
            const result: IOkrPeriod[] = await res.json();
            return result;
            
        } else {            
            const result: IOkrPeriod[] = OKRDATA.periods;
            return result;
        }
    },
    /**This method gets all objectives embedded in the respective periods.*/
    GetAllPeriodsWithEmbeddedObjectives: async () => {
        const res = await fetch(`${url}/periods?_embed=objectives`);
        const result = await res.json();
        return await result;
    },
    /**This method gets a specific period.*/
    GetPeriod: async (id: number) => {
        if (UseLocalHost) {
            const res = await fetch(`${url}/periods?id=${id}`);
            const result : IOkrPeriod = await res.json();
            return result;            
        } else {
            const result: IOkrPeriod = OKRDATA.periods[id];
            return result;
            
        }
    },
    /**This method adds a newly created keyresult to the current objective you reside in.*/
    PostAddKeyResultToCurrentObjective: async (dto: KeyResultDto) => {
        if (UseLocalHost) {
            let newDto : KeyResultDto = JSON.parse(JSON.stringify(dto));
            newDto.id = 0;
            const get = await fetch(`${url}/keyresults`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newDto),
            });
            return get;    
            
        } else {
            let newDto : KeyResultDto = JSON.parse(JSON.stringify(dto));
            newDto.id = 0;
            const addedKeyREsult = OKRDATA.keyresults.push(newDto);
            return addedKeyREsult;    
        }
    },
    /**This method changes only the current keyresults data in the specific objective*/
    PatchUpdateKeyResultsOnCurrentObjective: async (dto: KeyResultDto) => {
        if (UseLocalHost) {       
            const get = await fetch(`${url}/keyresults/${dto.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "task": dto.task,
                    "goal": dto.goal,
                    "progress" : dto.progress
                }),
                
            });
            console.log("PATCH Keyresults from fetch: ",get);
            return get;    
        } else {
            let modifiedItem : IOkrKeyResult = OKRDATA.keyresults[dto.id] = dto;
            return modifiedItem;       
        }
    },
}
export default api;