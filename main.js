let burger = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("show_icon");
  xmark.style.display = "block";
  burger.style.display = "none";
});

xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show_icon");
  xmark.style.display = "none";
  burger.style.display = "block";
});
