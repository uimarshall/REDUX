import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects &&
				projects.map(project => {
					return (
						// The key must be attached to d parent element (Link) else there will be error
						<Link to={"/project/" + project.id} key={project.id}>
							return <ProjectSummary project={project} />
						</Link>
					);
				})}
		</div>
	);
};

export default ProjectList;
