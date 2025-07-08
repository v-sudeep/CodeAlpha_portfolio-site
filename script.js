
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop;
    const height = section.offsetHeight;

    if (top > offset && top < offset + height) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});