import React, { Component } from "react";
import CreateProject from "../../store/actions/projectActions";
// Connect to redux store
import { connect } from "react-redux";

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
		this.props.CreateProject(this.state);
	};
	render() {
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
/*Our comp will dispatch an actn to the Reducers. 
1. What the 'dispatch' mtd does is to dispatch an actn from our comp hence ,
it calls the createProject func which is passed as params to the dispatch mtd
2. The dispatch is mapped to createProject pty which is attached to the props of our comp
It takes in the project we want to dispatch as params, which will be use to update the store
3. In this case to create a new Project*/
const mapDispatchToProps = dispatch => {
	return {
		CreateProject: project => dispatch(createProject(project))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(CreateProject);
