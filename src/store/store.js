import {applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

import createReducer from "./reducers/createReducer";
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    todoState : todoReducer,
    createState : createReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

