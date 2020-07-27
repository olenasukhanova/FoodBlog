// slider

$('.slider-block').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnDotsHover: true,
    zindex: 10,
 })

 // mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function(){
  mobileMenu.classList.toggle("active-menu");
  if(mobileMenu.classList.contains('active-menu')){
      mainMenu.classList.add('active-menu')
  } else{
    mainMenu.classList.remove('active-menu')
  }
}) 



// flying sections


AOS.init({
    // easing: 'ease-in-out-sine',
    easing:'ease',
    duration: 300,
    delay: 0,
    once: true,
  });
  