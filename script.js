document.addEventListener('DOMContentLoaded', () => {
  const floatingEsims = document.querySelectorAll('.floating-esim');
  floatingEsims.forEach((esim, index) => {
    const delay = index * 2; // Stagger animation start
    esim.style.animationDelay = `${delay}s`;
  });

  // Form Submission Alert
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting Qorvia! We will respond soon.');
    });
  }
});
