const Burger = document.querySelector('.burger__inner');
const HeaderNavigation = document.querySelector('.header__menu');
const MenuList = document.querySelector('.menu__list');
const MenuLogo = document.querySelector('.menu__logo');
const Overlay = document.querySelector('.overlay');
const Body = document.querySelector('body');
const Page = document.querySelector('.page');
const LockPaddingValue = window.innerWidth - Page.offsetWidth + "px";

Burger.addEventListener('click', function() {
    Burger.classList.toggle('active');
    HeaderNavigation.classList.toggle('active');
    MenuLogo.classList.toggle('active');
    Overlay.classList.toggle('active');
    Body.classList.toggle('lock');
    Page.classList.toggle('lockPadding');
    PaddingLock(Page);
});

Overlay.addEventListener('click', function() {
    Burger.classList.toggle('active');
    HeaderNavigation.classList.toggle('active');
    MenuLogo.classList.toggle('active');
    Overlay.classList.toggle('active');
    Body.classList.toggle('lock');
    Page.classList.toggle('lockPadding');
    PaddingLock(Page);
})

function PaddingLock (current) {
    if (current.classList.contains('lockPadding')) {
        current.style.paddingRight = LockPaddingValue;
    }
    else {
        current.style.paddingRight = 0;
    }
}


