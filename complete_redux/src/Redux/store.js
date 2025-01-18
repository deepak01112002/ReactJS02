import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { loginReducer } from "./LoginReducer/loginReducer";
import { thunk } from "redux-thunk";
import { productReducer } from "./ProductReducer/productReducer";

const allReducer = combineReducers({
    loginReducer,
    productReducer
})


export const store = legacy_createStore(allReducer, applyMiddleware(thunk))