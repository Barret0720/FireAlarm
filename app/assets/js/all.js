$(function () {
  console.log("一個住警器，守護全家人");
});

// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
const link  = document.querySelector(".nav-link");
const page= location.pathname ;
console.log(page);
if(page == '/qa.html'  || page == '/alarm.html'  ){
  header.classList.remove("fixed-top","mt-4","mt-md-10");
  header.classList.add("bg-secondary");
  link.classList.add("text-primary");
  link.classList.remove("text-lg-gray1","text-white");
  console.log("YES");
}
else{
  window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 86) {
      // header.classList.add("bg-secondary");
      // header.classList.add("sticky-top");
      header.classList.remove("fixed-top");
    } else {
      header.classList.add("fixed-top");
      // header.classList.remove("bg-secondary");
      // header.classList.remove("sticky-top");
    }
  };
};

