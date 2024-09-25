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





  //  about-js


    // تحريك الأقسام الرئيسية عند التمرير
    gsap.registerPlugin(ScrollTrigger);

    // تحريك العناوين
    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // تحريك الفقرات
    gsap.from(".section1-paragraph, .section2-paragraph", {
        scrollTrigger: {
            trigger: ".section1-paragraph, .section2-paragraph",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.3 // تفعيل الفقرات بالتتابع
    });

    // تحريك الصور
    gsap.from(".img-fluid", {
        scrollTrigger: {
            trigger: ".img-fluid",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.9,
        duration: 1
    });

    // تحريك النصوص في قسم الكوكتيلات
    gsap.from(".cocktail-section h2, .cocktail-section h3", {
        scrollTrigger: {
            trigger: ".cocktail-section",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });


    
  
 

