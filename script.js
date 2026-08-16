// WhatsApp contact from the flyer. Change this once if the business prefers another WhatsApp number.
const WHATSAPP_NUMBER = "23230637736";

const openWhatsApp = (message) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Generic WhatsApp links
for (const link of document.querySelectorAll('.wa-link')) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openWhatsApp(link.dataset.message || "Hi Exclusive Babies! I'd like to make an enquiry.");
  });
}

// Package-specific enquiry buttons
for (const card of document.querySelectorAll('.package-card')) {
  card.querySelector('.package-btn')?.addEventListener('click', () => {
    const pkg = card.dataset.package;
    const price = card.dataset.price;
    openWhatsApp(`Hi Exclusive Babies! I'm interested in the ${pkg} (${price}). Please share availability and ordering details.`);
  });
}

// Custom enquiry form
const enquiryForm = document.getElementById('enquiryForm');
enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const childClass = document.getElementById('childClass').value.trim() || 'Not specified';
  const hamper = document.getElementById('hamper').value;
  const colour = document.getElementById('colour').value.trim() || 'No preference';
  const request = document.getElementById('request').value.trim() || 'None';

  const message = [
    'Hi Exclusive Babies! I would like to enquire about a Back to School Hamper.',
    '',
    `Parent/Guardian: ${name}`,
    `Child's class: ${childClass}`,
    `Hamper: ${hamper}`,
    `Preferred colour: ${colour}`,
    `Special requests: ${request}`,
    '',
    'Please let me know the availability and next steps. Thank you!'
  ].join('\n');

  openWhatsApp(message);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mouse parallax / tilt on the hero flyer
const tiltCard = document.querySelector('.tilt-card');
const heroVisual = document.querySelector('.hero-visual');
if (tiltCard && heroVisual && window.matchMedia('(pointer:fine)').matches) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg) rotate(2deg) translateY(-4px)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'rotateY(0) rotateX(0) rotate(2deg) translateY(0)';
  });
}

// Back to top
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn?.classList.toggle('visible', window.scrollY > 600);
});
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Current year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");


// Check previously saved theme
const savedTheme = localStorage.getItem("exclusiveBabiesTheme");


// If visitor previously selected dark mode
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// Update accessibility label
function updateThemeLabel() {

    const darkModeActive =
        document.body.classList.contains("dark-mode");

    themeToggle.setAttribute(
        "aria-label",
        darkModeActive
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}


updateThemeLabel();


// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkModeActive =
        document.body.classList.contains("dark-mode");


    // Save theme
    localStorage.setItem(
        "exclusiveBabiesTheme",
        darkModeActive ? "dark" : "light"
    );


    updateThemeLabel();

});