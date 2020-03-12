// DOM reference
const menuBtn = document.querySelector('.menu-btn');
const menuBtnOpen = document.querySelector('.menu-btn--open');
const menuBtnClose = document.querySelector('.menu-btn--close');
const headerNav = document.querySelector('.header__nav');

// Stop transition and animation during screen resizing
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
    document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// switch menu icon & activate dropdown menu
window.addEventListener('click', function (e) {
    if (e.target === menuBtnOpen || e.target === menuBtnClose) {
        menuBtnOpen.classList.toggle('menu-btn--active');
        menuBtnClose.classList.toggle('menu-btn--active');
        headerNav.classList.toggle('header__nav--active');
    } else {
        if (menuBtnClose.classList.contains('menu-btn--active')) {
            menuBtnOpen.classList.toggle('menu-btn--active');
            menuBtnClose.classList.toggle('menu-btn--active');
            headerNav.classList.toggle('header__nav--active');
        }
    }
});