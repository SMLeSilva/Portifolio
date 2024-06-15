/* --- NavBar --- */
window.addEventListener("scroll", function () {
    let navbar__width = document.querySelector('#navbar')
    navbar__width.classList.toggle('width100', window.scrollY > 100)
})

/* --- Slider About --- */

const button__about = document.getElementById('button__about__me')
const slider = document.querySelector('.slider__about__me')
const about2 = document.querySelector('.about__me__2')

button__about.addEventListener('click', controlSlide)

sliderNumber = 0

function controlSlide() {
    if (sliderNumber == 0) {
        sliderNumber = 1;
        about2.style.top = '0'
        about2.style.left = '0'
        about2.style.boxShadow = '-15px 0 15px -5px rgba(255, 255, 255, 0.5)'
        slider.style.boxShadow = '0 0 15px 8px rgba(255, 255, 255, 0.5)'
        button__about.style.transform = 'translate(-50%, -50%) rotate(-180deg)';
    }
    else {
        sliderNumber = 0;
        about2.style.top = '0'
        about2.style.left = '100%'
        about2.style.boxShadow = 'none'
        slider.style.boxShadow = 'none'
        button__about.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    }
}