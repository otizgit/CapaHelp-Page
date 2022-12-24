// ? LOGIN JS:
const logHamburger = document.querySelector(".log-ham");
const logNav = document.querySelector(".log-nav");
const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");
const registerModal = document.querySelector(".register-modal")
const loginModal = document.querySelector(".login-modal");
const overlay = document.querySelector(".overlay");
const logX = document.querySelector('.log-x')

logHamburger.addEventListener("click", function () {
  logNav.classList.add("display-nav");
  logHamburger.classList.add("active-ham");
  loginBtn.classList.add('display-links')
  registerBtn.classList.add('display-links')
  logX.classList.add("display-links");
});

logX.addEventListener("click", function () {
  logNav.classList.remove("display-nav");
  logHamburger.classList.remove("active-ham");
  loginBtn.classList.remove('display-links')
  registerBtn.classList.remove('display-links')
  logX.classList.remove("display-links");
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
