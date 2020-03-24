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

/*-------GO TO TOP BTN------------------------------*/

//enable/disable scroll button based on scroller position
function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction()
};


/*---GO TO TOP BTN-------------------------------------*/

// When the user clicks on the button, scroll to the top of the document
function topFunction() { // eslint-disable-line no-unused-vars
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

