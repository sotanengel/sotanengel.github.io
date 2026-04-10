// Navigation scroll effect
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.getElementById("nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

// Close mobile menu on link click
links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

// Scroll-reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(
  ".section-title, .about-text, .about-image, .skill-card, .project-card, .article-card, .contact-card"
).forEach((el) => observer.observe(el));
