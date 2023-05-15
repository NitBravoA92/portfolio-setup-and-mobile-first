const menuBtn = document.getElementById('open-mobile-menu');
const menu = document.getElementById('mobile-menu');
const btnClose = document.getElementById('close-btn');
const menuLinks = document.querySelectorAll('.mobile-nav-link');

function navToggle() {
  menu.classList.remove('hide-menu');
  menu.classList.add('show-menu');
  menuBtn.classList.add('open');
}

function closeMobileNav() {
  menu.classList.add('hide-menu');
  menu.classList.remove('show-menu');
  menuBtn.classList.remove('open');
}

btnClose.addEventListener('click', closeMobileNav);
menuBtn.addEventListener('click', navToggle);
menuLinks.forEach((navLink) => {
  navLink.addEventListener('click', closeMobileNav);
});