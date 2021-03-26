const hamburger = document.querySelector(".menu");
const hamburgerImage = document.querySelector(".menu_img");
const navlinks = document.querySelector(".nav__bar");
const links = document.querySelector(".nav");

//Hamburger Button
hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  checkOpen();
});

function checkOpen() {
  if (navlinks.classList.contains("open"))
    hamburgerImage.src = "icon/menu-cross.svg";
  else hamburgerImage.src = "icon/menu.svg";
}
