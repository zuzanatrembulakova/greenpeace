var document;

//set up burger menu handler
const navbar = document.getElementById("navbar");
if (document.querySelector(".burger_menu") != null) {
    const bmenu = document.querySelector(".burger_menu");
    bmenu.addEventListener("click", function () {
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
    })
} else {
    navbar.style.display = "block";
};

// Get the modal
var froginfo = document.getElementById("frog");
var arcticinfo = document.getElementById("arctit");
var africainfo = document.getElementById("africa");

// Get the button that opens the modal
var frogbtn = document.getElementById("frog_btn");
var arcticbtn = document.getElementById("arctic_btn");
var africabtn = document.getElementById("africa_btn");

// When the user clicks on the button, open the modal
frogbtn.onclick = function () {
    froginfo.style.display = "block";
}

arcticbtn.onclick = function () {
    arcticinfo.style.display = "block";
}

africabtn.onclick = function () {
    africainfo.style.display = "block";
}

// Get the <span> element that closes the modal
var fspan = document.getElementsByClassName("fclose")[0];
var aspan = document.getElementsByClassName("aclose")[0];
var afspan = document.getElementsByClassName("afclose")[0];

// When the user clicks on <span> (x), close the modal
fspan.onclick = function () {
    froginfo.style.display = "none";
}

aspan.onclick = function () {
    arcticinfo.style.display = "none";
}

afspan.onclick = function () {
    africainfo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*var window;
window.onclick = function (event) {
    if (event.target == froginfo) {
        froginfo.style.display = "none";
    } else if (event.target == africainfo) {
        africainfo.style.display = "none";
    } else if (event.target == arcticinfo) {
        arcticinfo.style.display = "none";
    }
}*/
