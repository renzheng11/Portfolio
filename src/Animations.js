// const cards = document.querySelectorAll(".project");
// const headlineName = document.querySelector(".headline-name");
// const headlineText = document.querySelector(".headline-text");

// const observer = new IntersectionObserver(
// 	(entries) => {
// 		entries.forEach((entry) => {
// 			entry.target.classList.toggle("show", entry.isIntersecting);
// 			if (entry.isIntersecting) observer.unobserve(entry.target);
// 		});
// 	},
// 	{
// 		threshold: 0.3,
// 	}
// );

// cards.forEach((card) => {
// 	// console.log(card.classList);
// 	observer.observe(card);
// });

// observer.observe(headlineName);
// observer.observe(headlineText);

// burger.onClick

// function toggleMenu(params) {
// 	const burgerMenu = document.querySelector(".menu");
// 	burgerMenu.classList.toggle("show");
// 	const burgerWhiteBackground = document.querySelector(".burger-white-bg");
// 	burgerWhiteBackground.classList.toggle("show");
// 	const burgerIcon = document.querySelector("#burger-icon");

// 	console.log(burgerIcon.dataset.type);
// 	if (burgerIcon.dataset.type == "bars") {
// 		burgerIcon.src = "./Assets/menu-x.png";
// 		burgerIcon.dataset.type = "x";
// 	} else {
// 		burgerIcon.src = "./Assets/menu-bars.png";
// 		burgerIcon.dataset.type = "bars";
// 	}
// }

// const cursor = document.querySelector(".custom-cursor");
// document.addEventListener("mousemove", function (e) {
// 	cursor.style.left = e.clientX + "px";
// 	cursor.style.top = e.clientY + "px";
// });

// GSAP

// gsap.to(".back-btn", {
// 	opacity: 0,
// 	y: "100px",
// 	filter:
// 		"invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);",

// 	duration: 1,
// 	// y: "-100%",
// 	ease: "ease-in",
// });
