document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".roupas");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 100); // Ajuste o atraso conforme necessário
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  items.forEach((item) => {
    observer.observe(item);
  });
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Inicializar o slider
showSlide(currentSlide);
