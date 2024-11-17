"use strict";

const buttons = document.querySelectorAll("button");
let count = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        count++;
        if (count > 0) {
            button.style.display = "none";
            
        }
    });
});