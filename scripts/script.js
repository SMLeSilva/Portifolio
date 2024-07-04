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

const check__box__dark__light = document.getElementById('checkbox__moon__switch')

check__box__dark__light.addEventListener('change', switch__moon())

function switch__moon(){
    if(check__box__dark__light.checked){
       
    }else{

    }
}

// Barra lateral

