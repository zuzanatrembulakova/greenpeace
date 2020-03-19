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


