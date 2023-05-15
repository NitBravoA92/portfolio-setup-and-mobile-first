const menuBtn = document.getElementById("open-mobile-menu");
const overlay = document.getElementById("overlay");
const menu = document.getElementById('mobile-menu');
const btnClose = document.getElementById('close-btn');

function navToggle() {
    menu.classList.remove('hide-menu')
    menu.classList.toggle('show-menu');
    menuBtn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
}

function closeMobileNav() {
    menu.classList.add('hide-menu')
    menu.classList.remove('show-menu')
}

btnClose.addEventListener('click', closeMobileNav)
menuBtn.addEventListener('click', navToggle)