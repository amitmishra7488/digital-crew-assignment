import { myReducer } from "./reducer";
import { legacy_createStore as createStore,applyMiddleware } from "redux";
import logger from "redux-logger";



export const myStore= createStore(myReducer,applyMiddleware(logger));