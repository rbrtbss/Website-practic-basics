"use strict";

// work on modal:

// assigned- all variables ===============:
/**
 * assign all variables
 */
let backdrop = document.querySelector(".backdrop");
let selectPlanButtons = document.querySelectorAll(".plan button");
let modal = document.querySelector(".modal");

// close modal-action
let modalBtnNo = document.querySelector(".modal__action--negative");

// Toggle bar variables:
let toggleBtn = document.querySelector(".toggle-btn");
let mobileNav = document.querySelector(".mobile-nav");

// NAMED FUNCTIONS:
// named function: open modal
function openModal() {
  modal.classList.add("open");
  backdrop.classList.add("open");

  // modal.style.display = "block";
  // backdrop.style.display = "block";
}
// named function: close modal
function closeModal() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");

  // modal.style.display = "none";
  // backdrop.style.display = "none";
}
// named function: mobile nav
function openNav() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");

  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
}
function closeNav() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");

  // mobileNav.style.display = "none";
  // backdrop.style.display = "none";
}

// check if selections is right:
console.dir(backdrop.style["background-image"]);
// ====================
// open modal:
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", openModal);
}
// for (let i = 0; i < selectPlanButtons.length; i++) {
//   selectPlanButtons[i].addEventListener("click", function () {
//     openModal();
//   });
// }
// close modal by clicking on "No":
if (modalBtnNo) {
  modalBtnNo.addEventListener("click", closeModal);
}
// close modal by clicking on "Background":
backdrop.addEventListener("click", function () {
  closeNav();
  closeModal();
});

// addEventListener to open mobile navigation:
toggleBtn.addEventListener("click", openNav);

// close mobileNavigation by clicking on "Background":
// backdrop.addEventListener("click", closeNav);
