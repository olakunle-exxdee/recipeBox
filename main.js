const menuBtn = document.querySelector(".menu");
const barBtn = document.querySelector(".menu__bar");
const navOne = document.querySelector(".navbar__one");
const navTwo = document.querySelector(".navbar__two");
const title = document.querySelector(".title");
const dropdown1 = document.querySelector(".dropdown__menu");
const dropdown = document.querySelector(".dropdown");
const fa = document.querySelector(".fa");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    barBtn.classList.add("open");
    navOne.classList.add("open");
    navTwo.classList.add("open");
    showMenu = true;
  } else {
    barBtn.classList.remove("open");
    navOne.classList.remove("open");
    navTwo.classList.remove("open");
    showMenu = false;
  }
}

title.addEventListener("click", dropdownMenu);

function dropdownMenu() {
  if (!showMenu) {
    dropdown1.classList.add("open");
    fa.classList.add("open");
    showMenu = true;
  } else {
    dropdown1.classList.remove("open");
    fa.classList.remove("open");
    showMenu = false;
  }
}

gsap.fromTo("hereContent", { x: "20rem", opacity: 0 });
