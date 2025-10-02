const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')
const mobileMenu = document.querySelector('#mobile-menu')

navBtn.addEventListener('click', function(){
    if(mobileMenu.classList.toggle('mobile__menu--open')) {
        navBtnImg.src = './img/svgicons/close.svg'
        
    }
    else {
        navBtnImg.src = './img/svgicons/menu.svg'
    }
    
    // document.body.classList.toggle("no-scroll")
})


AOS.init();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    autoplay: {  
        delay: 2000,  // Задержка между прокрутками в миллисекундах  
        disableOnInteraction: false,  // Продолжать автопрокрутку после взаимодействия  
    },  
    speed: 3000,  // Скорость перехода между слайдами

    // if we need pagination

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});




