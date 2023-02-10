// ==UserScript==
// @name        algerianmo.com dark mode
// @namespace   Violentmonkey Scripts
// @include     *algerianmo.com/*
// @downloadURL https://github.com/SpeedCode210/algerianmo-dark-mode/raw/main/script.user.js
// @icon http://www.algerianmo.com/static/images/favicon.ico
// @version     1.3.2
// @author      Raouf Ould Ali / SpeedCode#0050
// @description 1/25/2023, 5:34:04 PM
// ==/UserScript==

document.getElementsByTagName('head')[0].innerHTML += `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.0.0/dist/css/bootstrap-dark.min.css" title="BoostrapDark"/>
<style>
  .dark .math-output { background-color: #343434; }
.table-danger, .table-danger>td, .table-danger>th {
    background-color: #631C1C;
    color: white;
}

.dark .table-success, .table-success>td, .table-success>th {
    background-color: #3A7722;
    color: white;
}
  .dark .table-warning, .table-warning>td, .table-warning>th {
    background-color: #F4BA24;
    color: black;
}
  .dark .logo-amo{
    filter: brightness(0) invert(1);
  }
  .dark {
    background-color: #1C1D21;
  }
  .dark .force-black{
    color : black!important;
  }
  .dark .force-black > h3 > a, .force-black > a{
    color: black!important;
  }

  .dark .force-white{
    color : white!important;
  }
  .dark .force-white > h3 > a, .force-white > a{
    color: white!important;
  }

  .dark .solution-card img {
  filter: invert() contrast(1.5);
  }

  .dark .green-nav{
    background-color:#105636!important;
  }

  .dark .head-green  { background-color : #274F17 !important; }
  .dark .head-black  { background-color : #3B3947 !important; }
  .dark .body-green  { background-color : #3A7722 !important; }
  .dark .unknown     { background-color : rgb(34 34 34) !important; }
  .dark .body-black  { background-color : #312F37 !important; }
  .dark .head-yellow { background-color : #BB5D25 !important; }
  .dark .body-yellow { background-color : #E38725 !important; }
  .dark .head-red    { background-color : #631C1C !important; }
  .dark .body-red    { background-color : #772222 !important; }
</style>
`

document.getElementsByTagName("nav")[0].classList.add("green-nav");

let body = document.getElementsByTagName("body")[0];

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

var boostrapDarkStylesheet = [].slice.call(document.styleSheets).filter(s=>s.title == "BoostrapDark")[0];
document.getElementById("switch-dark").addEventListener("click", ()=>{
  boostrapDarkStylesheet.disabled = !boostrapDarkStylesheet.disabled;
  localStorage["dark"] = localStorage["dark"] == "TRUE" ? "FALSE" : "TRUE";
  if(localStorage["dark"] == "TRUE"){
    body.classList.add("dark");
  }
  else{
    body.classList.remove("dark");
  }
});

if(!localStorage["dark"]){
  localStorage["dark"] = "TRUE";
}

if(localStorage["dark"] == "TRUE"){
  body.classList.add("dark");
}
boostrapDarkStylesheet.disabled = localStorage["dark"] != "TRUE";




