import { combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    user: userReducer
})