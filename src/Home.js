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
				<div className="hero">
					<Spline scene="https://prod.spline.design/g6E0pvg40VPkM-8E/scene.splinecode" />
				</div>
				<div className="test"></div>
				<div className="bg"></div>
				{/* <div className="blob-wrapper">
					<div className="blobs">
						<div className="blob blob-1">1</div>
						<div className="blob blob-2">2</div>
					</div>
				</div> */}

				<div className="hider"></div>
				<div className="burger-white-bg"></div>
				<div className="content">
					<div className="wrapper">
						<div className="left-side">
							<div className="top">
								<div className="nav">
									<div className="brand">
										<span>Ren Zheng</span>
										{/* <img
											src={require("../src/Assets/icons/logo.png")}
											alt="project"
										/> */}
									</div>
								</div>
								<div className="landing">
									<div className="headline-name">
										Hello, I'm Ren <span className="pronouns">(they/them)</span>
										. I'm a designer and developer studying and living in
										Atlanta.
									</div>
									<div className="headline-text">
										My focus is on crafting&nbsp;
										<span id="memory">memorable experiences</span> through user
										research, visual design, and storytelling.
									</div>
								</div>
							</div>
							<div className="bottom">
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
						</div>
						<div className="right-side">
							<div className="right-wrapper">
								<div className="work">
									<span>Work</span>
								</div>
								{/* <div id="project-destination"></div> */}
								<div className="all-projects">
									<AllProjects />
								</div>
								<footer>
									Updated March 2024 <span id="heart">♥</span>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
