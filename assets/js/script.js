// header fixed 
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// side modal 
var openProfileSidebtn = document.getElementById('sidebarToggleButton');
var openProfileSideOffcanvas = document.getElementById('openProfileSideOffcanvas');
var overlay = document.getElementById('overlay');
var closeIcon = document.getElementById('closeIcon');

openProfileSidebtn.addEventListener('click', () => {
    openProfileSideOffcanvas.style.right = "0";
    overlay.style.display = "block"
    console.log("openProfileSide");
});
overlay.addEventListener('click', closeModal);
closeIcon.addEventListener('click', closeModal);

function closeModal() {
    openProfileSideOffcanvas.style.right = "-100%";
    overlay.style.display = "none"
}

// animate js 

// hero text 
const mainText = document.getElementById('mainText');
anime({
    targets: mainText,
    opacity: 1,
    translateY: 0,
    duration: 1000, 
    easing: 'easeOutQuad', 
    delay: 200, 
});
 
// Hero images
const animatedImages = document.querySelectorAll('.animate-image');
animatedImages.forEach((image, index) => {
  anime({
    targets: image,
    opacity: 1,
    translateY: 0,
    delay: 200 * index, 
    duration: 1000, 
    easing: 'easeOutQuad', 
  });
});

// text
const animateContent = document.querySelectorAll('.animateContent');
animateContent.forEach((text, index) => {
  anime({
    targets: text,
    opacity: 1,
    translateY: 0,
    delay: 200 * index, 
    duration: 1000, 
    easing: 'easeOutQuad', 
  });
});

// cards 
const itemcard = document.querySelectorAll('.item-card');
itemcard.forEach((card, index) => {
  anime({
    targets: card,
    opacity: 1,
    translateY: 0,
    delay: 600 * index, 
    duration: 5000, 
    easing: 'easeOutQuad', 
  });
});

