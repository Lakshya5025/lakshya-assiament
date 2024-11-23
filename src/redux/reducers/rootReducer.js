import { combineReducers } from "redux";
import buttonReducer from "./buttonReducer";
import tileReducer from "./tileReducer";

const rootReducer = combineReducers({
    button: buttonReducer,
    tile: tileReducer,
});

export default rootReducer;
