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
			{/* <div class="custom-cursor"></div> */}
			{/* <div class="hero">
				<Spline scene="https://prod.spline.design/g6E0pvg40VPkM-8E/scene.splinecode" />
			</div> */}
			{/* <spline-viewer
        class="hero"
        url="https://prod.spline.design/g6E0pvg40VPkM-8E/scene.splinecode"
      ></spline-viewer> */}

			{/* <div class="test">jp</div> */}

			<div class="home-content">
				<div class="blobs">
					<div class="blob blob-2">1</div>
					<div class="blob blob-1">2</div>
					<wiv class="blob blob-3">3</wiv>
				</div>

				<div class="hider"></div>
				<div class="burger-white-bg"></div>
				<div class="content">
					<div class="wrapper">
						<div class="nav">
							<Link to={"/"} class="brand">
								✻ Ren Zheng
							</Link>

							<button class="burger" onclick="toggleMenu()">
								<img
									id="burger-icon"
									data-type="bars"
									src="./Assets/icon/menu-bars.png"
									alt=""
								/>
							</button>
							<div class="menu">
								<Link
									to={"/"}
									class="brand"
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
  								className="some-class"
  								activeClass="some-active-class"
  							>
  								Projects
  							</ScrollLink> */}

								<Link to={"/about"} class="brand">
									About
								</Link>
								<Link to={"/about"} class="brand">
									Contact
								</Link>
							</div>
						</div>

						<div class="landing">
							<div class="headline-name">
								Hello, I'm Ren. I'm an&nbsp; <em>interaction designer</em>{" "}
								studying and living in Atlanta.
							</div>
							<div class="headline-text">
								My focus is on crafting&nbsp;
								<span id="memory">memorable experiences</span> through visual
								design and storytelling.
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
