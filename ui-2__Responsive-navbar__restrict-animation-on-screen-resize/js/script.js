// DOM reference
const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav')

// stop transition on screen resize
const addRemoveTransition = function () {
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
}

window.addEventListener('resize', addRemoveTransition);

// menu button animation
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu-btn--toggle');
    headerNav.classList.toggle('header__nav--toggle');
})