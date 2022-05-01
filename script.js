// dropdown for mobile nav
function myFunction() {
    let mytopnav = document.getElementById("myTopnav");
    if (mytopnav.className === "topnav") {
        mytopnav.className += " responsive";
    }
    else {
        mytopnav.className = "topnav";
    }
}

// sets current year for copyright
let date = new Date().getFullYear().toString();
let copyrightYear = document.querySelectorAll('.copyright .js-current-year');
copyrightYearArray = [...copyrightYear];
copyrightYearArray.forEach(function(element) {
    element.textContent = date;
});

// adds class to fixed nav to be styled
var navbar = document.querySelector('nav');
window.onscroll = function() {
  // pageYOffset 
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
};