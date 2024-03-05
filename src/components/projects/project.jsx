import React from "react";
import { Link } from "react-router-dom";
import { ProjectType } from "./projectType";
import "../../App.css";

const Project = (props) => {
	const { title, description, types, image, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} className="link">
					<div className="project-container">
						<div className="project-text">
							<div>
								<div className="project-title">{title}</div>
								{/* <div class="right-arrow">
									<img
										src={require("../../Assets/icons/right-arrow.png")}
										alt="project"
									/>
								</div> */}
							</div>
							{/* <div className="project-type">{type}</div> */}
							<div className="project-types">
								{types.map((t) => {
									return <ProjectType type={t} class="project-type" />;
								})}
							</div>
						</div>
						<div className="project-image">
							<img src={image} alt="project" />
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
