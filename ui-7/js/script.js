// Stop transition and animation during screen resizing
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});


// DOM Reference
const header = document.querySelector('.header');
const searchForm = document.querySelector('.search-form');
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const menuBtn = document.querySelectorAll('.menu-btn');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuIcon = document.querySelectorAll('.menu-icon');
const menuIconOpen = document.querySelector('.menu-icon-open');
const menuIconClose = document.querySelector('.menu-icon-close');
const nav = document.querySelector('.nav');


// Check search bar submit function
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(searchForm.searchInput.value);
});


// Menu button animation & menu dropdown animation
const menuAnimation = function () {
    nav.classList.toggle('nav--active');
    menuBtnOpen.classList.toggle('menu-btn--active');
    menuBtnClose.classList.toggle('menu-btn--active');
};

window.addEventListener('click', function (e) {
    // click menu button
    if (e.target === menuIcon[0] || e.target === menuIcon[1] || e.target === menuBtn[0] || e.target === menuBtn[1]) {
        menuAnimation();
    }
    // click outside of menu
    else {
        if (nav.classList.contains('nav--active')) {
            menuAnimation();
        };
    };
});


// Header changes when scrolled down
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
    } else {
        header.style.background = 'transparent';
    }
});