import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// Invoke the combineReducers func and use to combine our reducers into one
const rootReducer = combineReducers({
	// 'auth'& 'project' pty are accessed on the 'state' of d store as 'state.auth'
	// The authReducer will update info on the 'auth' pty inside the state obj and so on
	auth: authReducer,
	project: projectReducer
});
export default rootReducer;

// The 'auth' & 'project' pties which houses the 'Reducers' will be accessed on the state of our redux store
// "auth" & "project" now becomes pties of the state, hence:
// state.project & state.auth

/* THUNK
==============================================================
It enables us to run a middleware btw 'Actn dispatch & Reducer'
It enable us to perform asyncronous task inside our Actn Creator
It works in a such a way that it causes us not to return d Actn Creator but a func
HOW IT WORKS
==============================================================
Inside the func returned in the Actn Creator it does the ffg: 
1. It halts the dispatch
2. It then Performs asynchronous request(The Middleware)to enable us go out and grab data/comm wt db
3. It then resume dispatch as pass the data to d Reducer
All these will take place in the ACTN CREATORS*/
