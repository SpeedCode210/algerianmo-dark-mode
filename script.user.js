// ==UserScript==
// @name        algerianmo.com dark mode
// @namespace   Violentmonkey Scripts
// @include     http://www.algerianmo.com/*
// @include     http://algerianmo.com/*
// @downloadURL https://github.com/SpeedCode210/algerianmo-dark-mode/raw/main/script.user.js
// @icon http://www.algerianmo.com/static/images/favicon.ico
// @version     1.0
// @author      Raouf Ould Ali / SpeedCode#0050
// @description 1/25/2023, 5:34:04 PM
// ==/UserScript==
document.getElementsByTagName('head')[0].innerHTML += `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.0.0/dist/css/bootstrap-dark.min.css" />
<style>
  .math-output { background-color: #343434; }
.table-danger, .table-danger>td, .table-danger>th {
    background-color: #9f2c38;
}
  
.table-success, .table-success>td, .table-success>th {
    background-color: #328b46;
}
</style>
`
const oldColorNormalized = '#9ff99c';
const newColor = '#063804';

let cards = document.getElementsByTagName("div");

for(let i = 0; i < cards.length; i++){
  let bg = window.getComputedStyle(cards[i] ,null).getPropertyValue('background-color');
  if(bg == "rgb(159, 249, 156)"){
    cards[i].style.backgroundColor = 'rgb(6 38 31)';
  }
  else if(bg == "rgb(248, 255, 178)"){
    cards[i].style.backgroundColor = 'rgb(6 6 6)';
  }
  else if(bg == "rgb(188, 255, 186)"){
    cards[i].style.backgroundColor = 'rgb(7 38 24)';
  }
  else if(bg == "rgb(6, 38, 31)"){
    cards[i].style.backgroundColor = 'rgb(34 34 34)';
  }
  else if(bg == "rgb(254, 255, 186)"){
    cards[i].style.backgroundColor = 'rgb(38 38 38)';
  }
  else if(bg == "rgb(255, 228, 105)" || bg == "rgb(253, 255, 163)"){
    cards[i].style.backgroundColor = 'rgb(96 63 1)';
  }
  else if(bg == "rgb(255, 245, 123)"){
    cards[i].style.backgroundColor = 'rgb(106 99 13)';
  }
  else if(bg == "rgb(237, 150, 158)"){
    cards[i].style.backgroundColor = 'rgb(86 0 0)';
  }
  else if(bg == "rgb(245, 198, 203)"){
    cards[i].style.backgroundColor = 'rgb(56 10 15)';
  }
}
