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

/*// Get the modal
var fadvice = document.getElementById("myfadvice");

// Get the button that opens the modal
var bbtn = document.getElementById("burger_btn");

// Get the <span> element that closes the modal
var fspan = document.getElementsByClassName("fclose")[0];

// When the user clicks on the button, open the modal
fbtn.onclick = function () {
    fadvice.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fspan.onclick = function () {
    fadvice.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
var window;
window.onclick = function (event) {
    if (event.target == fadvice) {
        fadvice.style.display = "none";
    } else if (event.target == gadvice) {
        gadvice.style.display = "none";
    } else if (event.target == ladvice) {
        ladvice.style.display = "none";
    } else if (event.target == minfo) {
        minfo.style.display = "none";
    } else if (event.target == oinfo) {
        oinfo.style.display = "none";
    } else if (event.target == binfo) {
        binfo.style.display = "none";
    }
}*/
