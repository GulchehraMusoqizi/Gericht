"use strict"

// bars

let barsBtn = document.querySelector('.bars button')
let barsMenu = document.querySelector('.bars-menu')
let udBtn = document.querySelector('.bars-img')

barsBtn.addEventListener('click', ()=>{
    // barsMenu.style.top = '0'
    // barsMenu.style.transform = 'translateY(200%)'
    barsMenu.style.display = 'block'
})

udBtn.addEventListener('click', ()=>{
    barsMenu.style.display = 'none'
})




// gallery-menu

 new Swiper('.gallery-menu', {
  loop: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    
  },

  // responsive breakpoints
  breakpoints:{
    0:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },
    1200:{
      slidesPerView:4
    },
  }

 
});