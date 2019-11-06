import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// Connect our comp to the redux store
import { connect } from "react-redux";
const ProjectDetails = props => {
	// console.log(props);
	// const id = props.match.params.id;
	const { project } = props;
	if (project) {
		return (
			<div>
				<div className="container section project-details">
					<div className="card z-depth-0">
						<div className="card-content">
							<span className="card-title">{project.title}</span>
							<p>{project.content}</p>
						</div>
						<div className="card-action grey lighten-4 grey-text">
							<div>
								Posted by {project.authorFirstName} {project.authorLastName}
							</div>
							<div>3rd June, 7am</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<p>Loading project....</p>
			</div>
		);
	}
};
const mapStateToProps = (state, ownProps) => {
	// ownProps is the props of our comp b4 we attach any props sync frm d redux state
	const id = ownProps.match.params.id;
	// Extract 'projects' collection frm firestore
	const projects = state.firestore.data.projects;
	// Grab the project 'id' from firestore
	const project = projects ? projects[id] : null;
	return {
		// map project to props of our comp, 'project.id' is what is stored in 'project' frm the ternary operatn
		project: project
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
