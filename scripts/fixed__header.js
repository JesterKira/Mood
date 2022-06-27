window.onscroll = function fixHeader() {
    const Header = document.querySelector('.header')

    if (window.innerWidth > 552){
        if (window.pageYOffset > 30) {
            Header.classList.add('fixed');
        } 
        else {
            Header.classList.remove('fixed');
        }
    }
    else {
        if (window.pageYOffset > 20) {
            Header.classList.add('fixed');
        } 
        else {
            Header.classList.remove('fixed');
        }
    }
}