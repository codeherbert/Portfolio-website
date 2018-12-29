function myFunction() {
    var mytopnav = document.getElementById("myTopnav");
    if (mytopnav.className === "topnav") {
        mytopnav.className += " responsive";
    }
    else {
        mytopnav.className = "topnav";
    }
}
