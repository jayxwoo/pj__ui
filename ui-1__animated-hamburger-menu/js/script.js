// DOM reference
const menuIcon = document.querySelector('.nav__menu-icon');

// menu icon animation
menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('menu-icon--active');
})