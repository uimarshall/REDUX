import React from "react";
import { NavLink } from "react-router-dom";

const SignInLinks = () => {
	return (
		// Float right
		<ul className="right">
			<li>
				<NavLink to="/create">New Project</NavLink>
			</li>
			<li>
				<NavLink to="/">Log Out</NavLink>
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

export default SignInLinks;
