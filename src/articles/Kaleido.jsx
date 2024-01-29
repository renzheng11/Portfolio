import React from "react";
import { Back } from "../components/buttons/Back";
import { Next } from "../components/buttons/Next";

export function Kaleido() {
	return (
		<body>
			<div class="page-wrapper">
				<div class="page">
					<Back />
					<h1>Film Festival Branding</h1>
					<p>Case study on film festival visual assets</p>

					<div>
						<img
							src={require("../Assets/kaleido/Poster.png")}
							alt=""
							class="page_pic"
						/>
						<img
							src={require("../Assets/kaleido/Tickets.png")}
							alt=""
							class="page_pic pic-adj"
						/>
						<img
							src={require("../Assets/kaleido/Bracelets.png")}
							alt=""
							class="page_pic pic-adj"
						/>
						<img
							src={require("../Assets/kaleido/Website-Landing.png")}
							alt=""
							class="page_pic pic-adj"
						/>
					</div>

					<Next link={"/qm"} />
				</div>
			</div>
		</body>
	);
}
