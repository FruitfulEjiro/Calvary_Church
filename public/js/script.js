/** @format */

"use strict";

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const xMark = document.querySelector(".x-mark");

hamburger.addEventListener("click", () => {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.style.transform = "translateX(0%)";
});

xMark.addEventListener("click", () => {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.style.transform = "translateX(-100%)";
});

// DropDown Menu
const ministry = document.querySelector(".ministry");
const ministryDropdown = document.querySelector(".ministry-dropdown");
ministry.addEventListener("mouseover", () => {
  ministryDropdown.classList.add("showDropdown");
});
ministry.addEventListener("mouseout", () => {
  ministryDropdown.classList.remove("showDropdown");
});

const resources = document.querySelector(".resources");
const resourcesDropdown = document.querySelector(".resources-dropdown");
resources.addEventListener("mouseover", () => {
  resourcesDropdown.classList.add("showDropdown");
});
resources.addEventListener("mouseout", () => {
  resourcesDropdown.classList.remove("showDropdown");
});

const about = document.querySelector(".about");
const aboutDropdown = document.querySelector(".about-dropdown");
about.addEventListener("mouseover", () => {
  aboutDropdown.classList.add("showDropdown");
});
about.addEventListener("mouseout", () => {
  aboutDropdown.classList.remove("showDropdown");
});
