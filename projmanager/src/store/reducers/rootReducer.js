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

// The 'auth' & 'project' properties which houses the 'Reducers' will be accessed on the state of our redux store
// "auth" & "project" now becomes pties of the state, hence:
// state.project & state.auth

/* THUNK
==============================================================
It enables us to run a middleware btw 'Actn dispatch & Ruducer'
HOW IT WORKS
============================================================== 
1. It halts the dispatch
2. Performs asynchronous request(The Middleware)to enable us go out and grab data
3. resume dispatch
All these will take place in the ACTN CREATORS*/
