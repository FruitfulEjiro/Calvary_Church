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

// +++++++++++++++++++++Ministry Page++++++++++++++++++++

const men = document.querySelector(".men-ministry");
const women = document.querySelector(".women-ministry");
const youth = document.querySelector(".youth-ministry");
const children = document.querySelector(".children-ministry");

const menMinistry = document.querySelector(".ministry-wrapper-men");
const womenMinistry = document.querySelector(".ministry-wrapper-women");
const youthMinistry = document.querySelector(".ministry-wrapper-youth");
const childrenMinistry = document.querySelector(".ministry-wrapper-children");

men.addEventListener("click", () => {
  menMinistry.classList.remove("hidden");
  men.classList.add("active");
  womenMinistry.classList.add("hidden");
  women.classList.remove("active");
  youthMinistry.classList.add("hidden");
  youth.classList.remove("active");
  childrenMinistry.classList.add("hidden");
  children.classList.remove("active");
});
women.addEventListener("click", () => {
  womenMinistry.classList.remove("hidden");
  women.classList.add("active");
  menMinistry.classList.add("hidden");
  men.classList.remove("active");
  youthMinistry.classList.add("hidden");
  youth.classList.remove("active");
  childrenMinistry.classList.add("hidden");
  children.classList.remove("active");
});
youth.addEventListener("click", () => {
  youthMinistry.classList.remove("hidden");
  youth.classList.add("active");
  womenMinistry.classList.add("hidden");
  women.classList.remove("active");
  menMinistry.classList.add("hidden");
  men.classList.remove("active");
  childrenMinistry.classList.add("hidden");
  children.classList.remove("active");
});
children.addEventListener("click", () => {
  childrenMinistry.classList.remove("hidden");
  children.classList.add("active");
  womenMinistry.classList.add("hidden");
  women.classList.remove("active");
  youthMinistry.classList.add("hidden");
  youth.classList.remove("active");
  menMinistry.classList.add("hidden");
  men.classList.remove("active");
});
