// The rootReducer(index.js) houses all the reducers
// The store need to know which reducer is updating it
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
	// the 'postReducer' is called 'posts' here
	posts: postReducer
});
