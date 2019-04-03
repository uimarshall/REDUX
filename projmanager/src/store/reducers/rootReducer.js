import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// Invoke the combineReducers func
const rootReducer = combineReducers({
	// The authReducer will update info on the 'auth' pty inside the state obj and so on
	auth: authReducer,
	project: projectReducer
});
export default rootReducer;
