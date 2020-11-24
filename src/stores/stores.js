import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { errorReducers } from "../reducers/errorReducers";

const reducers = combineReducers({
 auth: authReducer,
 err: errorReducers,
 notes: notesReducer,
});

const composeEnhancers =
 (typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
 compose;

export const store = createStore(
 reducers,
 composeEnhancers(applyMiddleware(thunk))
);
