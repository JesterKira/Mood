const Burger = document.querySelector('.burger__inner');
const HeaderNavigation = document.querySelector('.header__menu');
const MenuList = document.querySelector('.menu__list');
const MenuLogo = document.querySelector('.menu__logo');
const Overlay = document.querySelector('.overlay');
const Body = document.querySelector('body');
// const LockPaddingValue = window.innerWidth - document.querySelector('.page') + "px";

MenuList.style.paddingRight = MenuList.offsetWidth - MenuList.clientWidth + "px";
console.log(HeaderNavigation.offsetWidth);

Burger.addEventListener('click', function() {
    Burger.classList.toggle('active');
    HeaderNavigation.classList.toggle('active');
    MenuLogo.classList.toggle('active');
    Overlay.classList.toggle('active');
    Body.classList.toggle('lock');
    document.querySelector('.page').classList.toggle('lock');
});

Overlay.addEventListener('click', function() {
    Burger.classList.toggle('active');
    HeaderNavigation.classList.toggle('active');
    MenuLogo.classList.toggle('active');
    Overlay.classList.toggle('active');
    Body.classList.toggle('lock');
})


