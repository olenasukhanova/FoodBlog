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
    duration: 500,
    delay: 0,
    once: false,
  });
  


  // counter

  $('.customers').animationCounter({
      start: 0,
      end: 500,
      step: 10,
      delay:80
    });
    
    $('.photos').animationCounter({
      start: 0,
      end: 1000,
      step: 20,
      delay:80
    });

    $('.foods').animationCounter({
      start: 0,
      end: 300,
      step: 6,
      delay:80
    });

    $('.experience').animationCounter({
      start: 0,
      end: 12,
      step: 1,
      delay:330,
    });

  
    // map
    jQuery('#vmap').vectorMap(
      {
          map: 'world_en',
          // backgroundColor: '#a5bfdd',
          backgroundColor:'none',
          borderColor: '#818181',
          borderOpacity: 0.25,
          borderWidth: 1,
          color: '#f4f3f0',
          enableZoom: true,
          // hoverColor: '#c9dfaf',
          hoverColor: '#fed741',
          hoverOpacity: null,
          normalizeFunction: 'linear',
          scaleColors: ['#b6d6ff', '#005ace'],
          // selectedColor: '#c9dfaf',
          selectedColor: '#fed741',
          selectedRegions: null,
          showTooltip: true,
          onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" and we are located in >> LOOK BELOW'
            // + code.toUpperCase();

        alert(message);
    }
         
      });


    