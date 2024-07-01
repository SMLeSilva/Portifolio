// NAVBAR 
let navbar__width = document.querySelector('#navbar')

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        navbar.classList.add('width100_border__bottom');
    } else {
        navbar.classList.remove('width100_border__bottom');
    }
});

// SLIDER ABOUT 

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
        about2.style.boxShadow = '-15px 0 15px -5px rgba(255, 255, 255, 0.244)'
        slider.style.boxShadow = '0 0 15px 8px rgba(255, 255, 255, 0.244)'
        button__about.style.transform = 'translate(-50%, -50%) rotate(-180deg)';
    }
    else {
        sliderNumber = 0;
        about2.style.top = '0'
        about2.style.left = '100%'
        about2.style.boxShadow = 'none'
        slider.style.boxShadow = '-10px 15px 25px 0px rgba(48, 48, 48, 0.5)'
        button__about.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    }
}

// DARK LIGHT

const check__box__dark__light = document.getElementById('checkbox__moon__switch')

check__box__dark__light.addEventListener('change', switch__moon())

function switch__moon(){
    if(check__box__dark__light.checked){
       
    }else{

    }
}