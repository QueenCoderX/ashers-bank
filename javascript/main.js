/* Hamburger Menu Toggle Function */


const navLinks = document.querySelector('.navLinks');
const navItems = document.querySelectorAll('.navItems');
const toggleBtn = document.querySelector('.toggleBtn')
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');


function toggleMenu(){
    console.log('Toggle here bitch');
    if (navLinks.classList.contains("showMenu")){
      navLinks.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      setTimeout(function(){
        navLinks.style.transform = "translateY(-100%)";
      }, 200);
    }
    else {
      navLinks.classList.add("showMenu");
      console.log('Debug')
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
      setTimeout(function(){
        navLinks.style.transform = "translateY(0)";
      }, 200);
    }
  }

toggleBtn.addEventListener("click", toggleMenu);

navItems.forEach (
    function (navItem) {
        navItem.addEventListener("click", toggleMenu);
    }
)

//MAIN SCRIPTS//

const physicalSection = document.querySelector('.getStartedPhysical');
const onlineSection = document.querySelector('.getStartedOnline');
const physicalButton = document.querySelector('.physical-button');
const onlineButton = document.querySelector('.online-button');

physicalButton.addEventListener('click', () => {
    physicalSection.classList.add('active');
    physicalSection.classList.remove('inactive');
    onlineSection.classList.add('inactive');
    onlineSection.classList.remove('active');
});

onlineButton.addEventListener('click', () => {
    onlineSection.classList.add('active');
    onlineSection.classList.remove('inactive');
    physicalSection.classList.add('inactive');
    physicalSection.classList.remove('active');
});


//swiper mobile touch screen
var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 1,
  loop: true,
  freeMode: true,
  touchEventsTarget: 'container',
  autoplay: {
    delay:4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // width: 40,
  // margin: 5,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 315,
    },
  }
});

swiper.update();

//FOOTER SCRIPTS//
function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const arrowUp = element.querySelector('.arrowUp');
  const arrowDown = element.querySelector('.arrowDown');
  if (content.style.display === "block") {
      content.style.display = "none";
      arrowUp.style.display = "none";
      arrowDown.style.display = "block";
  } else {
      content.style.display = "block";
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
  }
}




// var indexValue = 0;
// const container = document.getElementsByClassName("container");
// function slideShow(){
//   setTimeout(slideShow, 2500);

//   var x;

//   for (x = 0; x < container.length; x++){
//     container[x].style.display = "none";
//   }
//   indexValue++
//   if(indexValue > container.length){indexValue = 1}
//   container[indexValue  -1].style.display = "block";
// }
// slideShow();
