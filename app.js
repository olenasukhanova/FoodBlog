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

// accordion buttons

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-butt");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

 // map
 jQuery('#vmap').vectorMap(
  {
      map: 'world_en',
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

 

 // gallery

 filterSelection("all") 
 function filterSelection(c) {
   let x, i;
   x = document.getElementsByClassName("features_photos-row");
   if (c == "all") c = "";
   
   for (i = 0; i < x.length; i++) {
     foodRemoveClass(x[i], "show");
     if (x[i].className.indexOf(c) > -1) foodAddClass(x[i], "show");
   }
 }
 

 function foodAddClass(element, name) {
   let i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     if (arr1.indexOf(arr2[i]) == -1) {
       element.className += " " + arr2[i];
     }
   }
 }

 function foodRemoveClass(element, name) {
   let i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     while (arr1.indexOf(arr2[i]) > -1) {
       arr1.splice(arr1.indexOf(arr2[i]), 1); 
     }
   }
   element.className = arr1.join(" ");
 }
 

 let btnContainer = document.getElementById("myBtnContainer");
 let btns = btnContainer.getElementsByClassName("btn");
 for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function(){
     let current = document.getElementsByClassName("active-btn");
     current[0].className = current[0].className.replace(" active-btn", "");
     this.className += " active-btn";
   });
 }


