// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// =========================  =========================

// dom reference
const body = document.body;
const galleryItemsArr = Array.from(document.querySelectorAll('.gallery-item'));
const lightboxesArr = Array.from(document.querySelectorAll('.lightbox'));
const lightboxCloseIconsArr = Array.from(document.querySelectorAll('.lightbox-close-icon'));

// =========================  =========================

// open lightbox
galleryItemsArr.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const index = galleryItemsArr.indexOf(e.currentTarget);
        const currLightbox = lightboxesArr[index];

        currLightbox.classList.add('lightbox--active');
        body.classList.add('body--noscroll');
    });
});

// close lightbox
lightboxesArr.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const index = lightboxesArr.indexOf(e.currentTarget);
        const currLightbox = lightboxesArr[index];
        const currCloseIcon = lightboxCloseIconsArr[index];
        if (e.target === currCloseIcon) {
            currLightbox.classList.remove('lightbox--active');
            body.classList.remove('body--noscroll');
        };
    });
});

// =========================  =========================

// close-icon starts to glow when lightbox is opened
galleryItemsArr.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const index = galleryItemsArr.indexOf(e.currentTarget);
        const currCloseIcon = lightboxCloseIconsArr[index];
        const iconStyle = getComputedStyle(lightboxCloseIconsArr[index]);

        interval = setInterval(function () { //important to make the interval variable gloobal scope
            console.log(index)

            if (iconStyle.color === 'rgb(0, 0, 0)') {
                currCloseIcon.style.color = 'rgb(255, 255, 255)';
            } else {
                currCloseIcon.style.color = 'rgb(0, 0, 0)';
            };
        }, 1000);
    });
});

// close-icon ceases to glow when lightbox is closed
lightboxesArr.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const index = lightboxesArr.indexOf(e.currentTarget);
        const currCloseIcon = lightboxCloseIconsArr[index];
        if (e.target === currCloseIcon) {
            clearInterval(interval);
        };
    });
});