import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import productsReducer from "./slice/productsSlice"
import userReducer from "./slice/userslice"

const reducer = combineReducers({
    productsState: productsReducer,
    userState:userReducer
});

const store = configureStore({
  reducer,
  middleware: [thunk].forEach(ee=>{}),
});

export default store;
