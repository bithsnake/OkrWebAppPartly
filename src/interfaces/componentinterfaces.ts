import {
  OkrDto,
} from "../models/OkrDtos";
import { User } from "../types/types";

export interface IOkrPage {
  NavigationHandler? : ()=> void
  SetAddedClass?: boolean;
  OkrPeriod: number;
  ObjectiveIndex: number;
  user: User;
}
export interface IOkrDto {
  data: OkrDto;
}

export interface ILogin {
  logo: string;
  bgColor?: string;
  onLoggedIn: () => boolean;
}
export type OkrItemLengths = {
  MaxObjectivesItemLength : number,
  MaxOkrItemLength: number,
  MinObjectivesTitleLength: number,
  MinObjectivesDescriptionTitleLength: number,
  MinObjectivesDescriptionSubtitleLength: number,
};
