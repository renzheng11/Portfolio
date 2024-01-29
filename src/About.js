import React from "react";
import { Back } from "./components/buttons/Back";
import { Link } from "react-router-dom";

import "./App.css";

export function About() {
	return (
		<div class="home-content">
			<div class="hider"></div>
			<div class="burger-white-bg"></div>
			<div class="content">
				<div class="">
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
									const anchor = document.querySelector("#project-destination");
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

					<div class="about-link-wrapper">
						<div class="about-link">
							<a href="mailto:renzheng112@gmail.com">Email</a>
						</div>
						<div class="about-link">
							<a href="https://drive.google.com/file/d/1fld4Tp-Vmo-Se6Gq8xNUwxUFX7ixOYei/view?usp=sharing">
								Resume
							</a>
						</div>
					</div>

					<div class="construction-text">🌸 Page under construction 🌸</div>

					{/* <div class="section"></div> */}
				</div>

				{/* <footer>
					Made with&nbsp;<span id="heart">♥</span> Updated Jan 2024
				</footer> */}
			</div>
		</div>
	);
}
