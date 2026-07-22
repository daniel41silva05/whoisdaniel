// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar and Back to Top Scroll Effect
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to Top
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for Fade-In Animations
const fadeElements = document.querySelectorAll('.feature, .about-card, .project-card, .category-header');

// Add fade-in class initially
fadeElements.forEach(el => {
    el.classList.add('fade-in');
});

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});
