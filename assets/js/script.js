let btn = document.querySelector(".toggle-nav-mob");
let nav = document.querySelector(".nav-mobile");
let ico = document.querySelector(".bi");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let toggle = true;
btn.addEventListener("click", move);
function move() {
  if (toggle) {
    moveDown();
  } else {
    moveUp();
  }
  function moveDown() {
    toggle = false;
    nav.classList.add("animateDown");
    nav.classList.remove("animateUp");
    ico.classList.add("bi-x-lg");
    ico.classList.remove("bi-list");
  }
  function moveUp() {
    toggle = true;
    nav.classList.add("animateUp");
    nav.classList.remove("animateDown");
    ico.classList.add("bi-list");
    ico.classList.remove("bi-x-lg");
  }
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.documentElement.scrollTop > 4 &&
    document.documentElement.clientWidth > 767
  ) {
    navbar.style.height = "95px";
    navbar.style.paddingTop = "0px";
    navbar.style.paddingBottom = "0px";
    navbar.style.backdropFilter = "blur(6px)";
    navbar.style.borderBottom = "2px solid var(--fourth_color)";

  } else {
   navbar.style.height = "105px";
   navbar.style.paddingTop = "8px";
   navbar.style.paddingBottom = "8px";
   navbar.style.backdropFilter = "blur(0px)";
   navbar.style.borderBottom = "0px solid var(--fourth_color)";
  }
}
window.addEventListener('resize', handleResize);
function handleResize() {
  nav.classList.remove("animateDown");
  nav.classList.remove("animateUp");
}


