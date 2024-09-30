// Select DOM Elements
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle Navbar
menuIcon.addEventListener('click', () => {
  nav.classList.add('open');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Close Navbar
closeIcon.addEventListener('click', () => {
  nav.classList.remove('open');
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
});

// Close Navbar on Link Click and Smooth Scroll to Section
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  });
});
