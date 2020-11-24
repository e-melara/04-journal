import { authTypes } from "../types/authTypes";

const initialState = {
 notes: [],
 active: null,
};

export const notesReducer = (state = initialState, action) => {
 switch (action.type) {
  case authTypes.notesAddNew:
   console.log(action.payload);
   return {
    ...state,
    notes: [action.payload, ...state.notes],
   };
  case authTypes.notesActive:
   return {
    ...state,
    active: { ...action.payload },
   };

  case authTypes.notesLoad:
   return {
    ...state,
    notes: action.payload,
   };

  case authTypes.notesUpdated:
   return {
    ...state,
    notes: state.notes.map((note) =>
     note.id === action.payload.id ? { ...action.payload.note } : note
    ),
   };

  case authTypes.notesDelete:
   return {
    ...state,
    active: null,
    notes: state.notes.filter((note) => note.id !== action.payload),
   };

  case authTypes.notesLogoutCleaning:
   return {
    ...state,
    notes: [],
   };

  default:
   return state;
 }
};
