import React from "react";
import { Back } from "../components/buttons/Back";
import { Next } from "../components/buttons/Next";

export function Calico() {
	return (
		<body>
			<div class="page-wrapper">
				<div class="page">
					<Back />
					<h1>Calico Closet Share</h1>
					<img
						src={require("../Assets/calico/calico_poster.png")}
						alt=""
						class="page_pic"
					/>

					<section>
						<h2>Problem Brief</h2>
						<p>
							This project started with the broad challenge of addressing how we
							might make the circulation of clothes more sustainable, while
							still allowing people to express themselves through fashion. The
							specific method used for this exploration was speculative design,
							in which the design process is used as an approach to imagine
							alternative futures in order to comment on and spark debate around
							present social landscapes.
						</p>
					</section>

					<section>
						<h2>Research and Ideation</h2>
						<p>
							Before starting ideation for potential solutions, several broad
							questions guided the direction for the rest of the design process.
						</p>
						<ul>
							<li>
								In what ways can we change the production and circulation of
								clothing to make it sustainable?
							</li>
							<li>
								What current solutions already attempt to address this issue?
							</li>
							<li>
								How do they cater to current values and in what ways do they
								subvert them?
							</li>
							<li>On what scale do we want to address this problem?</li>
						</ul>
						<p>
							A comparative analysis looked at various existing apps that people
							use to sell used clothing like Mercari (shown below) Poshmark, and
							Depop.
						</p>
						<img
							src={require("../Assets/calico/calico_research.png")}
							alt=""
							class="page_pic"
						/>
						<p>
							<strong>Key insights</strong> made from observing these apps:
						</p>
						<ul>
							<li>
								They still operate through buying and selling of goods with
								monetary value. This system doesn’t do much to encourage people
								to value the pieces of clothing they own or put much thought
								into disposing / selling their unwanted clothing.
							</li>
							<li>
								Users sell mostly mass-produced items and prices are still
								controlled by brand names and condition of the pieces.
							</li>
							<li>
								Most buying and selling happens on a large scale with no
								interaction between the users, with the app as an interface for
								direct exchange of clothing and money.
							</li>
						</ul>

						<p>
							With these findings in mind, <strong>three main ideas</strong>{" "}
							were proposed for how we might imagine a post-capitalistic
							circulation of garments:
						</p>
						<ul>
							<li>
								What if people traded their clothing and we remove the idea of
								ownership all together? This could de-emphasize the role of
								monetary worth in clothing and encourage people to turn toward
								more creative expression of fashion.
							</li>
							<li>
								The trade of clothing could be scaled down to a more local scale
								so encourage community building and more sustainable ways of
								finding clothes without relying on long-distance transport.
							</li>
							<li>
								We can cultivate a social ethos that diverts from the purchasing
								of new pieces of clothing and rather encourage people to mend,
								create, and up-cycle pieces to imbue more personal meaning into
								the clothes we wear everyday.
							</li>
						</ul>
					</section>

					<section>
						<h2>Development</h2>
						<p>
							Building an app was the design artifact chosen to use to showcase
							the speculated future. Because apps are commonly used by clothing
							companies and thrift platforms to sell clothes, an alternate app
							can be compared to the standard yet diverging from current values.
							<br />
							<br />
							Wireframes were laid out to imagine what the different pages of
							the app could look like. Many standard features were kept such as
							user reviews to keep people accountable in protecting the
							condition of clothes they receive.
						</p>
						<img
							src={require("../Assets/calico/calico_wire.png")}
							alt=""
							class="page_pic"
						/>
						<p>
							Towards the beginning of the process, the app didn’t feel
							distinguishable from existing apps and did not highlight a
							different social landscape. Continuing to quickly experiment with
							low-fidelity helps to create features that tells a story about the
							reimagined future, showcased in the final app.
						</p>
					</section>

					<section>
						<h2>Final Product</h2>
						<img
							src={require("../Assets/calico/calico_mockup.png")}
							alt=""
							class="page_pic"
						/>
						<img
							src={require("../Assets/calico/calico_final1.png")}
							alt=""
							class="page_pic"
						/>
						<p>
							The history section shows the life cycle of a piece of clothing.
							It gives information on who its been worn by and any modifications
							or creative additions they have made. This both gives a sense for
							how unique each item is as well as give users access to previous
							wearers if they have questions about the pieces.
						</p>

						<img
							src={require("../Assets/calico/calico_final2.png")}
							alt=""
							class="page_pic"
						/>
						<p>
							Like current apps, a messages section allows users to have
							conversations around pieces of clothing and their methods of
							mending and up-cycling clothes. The examples populated here show
							how community is built within this app and the values that the
							users share.
						</p>
						<img
							src={require("../Assets/calico/calico_final3.png")}
							alt=""
							class="page_pic"
						/>
						<p>
							The process for requesting a process offers a streamlined way for
							users to trade clothing, with various options for receiving and
							returning items. Since the app encourages trading within a local
							community, users can choose to trade the items in person or
							through contactless pick-up to minimize shipping and transport.
						</p>
						<img
							src={require("../Assets/calico/calico_final4.png")}
							alt=""
							class="page_pic"
						/>
						<p>
							The recycling section offers an easy way for users to recycle
							un-mendable and unusable clothing / textiles based on an item’s
							materials and condition.
						</p>
					</section>

					<section>
						<h2>Reflection</h2>
						<p>
							Towards the beginning of the process, the app didn’t feel
							distinguishable from existing apps and did not highlight a
							different social landscape. Continuing to quickly experiment with
							low-fidelity helps to create features that tells a story about the
							reimagined future, showcased in the final app.
						</p>
					</section>
					<Next link={"/noise"} />
				</div>
			</div>
		</body>
	);
}
