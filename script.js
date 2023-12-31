const cards = document.querySelectorAll(".project");
const headlineName = document.querySelector(".headline-name");
const headlineText = document.querySelector(".headline-text");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

cards.forEach((card) => {
  // console.log(card.classList);
  observer.observe(card);
});

observer.observe(headlineName);
observer.observe(headlineText);
