// The info on the state i.e 'projects' array will be stored in the 'project'
// pty in the combineReducer
// So we can access the projects array in a comp that subscribes as: 'state.project.projects'
// or destructure 'projects' as  {projects} = state.project

const initState = {
	projects: [
		{
			id: "1",
			title: "build trello",
			content: "Just finished the preparation for trello build"
		},
		{
			id: "2",
			title: "Buy Course",
			content: "I need to buy nodejs course from udemy"
		},
		{
			id: "3",
			title: "Mockup",
			content: "Close to the mockup for the project"
		}
	]
};

// The 'state' params is the 'state of the redux store'
const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_PROJECT":
			console.log("created project", action.payload);
			return state;
		case "CREATE_PROJECT_ERROR":
			console.log("created project error", action.payload);
			return state;
		default:
			return state;
	}
};
export default projectReducer;
