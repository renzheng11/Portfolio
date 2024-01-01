const cards = document.querySelectorAll(".project")
const headlineName = document.querySelector(".headline-name")
const headlineText = document.querySelector(".headline-text")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: 0.3,
  }
)

cards.forEach((card) => {
  // console.log(card.classList);
  observer.observe(card)
})

observer.observe(headlineName)
observer.observe(headlineText)

// burger.onClick

function toggleMenu(params) {
  const burgerMenu = document.querySelector(".menu")
  burgerMenu.classList.toggle("show")
  const burgerWhiteBackground = document.querySelector(".burger-white-bg")
  burgerWhiteBackground.classList.toggle("show")
  const burgerIcon = document.querySelector("#burger-icon")

  console.log(burgerIcon.dataset.type)
  if (burgerIcon.dataset.type == "bars") {
    burgerIcon.src = "./Assets/menu-x.png"
    burgerIcon.dataset.type = "x"
  } else {
    burgerIcon.src = "./Assets/menu-bars.png"
    burgerIcon.dataset.type = "bars"
  }
}
