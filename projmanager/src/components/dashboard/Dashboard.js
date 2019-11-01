import React, { Component } from "react";
// Connect this comp to firestore
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
// Connect our comp to the redux store
import { connect } from "react-redux";
// The 'connect' func will connect our comp(Dashboard) to the store and grant access to the state of the store

class Dashboard extends Component {
	render() {
		const { projects } = this.props;
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

// Map the state of the store to the props of our Component(Dashboard)
const mapStateToProps = state => {
	console.log(state);
	return {
		// 'projects' is mapped to the props of our comp,projects will be accessed on the props of our comp
		// This will produce the data we want to get from our store
		// projects: state.project.projects
		// Grab data from firestore
		projects: state.firestore.ordered.projects
	};
};

// By connecting the Dashboard and passing 'mapStateToProps'the store knows the data(projects) to give out
// compose is used to combine 2 or more higher comps to other
// We only want to connect this comp to single collin firestore which is 'projects'
// what this means is that, When this comp is Active, the coll to listen to is 'projects'
export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "projects" }])
)(Dashboard);
