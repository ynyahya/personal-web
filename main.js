import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#element", {
  strings: ["Social media management", "SEO optimization", "Brand strategy"],
  typeSpeed: 50,
});

const appreciateBtn = document.getElementById("appreciate");
appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});

const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


 let navbarlinks = select('#navbar .scrollto', true)
 const navbarlinksActive = () => {
   let position = window.scrollY + 200
   navbarlinks.forEach(navbarlink => {
     if (!navbarlink.hash) return
     let section = select(navbarlink.hash)
     if (!section) return
     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
       navbarlink.classList.add('active')
     } else {
       navbarlink.classList.remove('active')
     }
   })
 }
 window.addEventListener('load', navbarlinksActive)
 onscroll(document, navbarlinksActive)
