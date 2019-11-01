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
	// 'Thunk' enable us to return a func inside the 'Actn Cteators'
	// We return an arrow func that takes in 'dispatch' mtd 'getState' mtd
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// Halt Dispatch & Make async call to database or to an api(The Middleware)
		// Then resume dispatch
		// The 'dispatch' mtd is what dispatches an actn to the 'Reducer'
		// so we make async call to the firestore db to create new proj/save data to db

		// Create ref to firestore
		const firestore = getFirestore();
		firestore
			.collection("projects")
			.add({
				...project,
				authorFirstName: "Wayne",
				authorLastName: "Sharp",
				authorId: 12345,
				createdAt: new Date()
			}) // to post to firestore is async/returns a promise so we attach then()
			.then(() => {
				dispatch({
					type: "CREATE_PROJECT",
					payload: project
				});
			})
			.catch(err => {
				dispatch({
					type: "CREATE_PROJECT_ERROR",
					payload: err
				});
			});
	};
};
