// ? LOGIN JS:
const logHamburger = document.querySelector(".log-ham");
const nav = document.querySelector("nav");
const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");
const registerModal = document.querySelector(".register-modal")
const loginModal = document.querySelector(".login-modal");
const overlay = document.querySelector(".overlay");

logHamburger.addEventListener("click", function () {
  nav.classList.toggle("display-nav");
  logHamburger.classList.toggle("active-ham");
});

loginBtn.addEventListener("click", function () {
  loginModal.classList.add("show-modal");
  overlay.classList.add("show-overlay");
});

registerBtn.addEventListener("click", function () {
  registerModal.classList.add("show-modal");
  overlay.classList.add("show-overlay");
});


overlay.addEventListener("click", function () {
  overlay.classList.remove("show-overlay");
  loginModal.classList.remove("show-modal");
  registerModal.classList.remove("show-modal");
});
