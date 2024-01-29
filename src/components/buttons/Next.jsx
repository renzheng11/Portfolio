import React from "react";
import { Link } from "react-router-dom";

export const Next = (props) => {
	const { link } = props;
	return (
		<div>
			<Link to={`${link}`} class="next-btn">
				Next Project
			</Link>
		</div>
	);
};

// export default Next;
