// DOM Reference
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');


// Stop transition and animation during screen resizing
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// Test search form submit
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(searchForm.searchText.value);
});

// Menu animation on click
window.addEventListener('click', function (e) {
    // click menu button
    if (e.target === menuBtn) {
        nav.classList.toggle('nav--active');
        if (menuBtn.classList.contains('fa-bars')) {
            menuBtn.classList.remove('fa-bars');
            menuBtn.classList.add('fa-times');
            menuBtn.setAttribute('aria-pressed', 'true');
            menuBtn.setAttribute('aria-expanded', 'true');
        } else if (menuBtn.classList.contains('fa-times')) {
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
            menuBtn.setAttribute('aria-pressed', 'false');
            menuBtn.setAttribute('aria-expanded', 'false');
        };
    }
    // click outside to close menu
    else {
        if (nav.classList.contains('nav--active')) {
            nav.classList.toggle('nav--active');
            if (menuBtn.classList.contains('fa-bars')) {
                menuBtn.classList.remove('fa-bars');
                menuBtn.classList.add('fa-times');
                menuBtn.setAttribute('aria-pressed', 'true');
                menuBtn.setAttribute('aria-expanded', 'true');
            } else if (menuBtn.classList.contains('fa-times')) {
                menuBtn.classList.remove('fa-times');
                menuBtn.classList.add('fa-bars');
                menuBtn.setAttribute('aria-pressed', 'true');
                menuBtn.setAttribute('aria-expanded', 'true');
            };
        };
    };
});
