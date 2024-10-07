/* Navbar on mobile devices */
let btn = document.querySelector(".toggle-nav-mob");
let nav = document.querySelector(".nav-mobile");
let ico = document.querySelector(".bi");
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

/* Resetting Navbar button on browser resizing */
window.addEventListener('resize', handleResize);
function handleResize() {
  nav.classList.remove("animateDown");
  nav.classList.remove("animateUp");
  ico.classList.add("bi-list");
  ico.classList.remove("bi-x-lg");
  toggle = true;
}

/* Navbar shrink on scroll */
let navbar = document.querySelector(".navbar");
let ticking = false;
function onScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            if (
              document.documentElement.scrollTop > 4 &&
              document.documentElement.clientWidth > 767
            ) {
              navbar.classList.add("navbar-shrink")
            } else {
              navbar.classList.remove("navbar-shrink")
            }
            ticking = false;
        });
        ticking = true;
    }
}
window.addEventListener('scroll', onScroll);




/* Dark Mode Implementation  */
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


