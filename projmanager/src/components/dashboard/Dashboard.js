import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

// Connect to redux store
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
	return {
		projects: state.project.projects
	};
};

// By connecting the Dashboard and passing 'mapStateToProps'the store knows the data(projects) to give out
export default connect(mapStateToProps)(Dashboard);
