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
    signup_form.style.display = "none";
});

close_button.addEventListener("click", () => {
    cover.style.display = "none";
    login_form.style.display = "none";
});

login_button.addEventListener("click", () => {
    cover.style.display = "none";
    login_form.style.display = "none";
    alert("Login successful");
});

const signup_form = document.querySelector(".signup_form");
const signup = document.querySelector(".signup");
const signup_button = document.querySelector(".signup_button");
const close_button1 = document.querySelector(".close_button1");

signup.addEventListener("click", () => {
    cover.style.display = "block";
    signup_form.style.display = "flex";
    login_form.style.display = "none";
});

signup_button.addEventListener("click", () => {
    cover.style.display = "none";
    signup_form.style.display = "none";
    alert("Sign up successful");
});

close_button1.addEventListener("click", () => {
    cover.style.display = "none";
    signup_form.style.display = "none";
});

const change_location = document.querySelector(".change_location");
const location1 = document.querySelector(".location");

change_location.addEventListener("click", () => {
    let entered_location = prompt("Enter your location");
    if (entered_location === null || entered_location === "") {
        entered_location = "Unset";
    }
    location1.textContent = entered_location;
});