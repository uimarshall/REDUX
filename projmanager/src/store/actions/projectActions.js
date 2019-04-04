// Normally without 'thunk', our actn creators takes the shape below:
// It just returns the 'type of actn' and the 'payload'.
/*export const createProject = project => {
	return {
		type: "ADD_PROJECT",
		payload: project
	};
};*/

// WITH THUNK: We return a 'func' instead of an 'obj' inside the 'actn creator'
export const createProject = project => {
	// We return an arrow func that takes in 'dispatch' mtd 'getState' mtd
	return (dispatch, getState) => {
		// Halt Dispatch & Make async call to database or to an api(The Middleware)
		// Then resume dispatch
		dispatch({
			type: "CREATE_PROJECT",
			payload: project
		});
	};
};