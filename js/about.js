function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const duration = 1500;
  const stepTime = 20;   
  const increment = target / (duration / stepTime);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = target + "%";
      clearInterval(timer);
    } else {
      counter.textContent = Math.ceil(current) + "%";
    }
  }, stepTime);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = document.querySelectorAll(".counter");
      counters.forEach(counter => {
        if (!counter.classList.contains("counted")) {
          animateCounter(counter);
          counter.classList.add("counted");
        }
      });
    }
  });
}, {
  threshold: 0.5,
});

const aboutSection = document.querySelector(".about-container");
if (aboutSection) {
  observer.observe(aboutSection);
}
