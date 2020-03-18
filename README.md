# ui-3: Responsive nav bar (click outside to close menu)
## Feature
- Responsive nav bar
- For this UI, use entity for menu icon and close icon.
- Dropdown menu
- Possible to click outside to close dropdown menu and switch menu icon.
## Improvements
- submenu
- box-shadow
- fixed nav
- searchbox
## Code - JS
### Click ouside to close dropdown menu and switch menu icon
```javascript
// switch menu icon & dropdown menu
window.addEventListener('click', function (e) {
    e.preventDefault;
    if (e.target === menuBtnOpen || e.target === menuBtnClose) {
        menuBtnOpen.classList.toggle('menu-btn--active');
        menuBtnClose.classList.toggle('menu-btn--active');
        headerNav.classList.toggle('header__nav--active');
    } else if (e.target !== menuBtnClose) {
        if (menuBtnClose.classList.contains('menu-btn--active')) {
            menuBtnOpen.classList.toggle('menu-btn--active');
            menuBtnClose.classList.toggle('menu-btn--active');
            headerNav.classList.toggle('header__nav--active');
        }
    }
});
```
