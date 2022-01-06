const hamburger = document.getElementsByClassName("hamburger")[0];
const navlinks = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener('click', transformOpenHamburger);

let isHamburgerOpen = false;

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");



function transformOpenHamburger() {
    
    if (!isHamburgerOpen) {
        bar2.classList.add("bar-transform-middle");
        bar1.classList.add("bar-transform", "bar-transform-top");
        bar3.classList.add("bar-transform", "bar-transform-bottom");

        isHamburgerOpen = true;
        openHamburgerMenu();
    }
    else {
        bar2.classList.remove("bar-transform-middle");
        bar1.classList.remove("bar-transform", "bar-transform-top");
        bar3.classList.remove("bar-transform", "bar-transform-bottom");
        isHamburgerOpen = false;

        navlinks.style.display = "";
    }
}

var nav = document.getElementsByTagName("nav")[0];

function openHamburgerMenu() {
    navlinks.style.display = "inline";
}