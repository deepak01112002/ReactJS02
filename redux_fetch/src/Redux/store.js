import { combineReducers, legacy_createStore } from "redux";
import { loginReducer } from "./LoginReducer/reducer";
import productReducer from "./productReducer/productReducer";

const allReducers = combineReducers({
    loginReducer,
    productReducer
})


export const store = legacy_createStore(allReducers)