import React from "react";
import { AllProjects } from "./components/projects/allProjects";
import { Link } from "react-router-dom";
// import Scroll from "react-scroll";
import Spline from "@splinetool/react-spline";
// import { Gradient } from "./Gradient.js";
import "./App.css";
import { useRef, useEffect, useCallback } from "react";

// const ScrollLink = Scroll.ScrollLi2nk;
// Create your instance
// const gradient = new Gradient();

// Call `initGradient` with the selector to your canvas
// gradient.initGradient("#gradient-canvas");

export function Home() {
	return (
		<body>
			<div className="home-content">
				{/* <div className="hero">
					<Spline scene="https://prod.spline.design/g6E0pvg40VPkM-8E/scene.splinecode" />
				</div> */}
				{/* <div className="blob-wrapper">
					<div className="blobs">
						<div className="blob blob-1">1</div>
						<div className="blob blob-2">2</div>
					</div>
				</div> */}

				<div className="content">
					<div className="wrapper">
						<div className="navParent">
							<div className="topbar"></div>
							<div className="nav">
								<div className="brand">
									<span>REN ZHENG</span>
									{/* <img
												src={require("../src/Assets/icons/logo.png")}
												alt="project"
											/> */}
								</div>
								<div className="work">
									<span>WORK</span>
								</div>
							</div>
						</div>
						<div className="side-wrapper">
							<div className="left-side">
								<div className="landing">
									{/* <span className="pronouns">(they/them)</span> */}
									<div className="blurb">
										A multidisciplinary designer and developer with a focus on
										crafting digital experiences through research, visual
										design, and storytelling.
									</div>
									{/* <img
										className="flower"
										src={require("../src/Assets/icons/flower.png")}
										alt="project"
									/> */}
								</div>
								<div className="links">
									<div className="link">
										<div className="link-logo">
											<img
												src={require("../src/Assets/icons/link-logo.png")}
												alt="project"
											/>
										</div>
										<a href="https://drive.google.com/file/d/1v16MdAD0AdDj4YeK8HdwukBeRNUGvVDZ/view?usp=drive_link">
											Resume
										</a>
									</div>
									<div className="link">
										<div className="link-logo">
											<img
												src={require("../src/Assets/icons/link-logo.png")}
												alt="project"
											/>
										</div>
										<a href="https://www.linkedin.com/in/renzheng/">LinkedIn</a>
									</div>
									<div className="link">
										<div className="link-logo">
											<img
												src={require("../src/Assets/icons/link-logo.png")}
												alt="project"
											/>
										</div>
										<a href="https://github.com/renzheng11">Github</a>
									</div>
									<div className="link">
										<div className="link-logo">
											<img
												src={require("../src/Assets/icons/link-logo.png")}
												alt="project"
											/>
										</div>
										<a href="https://www.are.na/ren-zheng/channels">Are.na</a>
									</div>
								</div>
							</div>
							<div className="right-side">
								{/* <div id="project-destination"></div> */}
								<div className="all-projects">
									<AllProjects />
								</div>
								<footer>
									<img
										className="update-logo"
										src={require("../src/Assets/icons/update-logo.png")}
										alt="project"
									/>
									&nbsp; Updated March 2024
								</footer>
								{/* <span id="heart">♥</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
