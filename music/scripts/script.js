/*
Student Name: Jacob Iglesias
File Name: script.js
Date: 9/21/2020
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
