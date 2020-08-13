// hex.js

const colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const app = document.querySelector(".app");

// #FF2351
btn.addEventListener("click", ()=>{
    
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        hexColor += colors[getRandomNumber()];
    }

    // console.log(hexColor);

    color.textContent = hexColor;
    app.style.backgroundColor = hexColor;
});

getRandomNumber = ()=>{
    return Math.floor(Math.random() * colors.length);
}


