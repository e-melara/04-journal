import { authTypes } from "../types/authTypes";

const initalState = {
 loading: false,
 error: null,
};

export const errorReducers = (state = initalState, action) => {
 switch (action.type) {
  case authTypes.SET_ERROR:
   return {
    ...state,
    error: action.payload,
   };

  case authTypes.UN_ERROR:
   return {
    ...state,
    error: null,
   };

  case authTypes.uiStartLoading:
   return {
    ...state,
    loading: true,
   };

  case authTypes.uiFinishLoading:
   return {
    ...state,
    loading: false,
   };

  default:
   return state;
 }
};
