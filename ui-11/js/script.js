// stop transition and animation during screen resizing (default)
window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    let timer = setTimeout(function () {
        document.body.classList.remove('resize-animation-stopper');
    }, 300);
});

// ========== FAQ accordion ==========
// DOM reference
const faqAwrappers = Array.from(document.querySelectorAll('.faq-a-wrapper'));
const faqIcons = Array.from(document.querySelectorAll('.faq-icon'));

faqIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // DOM reference
        const index = faqIcons.indexOf(e.target);
        const clickedfaqAwrappers = faqAwrappers[index];

        // for items except clicked item; close expansion, reinstate icon rotation, reinstate aria-expanded attribute
        faqAwrappers.forEach(item => {
            if (item.clientHeight !== 0 && item.parentElement.querySelector('.faq-icon') !== e.target) {
                item.style.maxHeight = 0;
                item.parentElement.querySelector('.faq-icon').style.transform = 'none';
                item.parentElement.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
            };
        });

        // rotate faq icon
        if (getComputedStyle(e.target).transform === 'none') {
            e.target.style.transform = 'rotate(180deg)';
        } else {
            e.target.style.transform = 'none';
        };

        // toggle aria-expanded on faq btn
        if (e.target.parentElement.getAttribute('aria-expanded') === 'false') {
            e.target.parentElement.setAttribute('aria-expanded', 'true');
        } else {
            e.target.parentElement.setAttribute('aria-expanded', 'false');
        };

        // open & close faq answer (hidden content)
        if (clickedfaqAwrappers.clientHeight === 0) {
            clickedfaqAwrappers.style.maxHeight = `${clickedfaqAwrappers.scrollHeight}px`;
        } else {
            clickedfaqAwrappers.style.maxHeight = 0;
        };
    });
});