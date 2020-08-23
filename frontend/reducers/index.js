import {combineReducers} from 'redux';
import rootReducer from "./rootReducer";
import authReducer from "./authReducer";

export default combineReducers({root: rootReducer, auth: authReducer});