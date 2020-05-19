// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM reference
const carousel = document.querySelector('.carousel');
const carouselSlide = carousel.querySelector('.carousel-slide');
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel-slide'));
// const carouselBtns = Array.from(carousel.querySelectorAll('.carousel-btn'));
const carouselBtnLeft = carousel.querySelector('.carousel-btn--left');
const carouselBtnRight = carousel.querySelector('.carousel-btn--right');
const indicatorContainer = carousel.querySelector('.indicator-container');
const indicators = Array.from(carousel.querySelectorAll('.indicator'));

// ==================== CAROUSEL RESPONSIVE LAYOUT ====================
// Set height of carousel according to the height of slide when page is loaded
window.addEventListener('load', () => {
    const slideHeight = carouselSlide.scrollHeight;
    carousel.style.height = `${slideHeight * 1.3}px`;
});

// Change the height of carousel according to the height of slide whem page is resized
window.addEventListener('resize', () => {
    const slideHeight = carouselSlide.scrollHeight;
    carousel.style.height = `${slideHeight * 1.3}px`;
});

// Position (in X direction) each button according to the width of the carousel & slide when page is loaded
window.addEventListener('load', () => {
    const carouselWidth = carousel.scrollWidth;
    const slideWidth = carouselSlide.scrollWidth;
    const btnPositionValue = (carouselWidth - slideWidth) / 4;

    carouselBtnLeft.style.left = `${btnPositionValue}px`;
    carouselBtnRight.style.right = `${btnPositionValue}px`;
});

// Position (in X direction) each button according to the change in width of the carousel & slide when page is resized
window.addEventListener('resize', () => {
    const carouselWidth = carousel.scrollWidth;
    const slideWidth = carouselSlide.scrollWidth;
    const btnPositionValue = (carouselWidth - slideWidth) / 4;

    carouselBtnLeft.style.left = `${btnPositionValue}px`;
    carouselBtnRight.style.right = `${btnPositionValue}px`;
});

// Position (in Y direction) indicators according to the height of the carousel & slide when page is loaded
window.addEventListener('load', () => {
    const carouselHeight = carousel.scrollHeight;
    const slideHeight = carouselSlide.scrollHeight;
    const indicatorHeight = indicatorContainer.scrollHeight;
    const indicatorPositionValue = ((carouselHeight - slideHeight) / 4) - (indicatorHeight / 2);

    indicatorContainer.style.bottom = `${indicatorPositionValue}px`;
});

// Position (in Y direction) indicators according to the height of the carousel & slide when page is resized
window.addEventListener('resize', () => {
    const carouselHeight = carousel.scrollHeight;
    const slideHeight = carouselSlide.scrollHeight;
    const indicatorHeight = indicatorContainer.scrollHeight;
    const indicatorPositionValue = ((carouselHeight - slideHeight) / 4) - (indicatorHeight / 2);

    indicatorContainer.style.bottom = `${indicatorPositionValue}px`;
});

// ==================== ARROW BUTTNOS ====================
// slide to the next image when right button is clicked
carouselBtnRight.addEventListener('click', e => {
    let curIndex = null;
    carouselSlides.forEach((slide, index) => {
        if (slide.classList.contains('carousel-slide--active')) {
            slide.classList.remove('carousel-slide--active');
            curIndex = index;
        };
    });
    if (curIndex >= 0 && curIndex < carouselSlides.length - 1) {
        carouselSlides[curIndex + 1].classList.add('carousel-slide--active');
    } else if (curIndex === carouselSlides.length - 1) {
        carouselSlides[0].classList.add('carousel-slide--active');
    };
});

// slide to the prev image when left button is clicked
carouselBtnLeft.addEventListener('click', e => {
    let curIndex = null;
    carouselSlides.forEach((slide, index) => {
        if (slide.classList.contains('carousel-slide--active')) {
            slide.classList.remove('carousel-slide--active');
            curIndex = index;
        };
    });
    if (curIndex === 0) {
        carouselSlides[carouselSlides.length - 1].classList.add('carousel-slide--active');
    } else if (curIndex > 0 && curIndex < carouselSlides.length) {
        carouselSlides[curIndex - 1].classList.add('carousel-slide--active');
    };
});

// ==================== INDICATORS ====================
// shift the color of the indicator when right button is clicked
carouselBtnRight.addEventListener('click', e => {
    let curIndex = null;
    indicators.forEach((indicator, index) => {
        if (indicator.classList.contains('indicator--active')) {
            indicator.classList.remove('indicator--active');
            curIndex = index;
        };
    });
    if (curIndex >= 0 && curIndex < indicators.length - 1) {
        indicators[curIndex + 1].classList.add('indicator--active');
    } else if (curIndex === indicators.length - 1) {
        indicators[0].classList.add('indicator--active');
    };
});

// shift the color of the indicator when left button is clicked
carouselBtnLeft.addEventListener('click', e => {
    let curIndex = null;
    indicators.forEach((indicator, index) => {
        if (indicator.classList.contains('indicator--active')) {
            indicator.classList.remove('indicator--active');
            curIndex = index;
        };
    });
    if (curIndex === 0) {
        indicators[indicators.length - 1].classList.add('indicator--active');
    } else if (curIndex > 0 && curIndex < indicators.length) {
        indicators[curIndex - 1].classList.add('indicator--active');
    };
});

// click an indicator and show its corresponding image
indicators.forEach(indicator => {
    indicator.addEventListener('click', e => {
        const index = indicators.indexOf(e.target);
        // remove current 'indicator--active' class
        indicators.forEach(indicator => {
            if (indicator.classList.contains('indicator--active')) {
                indicator.classList.remove('indicator--active');
            };
        });

        // remove current 'carousel-slide--active' class
        carouselSlides.forEach(slide => {
            if (slide.classList.contains('carousel-slide--active')) {
                slide.classList.remove('carousel-slide--active');
            };
        });

        // color clicked indicator
        e.target.classList.add('indicator--active');

        // show corresponding image
        carouselSlides[index].classList.add('carousel-slide--active');
    });
});