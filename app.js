const header = document.querySelector('.header');
const burger = document.querySelector('div.burger');
const nav = document.querySelector('nav ul')
const navLinks = document.querySelectorAll('.menu-item');
console.log(navLinks);

// onScroll header-menu event:
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 100) {
        header.classList.add('nav-colored');
    } else {
        header.classList.remove('nav-colored');
    }
});

// burger click event 
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle('toggle');
});