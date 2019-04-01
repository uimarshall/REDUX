import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initState = {};

// create an Array of middleware to be used
const middleware = [thunk];

// createStore takes 3 params: createStore(rootReducer, initState, enhancer( e.g Middleware));
const store = createStore(
	rootReducer,
	initState,
	applyMiddleware(...middleware)
);
export default store;
