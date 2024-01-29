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
						type={project.type}
						image={project.image}
						// image={require("../../Assets/kaleido/kaleido-title.png")} // with require}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
}
