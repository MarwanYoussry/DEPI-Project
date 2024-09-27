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

const toggleButton = document.getElementById('theme-toggle');
const isDark = localStorage.getItem('theme') === 'dark';
setTheme(isDark);

toggleButton.addEventListener('click', () => {
    const currentIsDark = localStorage.getItem('theme') === 'dark';
    setTheme(!currentIsDark);
    localStorage.setItem('theme', currentIsDark ? 'light' : 'dark');
});

function setTheme(isDark) {
    if (isDark) {
        document.documentElement.style.setProperty('--first_color', '#e7eaf6');
        document.documentElement.style.setProperty('--second_color', '#a2a8d3');
        document.documentElement.style.setProperty('--third_color', '#38598b');
        document.documentElement.style.setProperty('--fourth_color', '#113f67');
    } else {
        document.documentElement.style.setProperty('--first_color', '#113f67');
        document.documentElement.style.setProperty('--second_color', '#38598b');
        document.documentElement.style.setProperty('--third_color', '#a2a8d3');
        document.documentElement.style.setProperty('--fourth_color', '#e7eaf6');
    }
}


