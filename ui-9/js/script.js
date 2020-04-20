// Stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM Reference
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const videoBg = document.querySelector('.video-bg');
const section = document.querySelector('.section');

// menu dropdown & aria accessibility
const menuAnimation = function () {
    nav.classList.toggle('nav--active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
};

const menuBtnAria = function () {
    if (menuBtn.getAttribute('aria-pressed') === 'false' && menuBtn.getAttribute('aria-expanded') === 'false') {
        menuBtn.setAttribute('aria-pressed', 'true');
        menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        menuBtn.setAttribute('aria-pressed', 'false');
        menuBtn.setAttribute('aria-expanded', 'false');
    };
};

window.addEventListener('click', function (e) {
    if (e.target === menuIcon || e.target === menuBtn) {
        menuAnimation();
        menuBtnAria();
    } else {
        if (nav.classList.contains('nav--active')) {
            menuAnimation();
            menuBtnAria();
        };
    };
});

// change in navbar when scrolled down
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 5) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    };
});

// pause video when scrolled down to the next element
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= section.offsetTop) {
        videoBg.pause();
    } else {
        videoBg.play();
    }
});