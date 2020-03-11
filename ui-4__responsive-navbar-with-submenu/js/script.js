// DOM Reference
const headerNav = document.querySelector('.header__nav');
const menuGroup = document.querySelector('.menu-group');
const submenuGroup = document.querySelectorAll('.submenu-group');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const faChev = document.querySelectorAll('.fa-chevron');
const menuListAbout = document.querySelector('.menu-list-about');
const menuListProject = document.querySelector('.menu-list-project');


// Stop transition on screen resize for short time
window.addEventListener('resize', function () {
    let timer = null;

    const removeTransition = function () {
        headerNav.classList.remove('stop-transition');
        for (let i = 0; i < submenuGroup.length; i++) {
            submenuGroup[i].classList.remove('stop-transition');
        }
        timer = null;
    };

    timer = setTimeout(removeTransition, 1000);

    if (timer == null) {
        clearTimeout(timer);
    } else {
        headerNav.classList.add('stop-transition');
        for (let i = 0; i < submenuGroup.length; i++) {
            submenuGroup[i].classList.add('stop-transition');
        }
    };
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

// Rotate chevron icon on hover
menuListAbout.addEventListener('mouseenter', function (e) {
    const targetChev = e.target.querySelector('.fa-chevron');
    targetChev.style.transform = 'rotate(180deg)';
    targetChev.style.transition = 'transform 0.5s ease-in-out';
})

menuListAbout.addEventListener('mouseleave', function (e) {
    const targetChev = e.target.querySelector('.fa-chevron');
    targetChev.style.transform = 'rotate(0deg)';
    targetChev.style.transition = 'transform 0.5s ease-in-out';
})

menuListProject.addEventListener('mouseenter', function (e) {
    const targetChev = e.target.querySelector('.fa-chevron');
    targetChev.style.transform = 'rotate(180deg)';
    targetChev.style.transition = 'transform 0.5s ease-in-out';
});

menuListProject.addEventListener('mouseleave', function (e) {
    const targetChev = e.target.querySelector('.fa-chevron');
    targetChev.style.transform = 'rotate(0deg)';
    targetChev.style.transition = 'transform 0.5s ease-in-out';
});