import { legacy_createStore } from "redux";
import { loginReducer } from "./LoginReducer/reducer";



export const store = legacy_createStore(loginReducer)