// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  make: string[];
  model: string[];
  trim: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  make: [],
  model: [],
  trim: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  console.log(action.type);
  switch (action.type) {
    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        years: [...action.payload.year]
      };
    }

    case fromVehicle.LOAD_MAKE: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_MAKE_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_MAKE_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        make: [...action.payload.make]
      };
    }

    case fromVehicle.LOAD_MODEL: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_MODEL_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_MODEL_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        model: [...action.payload.model]
      };
    }

    case fromVehicle.LOAD_TRIM: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_TRIM_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_TRIM_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        trim: [...action.payload.trim]
      };
    }
  }

  return state;
}
