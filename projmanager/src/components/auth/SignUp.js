import React, { Component } from "react";

class SignUp extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	};
	handleChange = e => {
		this.setState({
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
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<div className="input-field">
						{/* The 'htmlFor' in 'label' must match the 'id' in input tag */}
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						{/* The 'htmlFor' in 'label' must match the 'id' in input tag */}
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						{/* The 'htmlFor' in 'label' must match the 'id' in input tag */}
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
