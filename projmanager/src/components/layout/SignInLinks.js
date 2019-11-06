import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignInLinks = props => {
	return (
		// Float right
		<ul className="right">
			<li>
				<NavLink to="/create">New Project</NavLink>
			</li>
			<li>
				<a onClick={props.signOut}>Log Out</a>
			</li>
			<li>
				{/* btn-floating gives a circular shape */}
				<NavLink to="/" className="btn btn-floating cyan lighten-1">
					MM
				</NavLink>
			</li>
		</ul>
	);
};

// We mapDispatchToProps so that we can dispatch the 'signOut()' actn creator frm our comps
const mapDispatchToProps = dispatch => {
	return { signOut: () => dispatch(signOut()) };
};

export default connect(
	null,
	mapDispatchToProps
)(SignInLinks);
