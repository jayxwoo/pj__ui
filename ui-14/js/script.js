// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM reference
const headerText = document.querySelector('.header__text');
const headerSubText = document.querySelector('.header__subtext');
const headerLogoImg = document.querySelector('.header__logo-img');

// animation when page is loaded
window.addEventListener('load', function () {
    // top text animation
    setTimeout(() => {
        headerText.classList.remove('header__text--pre');
    }, 100);
    
    // img animation
    setTimeout(() => {
        headerLogoImg.classList.remove('header__logo-img--pre');
    }, 900);

    // subtext animation
    setTimeout(() => {
        headerSubText.classList.remove('header__subtext--pre');
    }, 1700);
});