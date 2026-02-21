/* ===============================
   BASIC UTILITIES
================================ */

// Helper: select single element
const select = (el) => document.querySelector(el);

// Helper: select multiple elements
const selectAll = (el) => document.querySelectorAll(el);

/* ===============================
   SMOOTH SCROLL FOR NAV LINKS
================================ */
selectAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = select(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ===============================
   NAVBAR SHADOW ON SCROLL
================================ */
const navbar = select('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.9)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

/* ===============================
   ACTIVE LINK HIGHLIGHT
================================ */
const sections = selectAll('section');
const navLinks = selectAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/* ===============================
   SCROLL REVEAL (LIGHTWEIGHT)
================================ */
const revealElements = selectAll(
  '.section:not(.hero), .project-card, .skill-item, .timeline-item'
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===============================
   FOOTER YEAR AUTO UPDATE
================================ */
const footerYear = select('.footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}