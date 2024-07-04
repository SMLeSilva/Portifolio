// NAVBAR 
let navbar__width = document.querySelector('#navbar')

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        navbar.classList.add('width100_border__bottom');
    } else {
        navbar.classList.remove('width100_border__bottom');
    }
});

// DARK LIGHT
document.addEventListener('DOMContentLoaded', function() {
    const checkbox_dark_light = document.getElementById('checkbox_dark_light');
    const dark_light_mask = document.querySelector('#navbar .checkbox_dark_light_container .dark_light_mask');

    checkbox_dark_light.addEventListener('change', switch_moon);

    function switch_moon() {
        if (checkbox_dark_light.checked) {
            dark_light_mask.classList.add('mask');
        } else {
            dark_light_mask.classList.remove('mask');
        }
    }
});
// Barra lateral

