document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  // Show the first slide and dot on page load
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  // Add click event listener to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Remove active class from current slide and dot
      slides[currentSlide].classList.remove("active");
      dots[currentSlide].classList.remove("active");

      // Set new current slide and dot
      currentSlide = index;

      // Add active class to new slide and dot
      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    });
  });
});
