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
      title: "Kaleido",
      description: "Description",
      type: "Branding / Visual Design",
      image: require("../Assets/kaleido/kaleido-title.png"),
      link: "/kaleido",
    },

    {
      title: "Experiential Visualization",
      description: "Description",
      type: "Interaction Design / Web Development",
      image: require("../Assets/qm/qm_hero.png"),
      link: "/qm",
    },

    {
      title: "Noise In Scope",
      description: "Description",
      type: "Data Art / Interaction Design",
      image: require("../Assets/noise/noise_final.png"),
      link: "/noise",
    },

    {
      title: "Memories as Data",
      description: "Description",
      type: "Data Visualization",
      image: require("../Assets/portrait/portrait_home.png"),
      link: "/memories",
    },

    {
      title: "Calico",
      description: "Description",
      type: "UI / Speculative Design",
      image: require("../Assets/calico/calico_hero.png"),
      link: "/calico",
    },
  ],
}

export default INFO
