import {applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import todoReducer from "./reducers/todoReducer";
import createReducer from "./reducers/createReducer";
import completedReducer from "./reducers/completedReducer";
import removeReducer from "./reducers/removeReducer";



const rootReducer = combineReducers({
    todoState : todoReducer,
    createState : createReducer,
    completedState : completedReducer,
    removeState : removeReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

