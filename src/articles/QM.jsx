import React from "react";
import { Back } from "../components/buttons/Back";
import { Next } from "../components/buttons/Next";

export function QM() {
	return (
		<body>
			<div class="page-wrapper">
				<div class="page" id="qm-page">
					<Back />
					<h1>Experiential Learning Visualizations</h1>
					<p>
						As a part of the Design & Social Interaction Studio at Georgia Tech,
						I design and develop interactive visualizations to help students
						gain an experiential and intuitive understanding of quantum
						mechanics and semiconductor physics principles. The tools used to
						build them include Figma, p5.JS, D3.js, and GSAP.
					</p>
					<div>
						<img src="Assets/qm/qm_gif_width.gif" alt="" class="page_pic" />
						<img
							src="Assets/qm/qm_gif_arrows.gif"
							alt=""
							class="page_pic pic-adj"
						/>
						<img
							src="Assets/qm/qm_gif_cap.gif"
							alt=""
							class="page_pic pic-adj"
						/>
					</div>
					<Next link={"/noise"} />
				</div>
			</div>
		</body>
	);
}
