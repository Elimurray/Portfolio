function smoothScrolling() {
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

smoothScrolling();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.6 }
); // Adjust threshold as needed

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("mousemove", (event) => {
  const nav = document.getElementById("top-nav");
  const triggerZone = 300; // Pixels from top to trigger visibility

  if (event.clientY <= triggerZone) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});
