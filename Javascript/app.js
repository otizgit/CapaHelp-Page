// ? INTRO AND SOLUTIONS JS:
const user = document.querySelector(".user");
const userDetails = document.querySelector(".user-details");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const bell = document.querySelector(".bell");
const header = document.querySelector("header");
const notifications = document.querySelector(".notifications");
const close = document.querySelector(".close");
const mark = document.querySelector(".mark");
const notificationBoxes = document.querySelectorAll(".notification-box");
const notificationContainer = document.querySelector(".notification-container");
const xMark = document.querySelector(".x-mark");

hamburger.addEventListener("click", function () {
  nav.classList.add("display-nav");
  bell.classList.add("display-links");
  links.forEach(function (link) {
    link.classList.add("display-links");
  });

  user.classList.add("display-links");
  hamburger.classList.add("active-ham");
  xMark.classList.add("display-links");
});

xMark.addEventListener("click", function () {
  nav.classList.remove("display-nav");
  bell.classList.remove("display-links");
  links.forEach(function (link) {
    link.classList.remove("display-links");
  });

  user.classList.remove("display-links");
  hamburger.classList.remove("active-ham");
  xMark.classList.remove("display-links");
});

user.addEventListener("click", function () {
  userDetails.classList.toggle("load");
});

notifications.style.top = header.getBoundingClientRect().height + "px";

bell.addEventListener("click", function () {
  notifications.classList.toggle("show-notification");
  notificationContainer.classList.toggle("notification-delay");
});

close.addEventListener("click", function () {
  notifications.classList.remove("show-notification");
  notificationContainer.classList.remove("notification-delay");
});

mark.addEventListener("click", function () {
  notificationBoxes.forEach(function (notificationBox) {
    notificationBox.classList.add("read");
  });
});
