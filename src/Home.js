import React from "react";
import { AllProjects } from "./components/projects/allProjects";
import { Link } from "react-router-dom";
// import Scroll from "react-scroll";
import Spline from "@splinetool/react-spline";

import "./App.css";

// const ScrollLink = Scroll.ScrollLink;

import { useRef, useEffect, useCallback } from "react";
export function Home() {
	return (
		<body>
			{/* <div className="custom-cursor"></div> */}
			{/* <div className="hero">
				<Spline scene="https://prod.spline.design/g6E0pvg40VPkM-8E/scene.splinecode" />
			</div> */}
			{/* <spline-viewer
        className="hero"
        url="https://prod.spline.design/g6E0pvg40VPkM-8E/scene.splinecode"
      ></spline-viewer> */}

			{/* <div className="test">jp</div> */}

			<div className="home-content">
				<div className="blob-wrapper">
					<div className="blobs">
						<div className="blob blob-1">1</div>
						<div className="blob blob-2">2</div>
					</div>
				</div>

				<div className="hider"></div>
				<div className="burger-white-bg"></div>
				<div className="content">
					<div className="wrapper">
						<div className="left-side">
							<div className="top">
								<div className="nav">
									<Link to={"/"} className="brand">
										{/* ✻ Ren Zheng */}
										<img
											src={require("../src/Assets/icons/logo.png")}
											alt="project"
										/>
									</Link>
								</div>
								<div className="landing">
									<div className="headline-name">
										Hello, I'm Ren <span className="pronouns">(they/them)</span>
										. I'm a multi-disciplinary designer studying and living in
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
								<div className="projects-title">PROJECTS</div>
								{/* <div id="project-destination"></div> */}
								<div className="all-projects">
									<AllProjects />
								</div>
								<footer>
									Made with&nbsp;<span id="heart">♥</span> Updated March 2024
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
