const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

let home = false;
if ((activePage == '/flyagency/') || (activePage == '/'))
    home = true;

navLinks.forEach(link => {
    if (home && link.href.includes('index.html'))
        link.classList.add('focus');
    else if (link.href.includes(`${activePage}`) && !home)
        link.classList.add('focus');
});

let header = document.querySelector('.header');
let arrowUp = document.querySelector('.fa-chevron-circle-up');
let fadeAway = document.querySelectorAll('.fade-away');

window.addEventListener('scroll', function() {
    // let windowPosition = window.scrollY >= (window.innerHeight - 12.5*window.innerHeight/100);
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('on', windowPosition);
    if (arrowUp)
        arrowUp.classList.toggle('on', windowPosition);
    
    if (fadeAway)
        fadeAway.forEach(elmt => {
            elmt.style.opacity = `${1 - window.scrollY / 200}`;
        });
})

let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
})