import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
	state = {
		email: "",
		password: ""
	};
	handleChange = e => {
		this.setState({
			// Grab the 'id' of the target element and update the 'state' wt whatever is typed in
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		this.props.signIn(this.state);
	};
	render() {
		// Destructure authError frm the props of this comp
		const { authError } = this.props;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign In</h5>
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
						<button className="btn pink lighten-1 z-depth-0">Login</button>
						<div className="red-text center">
							{authError ? <p>{authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// This comp dispatch to d reducer input received frm d formfields  using the 'signIn' actn creator
		signIn: creds => dispatch(signIn(creds))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignIn);
