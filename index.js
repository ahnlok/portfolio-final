// Sticky Navbar
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Toggle Menu
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// ScrollReveal
// Home Intro
ScrollReveal().reveal('.intro')
ScrollReveal().reveal('.descript', { delay: 200})
ScrollReveal().reveal('.btn', { delay: 400})
// About Me
ScrollReveal().reveal('.me')
ScrollReveal().reveal('#profile-pic', { delay: 200 })
ScrollReveal().reveal('.contentBx', { delay: 400 })
// Languages
ScrollReveal().reveal('.heading white')
ScrollReveal().reveal('#lang', { delay: 200 })
// Projects
ScrollReveal().reveal('.project-name')
ScrollReveal().reveal('.flip-card', { delay: 200 })
// Resume
ScrollReveal().reveal('.resume')
ScrollReveal().reveal('.testimonialBx', { delay: 200 })
// Contact
ScrollReveal().reveal('.call')
ScrollReveal().reveal('#call-me', { delay: 200 })






