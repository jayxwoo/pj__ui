// DOM Reference
const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const faChev = document.querySelectorAll('.fa-chevron');


// Stop transition and animation during screen resizing
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
    document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// Main menu dropdown on click
window.addEventListener('click', function (e) {
    if (e.target === menuBtnOpen || e.target === menuBtnClose || e.target === menuBtnOpen.childNodes[0] || e.target === menuBtnClose.childNodes[0]) {
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

// Switch chevron icon to 'left' on mobile view
const arrayFaChev = Array.from(faChev);

const chevToLeft = function (mq) {
    if (mq.matches) {
        for (let i = 0; i < arrayFaChev.length; i++) {
            arrayFaChev[i].classList.add('fa-chevron-left');
        }
    } else {
        for (let i = 0; i < arrayFaChev.length; i++) {
            arrayFaChev[i].classList.remove('fa-chevron-left');
            arrayFaChev[i].classList.add('fa-chevron-down');
        }
    }
}

const mq = window.matchMedia('(max-width: 799px)');
chevToLeft(mq);
mq.addListener(chevToLeft);