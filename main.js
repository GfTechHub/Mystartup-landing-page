console.log("Landing page loaded!");

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// SECTION REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal, .reveal-card");

function revealOnScroll() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Stats Counter Animation
const counters = document.querySelectorAll('.stat');
const speed = 200; // lower = faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);
    
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  
  // Trigger only when visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.disconnect();
    }
  }, { threshold: 0.6 });
  
  observer.observe(counter);
});