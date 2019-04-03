import React, { Component } from "react";

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
		console.log(this.state);
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

export default CreateProject;
