// Toggle Menu
const sideMenu = document.getElementById('sideMenu');
const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');

toggleBtn.addEventListener('click', () => {
    sideMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

