// Loader fade out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }, 2000);
});

// Run AFTER DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("mode-toggle");

  // Check saved mode
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "light") {
    document.body.classList.add("light");
    modeToggle.textContent = "☀️";
  } else {
    modeToggle.textContent = "🌙";
  }

  // Toggle theme on click
  modeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("mode", isLight ? "light" : "dark");
    modeToggle.textContent = isLight ? "☀️" : "🌙";
  });

  // Smooth scrolling
  const links = document.querySelectorAll("nav a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});