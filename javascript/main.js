// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar and Back to Top Scroll Effect
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.getElementById('backToTop');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and xmark
    const icon = mobileMenuBtn.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

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

// Contact Form WhatsApp Logic
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Gather form data
        const businessName = document.getElementById('businessName').value.trim();
        const socialMedia = document.getElementById('socialMedia').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const observations = document.getElementById('observations').value.trim();

        // Gather checked services
        const servicesCheckboxes = document.querySelectorAll('input[name="services"]:checked');
        let selectedServices = [];
        servicesCheckboxes.forEach((checkbox) => {
            selectedServices.push(checkbox.value);
        });

        // Format message
        let message = `Olá Daniel! Gostaria de pedir um orçamento para o meu negócio.\n\n`;
        message += `Nome do Negócio: ${businessName}.\n`;
        if (socialMedia) message += `Rede Social: ${socialMedia}.\n`;
        message += `Nº de Telemóvel: ${phoneNumber}.\n`;
        
        if (selectedServices.length > 0) {
            message += `Serviços Pretendidos: ${selectedServices.join(', ')}.\n`;
        } else {
            message += `Serviços Pretendidos: Não especificado.\n`;
        }

        if (observations) {
            message += `\nObservações:\n${observations}.`;
        }

        // Encode URI and open WhatsApp
        const whatsappNumber = '351934091814';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
}

