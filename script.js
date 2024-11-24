// Dynamic Content Loader
document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    {
      id: "hero",
      content: `
        <section id="hero">
          <div class="hero-content">
            <h2>eSIM: Redefining Connectivity</h2>
            <p>
              Discover the future of mobile connectivity with Qorvia’s secure, scalable, and sustainable eSIM solutions.
            </p>
            <a href="#solutions" class="cta-button">Explore Our Solutions</a>
          </div>
        </section>
      `,
    },
    {
      id: "about",
      content: `
        <section id="about">
          <h2>About Qorvia</h2>
          <p>
            Qorvia is a leader in eSIM technology, delivering innovative solutions that redefine connectivity.
          </p>
        </section>
      `,
    },
    {
      id: "solutions",
      content: `
        <section id="solutions">
          <h2>Our Solutions</h2>
          <ul>
            <li>Enhanced Flexibility: Switch networks seamlessly.</li>
            <li>Global IoT Connectivity: Manage devices remotely.</li>
            <li>Sustainability: Eco-friendly eSIM technology.</li>
          </ul>
        </section>
      `,
    },
    {
      id: "industries",
      content: `
        <section id="industries">
          <h2>Industries We Serve</h2>
          <p>
            Empowering telecommunications, automotive, IoT, and wearable industries.
          </p>
        </section>
      `,
    },
    {
      id: "contact",
      content: `
        <section id="contact">
          <h2>Contact Us</h2>
          <form id="contact-form">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      `,
    },
  ];

  const contentContainer = document.getElementById('content');
  sections.forEach((section) => {
    contentContainer.innerHTML += section.content;
  });

  // Smooth Scroll
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Active Link Highlight
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 200; // Adjust for navbar height
    document.querySelectorAll('.nav-link').forEach((link) => {
      const section = document.querySelector(link.getAttribute('href'));
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  // Form Submission Alert
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting Qorvia! We will get back to you shortly.');
    });
  }
});
