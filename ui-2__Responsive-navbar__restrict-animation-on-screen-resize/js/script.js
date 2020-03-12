// DOM reference
const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav')

// Stop transition and animation during screen resizing
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// menu button animation
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu-btn--toggle');
    headerNav.classList.toggle('header__nav--toggle');
})