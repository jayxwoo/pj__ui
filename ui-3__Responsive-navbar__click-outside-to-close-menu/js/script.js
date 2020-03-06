// DOM reference
const menuBtn = document.querySelector('.menu-btn');
const menuBtnOpen = document.querySelector('.menu-btn--open');
const menuBtnClose = document.querySelector('.menu-btn--close');
const headerNav = document.querySelector('.header__nav');

// stop transition on screen resize
window.addEventListener('resize', function () {
    let timer = null;

    const removeTransition = function () {
        headerNav.classList.remove('stop-transition');
        timer = null;
    }
    
    timer = setTimeout(removeTransition, 1000);

    if (timer = null) {
        clearTimeout(timer);
    } else {
        headerNav.classList.add('stop-transition');
    }
})

// switch menu icon & dropdown menu
window.addEventListener('click', function (e) {
    e.preventDefault;
    if (e.target === menuBtnOpen || e.target === menuBtnClose) {
        menuBtnOpen.classList.toggle('menu-btn--active');
        menuBtnClose.classList.toggle('menu-btn--active');
        headerNav.classList.toggle('header__nav--active');
    } else if (e.target !== menuBtnClose) {
        if (menuBtnClose.classList.contains('menu-btn--active')) {
            menuBtnOpen.classList.toggle('menu-btn--active');
            menuBtnClose.classList.toggle('menu-btn--active');
            headerNav.classList.toggle('header__nav--active');
        }
    }
});