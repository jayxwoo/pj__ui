# ui-2: Responsive nav bar (restrict animation on resize)
## Feature
- Responsive nav bar
- Menu icon animation on click
- Dropdown menu animation
- Hover effect on each menu link (for mobile and desktop)
- JS → Restrict animation(transition) on screen resize
## Note - JS
### Stop transition on screen resize
- Stop transition on screen resize event for 1000ms.
- This is required because for some reason the transition is triggered at the breakpoints when screen is resized.
## Improvements
- Click outside to close the dropdown menu.
