// MOBILE SIDEBAR
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

hamburger.onclick = () => sidebar.style.right = "0";
closeBtn.onclick = () => sidebar.style.right = "-100%";

// 3D TILT
document.querySelectorAll(".tilt-card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    let x = e.offsetX / card.offsetWidth - 0.5;
    let y = e.offsetY / card.offsetHeight - 0.5;
    card.style.transform = `rotateY(${x*15}deg) rotateX(${-y*15}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="rotate(0)");
});

// TESTIMONIALS SWIPER
new Swiper(".testimonialSwiper", {
  loop: true,
  autoplay: { delay:2600 },
  slidesPerView:1.1,
  spaceBetween:25,
  breakpoints:{
    768:{ slidesPerView:1 } // show 1 slide per view on mobile
  }
});

// TILT EFFECT for specials + menu cards
document.querySelectorAll(".tilt-card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    let x = e.offsetX / card.offsetWidth - 0.5;
    let y = e.offsetY / card.offsetHeight - 0.5;
    card.style.transform = `rotateY(${x*15}deg) rotateX(${-y*15}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="rotate(0)");
});
