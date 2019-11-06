import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
	const { auth } = props;
	const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					ProjManager
				</Link>
				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	// What is returned is what we want to add to d props of our comp
	return {
		auth: state.firebase.auth
	};
};

export default connect(mapStateToProps)(Navbar);
