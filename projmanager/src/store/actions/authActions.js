import { getFirebase } from "react-redux-firebase";

export const signIn = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		// Initialise firebase instance
		const firebase = getFirebase();
		// Use firebase authentication service to signin wt email & password
		// If the email & password is correct it will sign a user in and give a response
		// We then dispatch the response by attaching the 'then()' mtd
		// Any 'action' dispatched is received in the 'reducer'
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: "LOGIN_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "LOGIN_ERROR", err });
			});
	};
};

// Firebase signout func

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "SIGNOUT_SUCCESS" });
			});
	};
};
