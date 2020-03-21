var document;

// Get the modal
var arcticinfo = document.getElementById("arctic");
var froginfo = document.getElementById("frog");
var africainfo = document.getElementById("africa");


// Get the button that opens the modal
var arcticbtn = document.getElementById("arctic_btn");
var frogbtn = document.getElementById("frog_btn");
var africabtn = document.getElementById("africa_btn");

// When the user clicks on the button, open the modal
arcticbtn.onclick = function () {
    if (arcticinfo.style.display == "block"){
    arcticinfo.style.display = "none";
    } else{
       arcticinfo.style.display = "block";
    }
    froginfo.style.display = "none";
    africainfo.style.display = "none";
}

frogbtn.onclick = function () {
    if (froginfo.style.display == "block"){
    froginfo.style.display = "none";
    } else{
       froginfo.style.display = "block";
    }
    africainfo.style.display = "none";
    arcticinfo.style.display = "none";
}

africabtn.onclick = function () {
     if (africainfo.style.display == "block"){
    africainfo.style.display = "none";
    } else{
       africainfo.style.display = "block";
    }
    arcticinfo.style.display = "none";
    froginfo.style.display = "none";
}

// Get the <span> element that closes the modal
/*var fspan = document.getElementsByClassName("fclose")[0];
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
}*/

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
