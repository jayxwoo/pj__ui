// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM reference
const portfolioIntro = document.querySelector('.portfolio-intro');
const textTop = document.querySelector('.portfolio-intro__text-top');
const textBottom = document.querySelector('.portfolio-intro__text-bottom');

// text animation when its element position is reached
window.addEventListener('scroll', function () {
    if (window.pageYOffset > portfolioIntro.offsetTop - 100) {
        textTop.classList.remove('portfolio-intro__text-top--pre');
        textBottom.classList.remove('portfolio-intro__text-bottom--pre');

        // remove scroll event listener when the function has been executed
        removeEventListener('scroll', arguments.callee);
    };
});