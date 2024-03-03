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

// SCHEDULE PAGE

const upcoming = document.querySelector(".upcoming");
const concluded = document.querySelector(".concluded");
const eventText = document.querySelector(".event-text");

upcoming.addEventListener("click", () => {
  upcoming.style.borderBottom = "3px solid #0e60bf";
  concluded.style.border = "none";
  upcoming.style.color = "#0e60bf";
  eventText.innerHTML = `No available upcoming schedules for this date`;
});

concluded.addEventListener("click", () => {
  concluded.style.borderBottom = "3px solid #0e60bf";
  upcoming.style.border = "none";
  concluded.style.color = "#0e60bf";
  eventText.innerHTML = `No available concluded schedules for this date`;
});

const month = document.querySelector(".month");
const year = document.querySelector(".year");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();
let monthIndex = currentDate.getMonth();
let yearIndex = currentDate.getFullYear();
month.innerHTML = monthNames[monthIndex];
year.innerHTML = yearIndex;

// console.log(monthIndex, yearIndex);

leftButton.addEventListener("click", () => {
  if (monthIndex > 0) {
    monthIndex--;
    month.innerHTML = monthNames[monthIndex];
  } else if (monthIndex <= 0) {
    monthIndex = 11;
    yearIndex--;
    month.innerHTML = monthNames[monthIndex];
    year.innerHTML = yearIndex;
  }
});

rightButton.addEventListener("click", () => {
  if (monthIndex < 11) {
    monthIndex++;
    month.innerHTML = monthNames[monthIndex];
  } else if (monthIndex >= 11) {
    monthIndex = 0;
    yearIndex++;
    month.innerHTML = monthNames[monthIndex];
    year.innerHTML = yearIndex;
  }
});