import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import moduleName from "./store/reducers/rootReducer";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";

// Create a store
// Create a 'rootReducer' that will combine all other 'Reducers' & pass it to the store

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
