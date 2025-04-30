document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll('.feature-box');
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.classList.add('visible');
    }, index * 300);
  });

  // Add smooth scroll effect
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});