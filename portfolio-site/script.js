const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const cards = document.querySelectorAll('.project-card, .capability-card, .stack-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

cards.forEach(card => {
  card.classList.add('reveal-card');
  observer.observe(card);
});
