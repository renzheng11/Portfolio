import React from "react";
import Project from "./project";
import INFO from "../../data/content";

import "../../App.css";

export function AllProjects() {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						title={project.title}
						description={project.description}
						types={project.types}
						image={project.image}
						shape={project.shape}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
}
