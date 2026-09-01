const internalLinks = document.querySelectorAll('a[href^="#"]');
const contactForm = document.querySelector('#contact-form');

internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});
