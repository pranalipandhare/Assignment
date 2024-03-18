let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  menu.classList.remove("active");
};

let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("active");
  search.classList.remove("active");
};

///
let submenu = document.querySelector(".new");

document.querySelector("#submenu").onclick = () => {
  submenu.classList.toggle("active");
  submenu1.classList.remove("active");
  submenu2.classList.remove("active");
};

let submenu1 = document.querySelector(".navbar");

document.querySelector("#submenu1").onclick = () => {
  submenu1.classList.toggle("active");
  submenu2.classList.remove("active");
  submenu.classList.remove("active");
};

let submenu2 = document.querySelector(".navbar");

document.querySelector("#submenu2").onclick = () => {
  submenu2.classList.toggle("active");
  submenu1.classList.remove("active");
  submenu.classList.remove("active");
};

//hiding Meu and search box on scroll

window.onscroll = () => {
  menu.classList.remove("active");
  search.classList.remove("active");
};

//Header

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
