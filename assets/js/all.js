"use strict";

$(function () {
  console.log("一個住警器，守護全家人");
}); // add class navbarDark on navbar scroll

var header = document.querySelector(".navbar");
var page = location.pathname;
console.log(page);

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 86) {
    // header.classList.add("bg-secondary");
    // header.classList.add("sticky-top");
    header.classList.remove("fixed-top");
  } else {
    header.classList.add("fixed-top"); // header.classList.remove("bg-secondary");
    // header.classList.remove("sticky-top");
  }
};
//# sourceMappingURL=all.js.map
