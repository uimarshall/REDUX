import React, { Component } from "react";
// Connect to redux store
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
	state = {
		title: "",
		content: ""
	};
	title;
	handleChange = e => {
		this.setState({
			// Grab the 'id' of the target element and update the 'state' wt whatever is typed in
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		// CreateProject func call
		this.props.createProject(this.state);
	};
	render() {
		const { auth } = this.props;
		// Route Protection: If no auth uid, return to signin else render the page
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Create New Project</h5>
					<div className="input-field">
						{/* The 'htmlFor' in 'label' must match the 'id' in input tag */}
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Project Content</label>
						<textarea
							id="content"
							cols="30"
							rows="10"
							className="materialize-textarea"
							onChange={this.handleChange}
						/>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};
/*Our comp will dispatch an actn to the Reducers. 
1. What the 'dispatch' mtd does is to dispatch an actn from our comp hence ,
it calls the createProject func which is passed as params to the dispatch mtd
2. The dispatch is mapped to createProject func which is attached to the props of our comp
It takes in the project we want to dispatch as params, which will be use to update the store
3. In this case to create a new Project*/
const mapDispatchToProps = dispatch => {
	return {
		// The pty(createProject) that will be attached to our props is a func that performs dispatch for our comp.
		createProject: project => dispatch(createProject(project))
	};
};
// NOTE, mapStateToProps must be the 1st parameter of the 'connect' mtd, hence we pass null in its absence
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateProject);

// ========WHEN WE CALL THE createProject function==========
// 1. we call it by issuing 'this.props.createProject' to invoke it.
// 2. It takes in the project we want to create frm the form fields
// 3. It returns the dispatch mtd which takes in the other 'createProject' mtd frm the actn creators
// and pass in the project we want to craete
// 4. The createProject mtd now interracts wt the firestore db
// 5. The payload frm firebase is now passed to the reducer to update the state
