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
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

// Check search form submit function
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(searchForm.searchInput.value);
});

// Menu button & dropdown animation
window.addEventListener('click', function (e) {
    // clicking menu button
    if (e.target === menuIcon) {
        nav.classList.toggle('nav--active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    }
    // clicking outside of menu button
    else {
        if (nav.classList.contains('nav--active')) {
            nav.classList.toggle('nav--active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        };
    }
});

// Slight header changes when scrolled down
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 20) {
        header.style.height = '80px';
        header.style.transition = '0.5s ease-in-out';
    } else {
        header.style.height = '100px';
    }
});