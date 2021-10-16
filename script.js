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
