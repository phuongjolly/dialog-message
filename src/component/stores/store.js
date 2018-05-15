import {dialogReducer} from "./dialogReducer";
import {combineReducers, createStore} from "redux"

const reducers = {
  dialogMessage: dialogReducer
};

const store = createStore(
    combineReducers(reducers)
);

export default store;