"use strict";

// work on modal:

// assigned-variables:
let backdrop = document.querySelector(".backdrop");
let selectPlanButtons = document.querySelectorAll(".plan button");
let modal = document.querySelector(".modal");
// close modal-action
let modalBtnNo = document.querySelector(".modal__action--negative");

// named function: open modal
function openModal() {
  modal.style.display = "block";
  backdrop.style.display = "block";
}

// named function: close modal
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

// check if selections is right:
console.dir(modal);
// ====================
// open modal:
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", openModal);
}
// close modal by clicking on "No":
modalBtnNo.addEventListener("click", closeModal);
// close modal by clicking on "Background":
backdrop.addEventListener("click", closeModal);
