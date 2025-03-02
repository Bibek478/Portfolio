// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close the hamburger menu after clicking a link (for mobile)
    navLinks.classList.remove('active');
  });
});

// Handle Scroll for Active/Inactive Sections
function handleScroll() {
  const sections = document.querySelectorAll('.card-section');
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('active');
      section.classList.remove('inactive');
    } else {
      section.classList.add('inactive');
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);

// Initialize the first section as active
document.querySelector('.card-section').classList.add('active');

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Set dark mode as default
body.classList.add('dark');
darkModeToggle.innerHTML = '☀️'; // Sun icon for light mode
localStorage.setItem('theme', 'dark');

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    darkModeToggle.innerHTML = '☀️'; // Sun icon for light mode
  } else {
    localStorage.setItem('theme', 'light');
    darkModeToggle.innerHTML = '🌙'; // Moon icon for dark mode
  }
});