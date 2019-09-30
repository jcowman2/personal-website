// import smoothscroll from "smoothscroll-polyfill";

// smoothscroll.polyfill();

const anchorAbout = document.querySelector("#_about");

const btnEnterSite = document.querySelector("#btn-enter-site");
btnEnterSite.onclick = () => {
  console.log("yo");
  // anchorAbout.scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
});
