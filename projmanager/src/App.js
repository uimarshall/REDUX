import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					{/* Put Routes */}
					<Switch>
						<Route exact path="/" component={Dashboard} />
						{/* Whenever we use the 'reac-router' to load in a comp, the router automatically attaches a prop to that comp*/}
						{/* The 'props' contains details about the router */}
						<Route path="/project/:id" component={ProjectDetails} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/create" component={CreateProject} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
