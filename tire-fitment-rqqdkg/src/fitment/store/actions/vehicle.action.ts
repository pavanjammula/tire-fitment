import { Action } from "@ngrx/store";
// import model/interface from db.json here...
import { Year, Make, Model, Trim } from "../models/vehicle";

// Action constants
export const LOAD_YEARS = "[Fitment] Load Years";
export const LOAD_YEARS_FAIL = "[Fitment] Load Years Fail";
export const LOAD_YEARS_SUCCESS = "[Fitment] Load Years Success";

export const LOAD_MAKE = "[Fitment] Load Make";
export const LOAD_MAKE_FAIL = "[Fitment] Load Make Fail";
export const LOAD_MAKE_SUCCESS = "[Fitment] Load Make Success";

export const LOAD_MODEL = "[Fitment] Load Model";
export const LOAD_MODEL_FAIL = "[Fitment] Load Model Fail";
export const LOAD_MODEL_SUCCESS = "[Fitment] Load Model Success";

export const LOAD_TRIM = "[Fitment] Load Trim";
export const LOAD_TRIM_FAIL = "[Fitment] Load Trim Fail";
export const LOAD_TRIM_SUCCESS = "[Fitment] Load Trim Success";

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: Year) {} // Replace 'any' with interface
}

export class LoadMake implements Action {
  readonly type = LOAD_MAKE;
}
export class LoadMakeFail implements Action {
  readonly type = LOAD_MAKE_FAIL;
  constructor(public payload: Make) {}
}
export class LoadMakeSuccess implements Action {
  readonly type = LOAD_MAKE_SUCCESS;
  constructor(public payload: any) {} // Replace 'any' with interface
}

export class LoadModel implements Action {
  readonly type = LOAD_MODEL;
}
export class LoadModelFail implements Action {
  readonly type = LOAD_MODEL_FAIL;
  constructor(public payload: any) {}
}
export class LoadModelSuccess implements Action {
  readonly type = LOAD_MODEL_SUCCESS;
  constructor(public payload: Model) {} // Replace 'any' with interface
}

export class LoadTrim implements Action {
  readonly type = LOAD_TRIM;
}
export class LoadTrimFail implements Action {
  readonly type = LOAD_TRIM_FAIL;
  constructor(public payload: any) {}
}
export class LoadTrimSuccess implements Action {
  readonly type = LOAD_TRIM_SUCCESS;
  constructor(public payload: Trim) {} // Replace 'any' with interface
}
// Action types
export type VehicleAction =
  | LoadYears
  | LoadYearsFail
  | LoadYearsSuccess
  | LoadMake
  | LoadMakeFail
  | LoadMakeSuccess
  | LoadModel
  | LoadModelFail
  | LoadModelSuccess
  | LoadTrim
  | LoadTrimFail
  | LoadTrimSuccess;
