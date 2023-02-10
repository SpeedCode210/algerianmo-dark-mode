// ==UserScript==
// @name        algerianmo.com dark mode
// @namespace   Violentmonkey Scripts
// @include     *algerianmo.com/*
// @downloadURL https://github.com/SpeedCode210/algerianmo-dark-mode/raw/main/script.user.js
// @icon http://www.algerianmo.com/static/images/favicon.ico
// @version     1.3
// @author      Raouf Ould Ali / SpeedCode#0050
// @description 1/25/2023, 5:34:04 PM
// ==/UserScript==

document.getElementsByTagName('head')[0].innerHTML += `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.0.0/dist/css/bootstrap-dark.min.css" title="BoostrapDark"/>
<style title="DarkMode">
  .math-output { background-color: #343434; }
.table-danger, .table-danger>td, .table-danger>th {
    background-color: #631C1C;
    color: white;
}

.table-success, .table-success>td, .table-success>th {
    background-color: #3A7722;
    color: white;
}
  .table-warning, .table-warning>td, .table-warning>th {
    background-color: #F4BA24;
    color: black;
}
  .logo-amo{
    filter: brightness(0) invert(1);
  }
  body{
    background-color: #1C1D21;
  }
  .force-black{
    color : black!important;
  }
  .force-black > h3 > a, .force-black > a{
    color: black!important;
  }

  .force-white{
    color : white!important;
  }
  .force-white > h3 > a, .force-white > a{
    color: white!important;
  }

  .solution-card img {
  filter: invert() contrast(1.5);
  }

  .green-nav{
    background-color:#105636!important;
  }

  .head-green  { background-color : #274F17!important; }
  .head-black  { background-color : #3B3947!important; }
  .body-green  { background-color : #3A7722!important; }
  .unknown     { background-color : rgb(34 34 34)!important; }
  .body-black  { background-color : #312F37!important; }
  .head-yellow { background-color : #BB5D25!important; }
  .body-yellow { background-color : #E38725!important; }
  .head-red    { background-color : #631C1C!important; }
  .body-red    { background-color : #772222!important; }
</style>
`

document.getElementsByTagName("nav")[0].classList.add("green-nav");


let cards = document.getElementsByTagName("div");

for(let i = 0; i < cards.length; i++){
  let bg = window.getComputedStyle(cards[i] ,null).getPropertyValue('background-color');
  if(bg == "rgb(159, 249, 156)"){ //head-green
    cards[i].classList.add("force-white");
    cards[i].classList.add("head-green");
  }
  else if(bg == "rgb(248, 255, 178)"){ //head-black
    cards[i].classList.add("force-white");
    cards[i].classList.add("head-black");
  }
  else if(bg == "rgb(188, 255, 186)"){ //body-green
    cards[i].classList.add("body-green");
    cards[i].classList.add("force-white");
  }
  else if(bg == "rgb(6, 38, 31)"){ // ??
    cards[i].classList.add("unknown");
  }
  else if(bg == "rgb(254, 255, 186)"){ //body-black
    cards[i].classList.add("body-black");
    cards[i].classList.add("force-white");
  }
  else if(bg == "rgb(255, 228, 105)" || bg == "rgb(253, 255, 163)"){ //head-yellow
    cards[i].classList.add("head-yellow");
    cards[i].classList.add("force-black");
  }
  else if(bg == "rgb(255, 245, 123)"){ //body-yellow
    cards[i].classList.add("body-yellow");
    cards[i].classList.add("force-black");
  }
  else if(bg == "rgb(237, 150, 158)"){ //head-red
    cards[i].classList.add("head-red");
    cards[i].classList.add("force-white");
  }
  else if(bg == "rgb(245, 198, 203)"){ //body-red
    cards[i].classList.add("body-red");
    cards[i].classList.add("force-white");
  }
}

let imgs = document.getElementsByTagName("img");
for(let i =0; i < imgs.length; i++){
  if(imgs[i].src.includes("/static/images/logo.png"))
    imgs[i].classList.add("logo-amo");
}
let nav = document.getElementsByClassName("navbar-nav")[0];
nav.innerHTML = nav.innerHTML +
  '<button type="button" id="switch-dark" class="btn btn-dark">Dark Mode Toggle</button>';
var darkModeStylesheet = [].slice.call(document.styleSheets).filter(s=>s.title == "DarkMode")[0];
var boostrapDarkStylesheet = [].slice.call(document.styleSheets).filter(s=>s.title == "BoostrapDark")[0];
document.getElementById("switch-dark").addEventListener("click", ()=>{
  darkModeStylesheet.disabled = !darkModeStylesheet.disabled;
  boostrapDarkStylesheet.disabled = !boostrapDarkStylesheet.disabled;
  localStorage["dark"] = localStorage["dark"] == "TRUE" ? "FALSE" : "TRUE";
});

if(!localStorage["dark"]){
  localStorage["dark"] = "TRUE";
}

darkModeStylesheet.disabled = localStorage["dark"] != "TRUE";
boostrapDarkStylesheet.disabled = localStorage["dark"] != "TRUE";




