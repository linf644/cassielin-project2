let hoverQuestion = document.querySelector(".hover-question");
let questionMark = document.querySelector(".questionmark");

let hoverExclamation = document.querySelector(".hover-exclamation");
let exclamationMark = document.querySelector(".exclamation");

let hoverApostrophe = document.querySelector(".hover-apostrophe");
let apostrophe = document.querySelector(".apostrophe");

let hoverPeriod = document.querySelector(".hover-period");
let period = document.querySelector(".period");

let hoverColons = document.querySelector(".hover-colons");
let colon = document.querySelector(".colon");
let semiColon = document.querySelector(".semicolon");

let hoverComma = document.querySelector(".hover-comma");
let comma = document.querySelector(".comma");

// hover question mark text and animate question mark
hoverQuestion.addEventListener("mouseover", function() {
    questionMark.classList.add("shake");
})
hoverQuestion.addEventListener("mouseout", function() {
    questionMark.classList.remove("shake");
})
// hvoer exclamation and animate exclamation mark
hoverExclamation.addEventListener("mouseover", function(){
    exclamationMark.classList.add("shake");
})
hoverExclamation.addEventListener("mouseout", function(){
    exclamationMark.classList.remove("shake");
})
// hover apostrophe and animate punctuation of apostrophe
hoverApostrophe.addEventListener("mouseover", function(){
    apostrophe.classList.add("shake");
})
hoverApostrophe.addEventListener("mouseout", function(){
    apostrophe.classList.remove("shake");
})
// hover period and animate punctuation of period
hoverPeriod.addEventListener("mouseover", function(){
    period.classList.add("shake");
})
hoverPeriod.addEventListener("mouseout", function(){
    period.classList.remove("shake");
})
// hover over colons and semicolons and animate punctuations of colons and semicolons
hoverColons.addEventListener("mouseover", function(){
    colon.classList.add("shake");
    semiColon.classList.add("shake");
})
hoverColons.addEventListener("mouseout", function(){
    colon.classList.remove("shake");
    semiColon.classList.remove("shake");
})
// hover over comma and animate punctuation of comma
hoverComma.addEventListener("mouseover", function(){
    comma.classList.add("shake");
})
hoverComma.addEventListener("mouseout", function(){
    comma.classList.remove("shake");
})
// open pop-up module whilte clicking the wrong answer
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }