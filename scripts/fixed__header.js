window.onscroll = function fixHeader() {
    const Header = document.querySelector('.header');
    const Main = document.querySelector('.main');

    if (window.innerWidth > 552){
        if (window.pageYOffset > 30) {
            Header.classList.add('fixed');
            Main.style.paddingTop = Header.offsetHeight + 30 + 'px';
        } 
        else {
            Header.classList.remove('fixed');
            Main.style.paddingTop = 0;

        }
    }
    else {
        if (window.pageYOffset > 20) {
            Header.classList.add('fixed');
            Main.style.paddingTop = Header.offsetHeight + 20 + 'px';
        } 
        else {
            Header.classList.remove('fixed');
            Main.style.paddingTop = 0;
        }
    }
}