// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// DOM reference
const preLoader = document.querySelector('.pre-loader');

// remove pre-loader when page is loaded
window.addEventListener('load', () => {
    preLoader.classList.add('pre-loader--finish');
    document.body.classList.add('body--loading-finished');
});