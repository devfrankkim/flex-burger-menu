const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const socialMedia = document.querySelector(".navbar__social-media");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  console.log(menu);
  socialMedia.classList.toggle("active");
  console.log(socialMedia);
});
