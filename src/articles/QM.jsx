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
					<p>Role: Product Design, Data Vis, Development</p>
					<img
						src={require("../Assets/qm/qm_gif_width.gif")}
						alt=""
						class="page_pic"
					/>
					<img src={require("../Assets/qm/qm-website-light.png")} alt="" />

					{/* <p>
						As a part of the Design & Social Interaction Studio at Georgia Tech,
						I design and develop interactive visualizations to help students
						gain an experiential and intuitive understanding of quantum
						mechanics and semiconductor physics principles. The tools used to
						build them include Figma, p5.JS, D3.js, and GSAP.
					</p> */}
					<h2>Context</h2>
					<p>
						LearnQM provides educational tools to help students intuitively
						learn the quantum mechanics concepts behind semiconductors. The
						project is by the Design and Social Interaction Studio at Georgia
						Tech.
					</p>
					<h2>Problem</h2>
					<p>
						Quantum Mechanics (QM) and Semiconductor Physics are the foundations
						taught in core science and engineering courses. Educators face major
						challenges because of the abstract, non-experiential, and
						counter-intuitive nature of the key concepts in these areas. Course
						materials emphasize mathematical formulations rather than conceptual
						understanding. As a result, students often struggle to develop
						robust mental models and intuitive grasp of the concepts.
					</p>
					<h2>Challenge</h2>
					<p>
						How might we create interactive visualizations that teach complex
						concepts in an intuitive way?
					</p>

					<h3>Specific Goals:</h3>
					<ul>
						<li>
							Create easy to understand yet accurate visual representations.
						</li>
						<li>Redesign the website to be a more cohesive experience.</li>
						<li>Create a scalable design system for future team members.</li>
					</ul>

					<img src={require("../Assets/qm/qm-high-level-flow.png")} alt="" />
					<p class="caption">High level user flow</p>

					<h2>Research</h2>
					<p>
						We conducted interviews with the users that asked them to speak
						aloud their thought process while using the product. The data from
						the interviews was analyzed using an affinity map. User flow maps
						and personas were created to empathize with users and their mindsets
						and pain-points during the whole process of interaction with the
						product.
					</p>

					<p>{/* <strong>Insights from user testing</strong> */}</p>

					<img src={require("../Assets/qm/qm-affinity.png")} alt="" />
					<img src={require("../Assets/qm/qm-persona.png")} alt="" />
					<img src={require("../Assets/qm/qm-journey-map.png")} alt="" />
					<p class="caption">Experience Map</p>

					<h3>Insights from user testing</h3>
					<ul>
						<li>Colors play a big role in grouping conceptual groups.</li>
						<li>
							Users are overwhelmed when presented too much information and call
							to action at once.
						</li>
						<li>
							A student might get more reward out of figuring out information
							rather than being directly told.
						</li>
					</ul>

					<h3>Design Considerations</h3>
					<ul>
						<li>
							Ensure colors are accessible to visually impaired and does not
							detract from understanding the visualizations.
						</li>
						<li>
							Limit the amount of information and possible interaction
							introduced per scene.
						</li>
						<li>
							Encourage users to experiment with visualizations to develop their
							own understanding.
						</li>
					</ul>

					<h2>Design</h2>

					<p>Conceptualizing the designs involved:</p>
					<ul>
						<li>sketching designs</li>
						<li>making prototypes of the interactions</li>
						<li>conducting guerrilla user testing of the visualizations</li>
						<li>iteration through both design and development</li>
					</ul>

					<img
						src={require("../Assets/qm/qm-sketch.png")}
						alt=""
						class="page_pic"
					/>

					<img
						src={require("../Assets/qm/qm-prototype.png")}
						alt=""
						class="page_pic"
					/>

					<h2>Product</h2>
					<img src={require("../Assets/qm/qm-product1.png")} alt="" />
					<img src={require("../Assets/qm/qm-product2.png")} alt="" />

					<h2 className="">Website</h2>
					<h3>Conceptualization</h3>
					<p>Sitemap</p>
					<img src={require("../Assets/qm/qm-sitemap.png")} alt="" />
					<p>Wireframe</p>
					<img src={require("../Assets/qm/qm-wireframe.png")} alt="" />
					<p>Style Guide</p>
					<img src={require("../Assets/qm/qm-design-system.png")} alt="" />
					<p>Custom Illustrations</p>
					<img src={require("../Assets/qm/qm-art.png")} alt="" />
					<h3>High-fidelity Prototypes</h3>
					<img src={require("../Assets/qm/qm-website-light.png")} alt="" />
					<img src={require("../Assets/qm/qm-website-dark.png")} alt="" />
					<div>
						{/* <img
							src={require("../Assets/qm/qm_gif_width.gif")}
							alt=""
							class="page_pic"
						/>
						<img
							src={require("../Assets/qm/qm_gif_arrows.gif")}
							alt=""
							class="page_pic pic-adj"
						/>
						<img
							src={require("../Assets/qm/qm_gif_cap.gif")}
							alt=""
							class="page_pic pic-adj"
						/> */}
					</div>
					<h2>Reflection</h2>
					<p>
						Through this project, I’ve come to realize the importance of UX in
						all kinds of domains, especially education. Through applying user
						research, we can actually see where students are struggling and find
						solutions that help them to learn in more holistic and intuitive
						ways.
					</p>
					<Next link={"/kaleido"} />
				</div>
			</div>
		</body>
	);
}
