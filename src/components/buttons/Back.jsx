import React from "react";
import { Link } from "react-router-dom";
export function Back() {
	return (
		<div>
			<Link to={"/"} class="back-btn">
				<img src={require("../../Assets/icons/left-arrow-color.png")} alt="" />
			</Link>
		</div>
	);
}
