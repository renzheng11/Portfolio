const INFO = {
	main: {
		brand: "Ren Zheng",
		email: "renzheng112@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		linkedin: "https://linkedin.com/",
		github: "https://github.com/",
		arena: "https://www.are.na/ren-zheng",
	},

	homepage: {
		headline: "homepage title",
		description: "homepage description",
	},

	about: {
		title: "about title",
		description: "about description",
	},

	projects: [
		{
			title: "LearnQM Visualizations",
			description: "Description",
			types: ["Product Design", "Web Dev"],
			image: require("../Assets/qm/qm_hero.png"),
			link: "/qm",
		},
		{
			title: "Kaleido",
			description: "Description",
			types: ["Branding", "Visual Design"],
			image: require("../Assets/kaleido/kaleido-title.png"),
			link: "/kaleido",
		},
		{
			title: "Access H2O",
			description: "Description",
			types: ["User Research", "Product Design"],
			image: require("../Assets/access/access_home.png"),
			link: "/accessh20",
		},
		{
			title: "Closet Share",
			description: "Description",
			types: ["UI", "Speculative Design"],
			image: require("../Assets/calico/calico_poster.png"),
			link: "/calico",
		},

		{
			title: "Noise In Scope",
			description: "Description",
			types: ["Data Art", "Interaction Design"],
			image: require("../Assets/noise/noise_final.png"),
			shape: require("../Assets/noise/noise_shape.png"),
			link: "/noise",
		},

		{
			title: "Memories as Data",
			description: "Description",
			types: ["Data Visualization"],
			image: require("../Assets/portrait/portrait_home.png"),
			link: "/memories",
		},
	],
};

export default INFO;
