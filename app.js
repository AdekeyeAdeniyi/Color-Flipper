// app.js

const colors = ["Red", "Green", "Orange", "Yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const app = document.querySelector(".app");

btn.addEventListener("click", ()=>{
    
    // get random number
    let randomNumber = getRandomNumber();
    let curColor = colors[randomNumber];

    // display current color
    color.textContent = curColor;

    // change app background-color
    app.style.backgroundColor = curColor;
});

// generating random numbers from 0 - 14
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}