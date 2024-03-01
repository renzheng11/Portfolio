import React from "react";
import { AllProjects } from "./components/projects/allProjects";
import { Link } from "react-router-dom";
// import Scroll from "react-scroll";
import Spline from "@splinetool/react-spline";

import "./App.css";

// const ScrollLink = Scroll.ScrollLink;

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
				<div className="blobs">
					<div className="blob blob-2">1</div>
					<div className="blob blob-1">2</div>
					<wiv className="blob blob-3">3</wiv>
				</div>

				<div className="hider"></div>
				<div className="burger-white-bg"></div>
				<div className="content">
					<div className="wrapper">
						<div className="nav">
							<Link to={"/"} className="brand">
								✻ Ren Zheng
							</Link>

							<button className="burger" onclick="toggleMenu()">
								<img
									id="burger-icon"
									data-type="bars"
									src="./Assets/icon/menu-bars.png"
									alt=""
								/>
							</button>
							<div className="menu">
								<Link
									to={"/"}
									className="brand"
									onClick={() => {
										const anchor = document.querySelector(
											"#project-destination"
										);
										anchor.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									}}
								>
									Projects
								</Link>

								{/* <ScrollLink
  								to="project-destination"
  								spy={true}
  								smooth={true}
  								duration={500}
  								classNameName="some-className"
  								activeclassName="some-active-className"
  							>
  								Projects
  							</ScrollLink> */}

								<Link to={"/about"} classNameName="brand">
									About
								</Link>
								<Link to={"/about"} classNameName="brand">
									Contact
								</Link>
							</div>
						</div>

						<div className="landing">
							<div className="headline-name">
								Hello, I'm Ren. I'm an&nbsp; <em>interaction designer</em>{" "}
								studying and living in Atlanta.
							</div>
							<div className="headline-text">
								My focus is on crafting&nbsp;
								<span id="memory">memorable experiences</span> through visual
								design andz storytelling.
							</div>
						</div>
					</div>

					<div id="project-destination"></div>
					<AllProjects />
					<footer>
						Made with&nbsp;<span id="heart">♥</span> Updated Jan 2024
					</footer>
				</div>
			</div>
		</body>
	);
}
