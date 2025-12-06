document.querySelectorAll(".carousel-container").forEach(container => {

  const track = container.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevButton = container.querySelector(".prev");
  const nextButton = container.querySelector(".next");
  const dotsContainer = container.querySelector(".carousel-dots");

  let index = 0;

  // Crear puntos
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function updateCarousel() {
    const width = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  nextButton.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

});
