"use strict";

// import smoothscroll from "smoothscroll-polyfill";

// smoothscroll.polyfill();

var anchorAbout = document.querySelector("#_about");

var btnEnterSite = document.querySelector("#btn-enter-site");
btnEnterSite.onclick = function () {
  console.log("yo");
  // anchorAbout.scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
});