const menuBtn = document.getElementById("open-mobile-menu");
const menu = document.getElementById('mobile-menu');
const btnClose = document.getElementById('close-btn');

function navToggle() {
    menu.classList.remove('hide-menu')
    menu.classList.toggle('show-menu');
    menuBtn.classList.toggle('open');
}

function closeMobileNav() {
    menu.classList.add('hide-menu')
    menu.classList.remove('show-menu')
}

btnClose.addEventListener('click', closeMobileNav)
menuBtn.addEventListener('click', navToggle)