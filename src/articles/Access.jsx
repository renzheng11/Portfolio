import React from "react";
import { Back } from "../components/buttons/Back";
import { Next } from "../components/buttons/Next";

export function Access() {
	return (
		<body>
			<div class="page-wrapper">
				<div class="page">
					<Back />
					<h1>Access H2O </h1>
					<p>Role: Product Designer</p>

					<h3> Team </h3>
					<p>
						This project was a part of Bits of Good, a student organization that
						creates web-based solutions for local non-profits in Atlanta. I
						worked together with the project's product manager and engineering
						manager to lead a team of 7 developers in an agile cycle. 
					</p>

					<h3> About </h3>

					<p>
						AccessH20 is a nonprofit that provides financial assistance,
						education, and support to individuals and families experiencing
						temporary financial hardship to avoid water shut-off. They
						communicate with their customers' respective utility companies to
						obtain individual information regarding eligibility status to
						determine if the customer meets the requirements to receive aid.
					</p>

					<h2>Problem</h2>

					<h3>Context</h3>
					<p>
						The process of requesting, communicating, and tracking customer
						information and documents was time consuming and tedious. All
						communication was done through long email chains, most of them for
						uploading documents and requests for status and customer
						information.
					</p>

					<h3>Challenge</h3>
					<p>
						How might we streamline the communication of customer information
						between AccessH20 and utility companies?
					</p>

					<h3>Specific Goals:</h3>
					<ul>
						<li>
							Discover experience paint points, user goals, and user needs.
						</li>
						<li>
							Design a web app with a seamless flow to easily track and update
							customer information, documents, and eligibility.
						</li>
						<li>Create scalable design system for future changes.</li>
					</ul>

					<div>
						<h2>Research Goals & Questions</h2>
						<h3>Goals</h3>
						<ul>
							<li>Establish target audience</li>
							<li>Eliminate pain points during the user journey</li>
						</ul>
						<h3>Questions</h3>
						<ul>
							<li>Who will be the primary users of our product?</li>
							<li>
								What frustrations do they currently face in their process?
							</li>
							<li>
								What format of data representation would best fit their needs
								and workflow?
							</li>
						</ul>
					</div>

					<div>
						<h2>Participants & Research Method</h2>
						<h3>Users</h3>
						<ul>
							<li>AccessH2O Staff</li>
							<li>Utility Company Staff</li>
						</ul>
						<h3>Interviews</h3>
						<p>
							We conducted user interviews with both the director of the
							non-profit and staff members from utility companies. Speaking with
							the director of AccessH2O helped us to define core requirements of
							the web-app as well as pain points in their workflow.  We also
							talked with staff from utility companies to hear about
							frustrations from their perspective.
						</p>

						<img
							src={require("../Assets/access/access-oldflow.png")}
							alt=""
							class="page_pic"
						></img>
						<p class="caption">Old User Flow</p>
					</div>

					<h2>Key Findings</h2>
					<div>
						<h3>User needs and pain points</h3>
						<ul>
							<li>
								Long email chains makes it hard to keep track of different
								customer information and files.
							</li>
							<li>
								Much of the communication was requesting / sending customer
								details, related files, and status updates.
							</li>
							<li>
								{" "}
								Major frustration: the time spend on asking for updates and
								missing files.
							</li>
						</ul>
						{/* <h3>
							1. No existing central location to keep track of applicants and
							their information
						</h3>
						<p>
							All information and inquiries for customer information was
							communicated through email. This often led to long email chains or
							missing pieces of information. The statuses of applicants were
							also kept as a spreadsheet that was prone to disorganization. 
						</p>
						<h3>
							2. Both users need to track each application and its status in the
							review process
						</h3>
						<p>
							AccessH2O works with cities across the United States. They must be
							able to keep track of applicants from all of those sites. Each
							utility company want to see the applicants in their zone that are
							working with AccessH2O. 
						</p>
						<h3>
							3. Utility companies need to submit various pieces of information
							and documents for each applicant
						</h3>
						<p>
							An important consideration was how to manage all the necessary
							personal information and documentation of the applicants. There
							was a need to both intake all the information (without allowing
							omission of a certain piece) as well as display the information
							for review.
						</p> */}
					</div>
					<h3>Design Decisions</h3>
					<ul>
						<li>
							Create a centralized dashboard where the two user groups can view
							and update all customer info.
						</li>
						<li>
							Include a form that contains all this information and make it
							available at a glimpse on the dashboard.
						</li>
						<li>
							{" "}
							Ensure the form prompts for all files, make the process a quick
							flow.
						</li>
					</ul>

					<div>
						<h2>Solution & Mockups</h2>
						<h3>User Flows</h3>

						<img
							src={require("../Assets/access/access-userflows.png")}
							alt=""
							class="page_pic"
						></img>
						<h3>
							Dashboard to see all applicants and their status with sort and
							filter
						</h3>
						<p>
							The central page of the web-app is a dashboard with a view of all
							the applicants. It allows users to sort and filter applicants by
							helpful factors like application status, city and date.
						</p>
						<img
							src={require("../Assets/access/access_dashboard.png")}
							alt=""
							class="page_pic"
						></img>
						<h3>Applicant information form + review</h3>
						<p>
							This page is the primary form where utility companies can input
							the necessary information and documents required by AccessH2O. 
							The results of the form are then available as a review of each
							applicant. 
						</p>
						<img
							src={require("../Assets/access/access_editmode.png")}
							alt=""
							class="page_pic"
						></img>
					</div>
					<h2>Reflection</h2>
					<p>
						From this project, I gained experience working with a team of
						managers and engineers in an agile process. I found out how
						important it is to involve engineers early and throughout the design
						process, as well as handing off detailed design specifications. I
						learned how to use critiques to improve my designs and being
						intentional about gathering specific feedback.{" "}
					</p>

					<div>
						<Next link={"/calico"} />
					</div>
				</div>
			</div>
		</body>
	);
}
