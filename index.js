let iconEl = document.querySelector("#icon-hamburger");
let navEl = document.querySelector("#nav-el");

iconEl.addEventListener("touchstart", handleHamburger);
/* iconEl.addEventListener("touchcancel", closeHamburger); */

function handleHamburger() {
  navEl.classList.toggle("mobile-nav-items");
}
