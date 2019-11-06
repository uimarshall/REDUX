const initState = {
	authError: null
};

// Anything we return in the state of 'authReducer' is attached to the 'auth' pty of the actn creators
// 'authReducer' is a value attached to d 'auth' pty in d actn creators
const authReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOGIN_ERROR":
			console.log("login error");
			return { ...state, authError: "Login failed" };
		case "LOGIN_SUCCESS":
			console.log("login success");
			return { ...state, authError: null };
		case "SIGNOUT_SUCCESS":
			console.log("signout success");
			return state;
		default:
			return state;
	}
};
export default authReducer;
