// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM reference
const sectionTwo = document.querySelector('.section2');
const sectionThree = document.querySelector('.section3');
const elementOne = document.querySelector('.element1');
const elementTwo = document.querySelector('.element2');
const elementThree = document.querySelector('.element3');
const elementFour = document.querySelector('.element4');
const elementFive = document.querySelector('.element5');
const elementSix = document.querySelector('.element6');
const elementSeven = document.querySelector('.element7');
const elementEight = document.querySelector('.element8');
const elementNine = document.querySelector('.element9');
const elementTen = document.querySelector('.element10');

// parallax scrolling
window.addEventListener('scroll', function () {
    // section 2
    if (window.pageYOffset > sectionTwo.offsetTop && window.pageYOffset < (sectionTwo.offsetTop + sectionTwo.scrollHeight)) {
        let value = window.pageYOffset - sectionTwo.offsetTop;
        elementOne.style.transform = `translate(-50%, -${value*2}%)`;
        elementTwo.style.transform = `translate(-50%, -${value*4}%)`;
        elementThree.style.transform = `translate(-50%, -${value*2.5}%)`;
        elementFour.style.transform = `translate(-50%, -${value*1}%)`;
        elementFive.style.transform = `translate(-50%, -${value*0.5}%)`;
    };

    // section 3
    if (window.pageYOffset > sectionThree.offsetTop && window.pageYOffset < (sectionThree.offsetTop + sectionThree.scrollHeight)) {
        let value = window.pageYOffset - sectionThree.offsetTop;
        elementSix.style.transform = `translate(${value*2}% ,-50%)`;
        elementSeven.style.transform = `translate(${value*4}% ,-50%)`;
        elementEight.style.transform = `translate(${value*2.5}% ,-50%)`;
        elementNine.style.transform = `translate(${value*1}% ,-50%)`;
        elementTen.style.transform = `translate(${value*0.5}% ,-50%)`;
    };
});