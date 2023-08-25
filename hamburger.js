/******w***********
    
    Project 2 Javascript
    Name: Zach Jordan
    Date: 2023 08 21
    Description: This file adds logic and functionality to a hamber menu for the navagation bar

******************/

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector("#nav_links");
    const overlay = document.querySelector("#overlay");
    const closeButton = document.querySelector("#closeButton"); 

    hamburger.addEventListener("click", function() {
        navigation.classList.add("show");
        overlay.classList.add("show");
        closeButton.classList.add("show"); // Show the mobile navigation
    });
    
    closeButton.addEventListener("click", function() {
        navigation.classList.remove("show");
        overlay.classList.remove("show");
        closeButton.classList.remove("show"); // Hide the mobile navigation
    });
});