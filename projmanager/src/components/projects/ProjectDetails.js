import React from "react";

const ProjectDetails = props => {
	// console.log(props);
	const id = props.match.params.id;
	return (
		<div>
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">Project Title - {id}</span>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Provident cum obcaecati vel corrupti nulla corporis eum, laborum
							odit pariatur. Numquam voluptate quas, illo neque quis sunt
							accusamus nulla dolorum sapiente!
						</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>Posted by the Enclaves</div>
						<div>3rd June, 7am</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
