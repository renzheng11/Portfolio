import React from "react";

import "../../App.css";

export const ProjectType = (props) => {
	const { type } = props;

	return (
		<React.Fragment>
			<div className="project-type">{type}</div>
		</React.Fragment>
	);
};

// export ProjectType;
