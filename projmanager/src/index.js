// CONNECTING REDUX TO FIREBASE/FIRESTORE
// ==========================================
/**1. install 'react-redux-firebase' pkg-this provides bindings to firebase service as a whole
 * 2. install 'redux-firestore'-provides redux bindings to firestore databases in particular
 * a. Installing these pkgs helps us to use firebase API to interract wt our db inside the actn creators.
 * b. We will also be able to sync our firestore db wt our react/redux 'store'.
 * 3. Import getFirestore & getFirebase to help us access d firebase API inside the 'Actn Creators'
 * we attach the 'getFirestore & getFirebase' to 'thunk' using 'withExtraArgument' mtd.
 * 'withExtraArgument' helps us to add extra argument to funcs returned inside the Actn creators made possible by 'Thunk'
  4. Next we connect our pkgs to project we want them interract wt in firebase/firestore using d ffg store enhancers:
 a. reduxFirestore(fbConfig),we pass in our firebase config to alert 'getFirestore & getFirebase'in knowing which proj to work with/connect to.
 b. reactReduxFirebase(fbConfig)
 The above 2 enhancers a&b will enable 'getFirestore & getFirebase' to know which project to connect to when they are used.
  */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// 'compose' is used to add more store enhancers
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

// Create a store
// Create a 'rootReducer' that will combine all other 'Reducers' & pass it to the store
// the rootReducer is the reducer associated wt the store, to update d state of d store

const store = createStore(
	rootReducer,
	// Store enhancers
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig)
	)
);

ReactDOM.render(
	// provide our app with the store
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
