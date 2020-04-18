// Stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM Reference
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');


// menu button
const menuAnimation = function () {
    nav.classList.toggle('nav--active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
};


const ariaAttributeToggle = function () {
    if (menuBtn.getAttribute('aria-pressed') === 'false' && menuBtn.getAttribute('aria-expanded') === 'false') {
        menuBtn.setAttribute('aria-pressed', 'true');
        menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        menuBtn.setAttribute('aria-pressed', 'false');
        menuBtn.setAttribute('aria-expanded', 'false');
    };
};

window.addEventListener('click', function (e) {
    // when menu icon or menu button is clicked
    if (e.target === menuIcon || e.target === menuIcon.parentElement) {
        menuAnimation();
        ariaAttributeToggle();
    } 
    // when clicked outside
    else {
        if (nav.classList.contains('nav--active')) {
            menuAnimation();
            ariaAttributeToggle();
        };
    };
});

// navbar animation (height)
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= header.offsetTop) {
        header.style.height = '80px';
    } else {
        header.style.height = '100px';
    };
});