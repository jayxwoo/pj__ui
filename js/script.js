// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM reference
const sectionTwo = document.querySelector('.section2');
const sectionTwoImg = sectionTwo.querySelector('.section2__img');
const sectionThree = document.querySelector('.section3');
const sectionThreeTextTop = sectionThree.querySelector('.section3__text-top');
const sectionThreeTextBottom = sectionThree.querySelector('.section3__text-bottom');

// section 2 animation
window.addEventListener('scroll', function () {
    if (window.pageYOffset > sectionTwo.offsetTop - 200) {
        sectionTwoImg.classList.remove('section2__img--pre');
    } else if (window.pageYOffset < sectionTwo.offsetTop - 200) {
        sectionTwoImg.classList.add('section2__img--pre');
    };
});

// section 3 animation
window.addEventListener('scroll', function () {
    if (window.pageYOffset > sectionThree.offsetTop - 100) {
        sectionThreeTextTop.classList.remove('section3__text-top--pre');
        sectionThreeTextBottom.classList.remove('section3__text-bottom--pre');
    } else if (window.pageYOffset < sectionThree.offsetTop - 100) {
        sectionThreeTextTop.classList.add('section3__text-top--pre');
        sectionThreeTextBottom.classList.add('section3__text-bottom--pre');
    };
});