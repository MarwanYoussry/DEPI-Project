/* Navbar on mobile devices */
const btn = document.querySelector('.toggle-nav-mob');
const nav = document.querySelector('.nav-mobile');
const ico = document.querySelector('.bi');
let toggle = true;

btn.addEventListener('click', () => {
  toggle ? moveDown() : moveUp();
});

const toggleNavClasses = (addClass, removeClass, iconAdd, iconRemove) => {
  nav.classList.add(addClass);
  nav.classList.remove(removeClass);
  ico.classList.add(iconAdd);
  ico.classList.remove(iconRemove);
};

const moveDown = () => {
  toggle = false;
  toggleNavClasses('animateDown', 'animateUp', 'bi-x-lg', 'bi-list');
};

const moveUp = () => {
  toggle = true;
  toggleNavClasses('animateUp', 'animateDown', 'bi-list', 'bi-x-lg');
};

/* Resetting Navbar button on browser resizing */
window.addEventListener('resize', () => {
  nav.classList.remove('animateDown', 'animateUp');
  ico.classList.replace('bi-x-lg', 'bi-list');
  toggle = true;
});

/* Navbar shrink on scroll */
const navbar = document.querySelector('.navbar');
let ticking = false;

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const shouldShrink =
        document.documentElement.scrollTop > 4 && document.documentElement.clientWidth > 767;
      navbar.classList.toggle('navbar-shrink', shouldShrink);
      ticking = false;
    });
    ticking = true;
  }
};

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
