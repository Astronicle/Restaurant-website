"use strict";

// const buttons = document.querySelectorAll("button");
// let count = 0;

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         count++;
//         if (count > 0) {
//             button.style.display = "none";
            
//         }
//     });
// });

const login_form = document.querySelector(".login_form");
const cover = document.querySelector(".cover");
const login = document.querySelector(".login");
const close_button = document.querySelector(".close_button");
const login_button = document.querySelector(".login_button");

login.addEventListener("click", () => {
    cover.style.display = "block";
    login_form.style.display = "flex";
});

close_button.addEventListener("click", () => {
    cover.style.display = "none";
    login_form.style.display = "none";
});

login_button.addEventListener("click", () => {
    cover.style.display = "none";
    login_form.style.display = "none";
});