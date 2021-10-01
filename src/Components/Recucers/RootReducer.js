import { combineReducers } from "redux";
import { addVideoReducer } from "./addVideo";
import { themeChange, menuChange, categoryChange, viewChange } from "./featureReducer";

const rootReducer =  combineReducers({
    addVideoReducer,
    themeChange,
    menuChange,
    categoryChange,
    viewChange
})

export default rootReducer;