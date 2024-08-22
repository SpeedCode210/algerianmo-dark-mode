// ==UserScript==
// @name        algerianmo.com dark mode
// @namespace   Violentmonkey Scripts
// @include     *algerianmo.com/*
// @downloadURL https://github.com/SpeedCode210/algerianmo-dark-mode/raw/main/script.user.js
// @icon http://www.algerianmo.com/static/images/favicon.ico
// @version     2.4
// @author      Raouf Ould Ali / SpeedCode#0050
// @description 1/25/2023, 5:34:04 PM
// ==/UserScript==

//fixing a bug on not colored submissions
  let changeBg = (indicies, color1, color2) => {
      for(let index of indicies) {
        card = document.getElementById(index);
        if(card != null){
          card.getElementsByClassName('card-header')[0].style.backgroundColor = color1;
          card.getElementsByClassName('card-body')[0].style.backgroundColor = color2;
          card.id += 'c';
        }
      }
  }


const regex = /changeBg\(.+\)/gm;
let text = document.body.parentElement.innerHTML;
let m;

while ((m = regex.exec(text)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        eval(match.toString());
    });
}


//fixing a bug on unremovable drafts
if (window.location.href.includes("sub=0")) {
  let as = document.getElementsByTagName("a");
  for (let a of as)
    if (a.href.includes("delete"))
      a.href = a.href.replace("sub=0/delete", "delete");
}


document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.0.0/dist/css/bootstrap-dark.min.css" title="BoostrapDark"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400&display=swap');
* {font-family: 'Vazirmatn', sans-serif;}
</style>
<style>

.navbar{
    margin: 0px auto 7px auto;
    border-radius: 0px 0px 10px 10px;
    width: fit-content;
    box-shadow: #00000099 0px 0px 15px;
}

body{
padding-bottom: 150px;
}

.card-head, .card-title{
text-align: center;
}

#switch-dark{
position: fixed;
bottom: 20px;
right:20px;
background-color: transparent;
border: none;
height: 50px;
width: 50px;
}
#switch-dark img{
height: 50px;
width: 50px;
border-radius: 100%;
box-shadow: 0px 0px 7px #16161699;
}
#switch-dark:focus{
outline:none !important;
}

.card-text, .card-header h3{ text-align: center;}

.dark #switch-dark img{
box-shadow: 0px 0px 7px #ffffff99;
}

.dark #switch-img-dark img{
box-shadow: 0px 0px 7px #ffffff99;
}

#switch-img-dark{
position: fixed;
bottom: 80px;
right:20px;
background-color: transparent;
border: none;
height: 50px;
width: 50px;
}
#switch-img-dark img{
height: 50px;
width: 50px;
border-radius: 100%;
box-shadow: 0px 0px 7px #16161699;
}
#switch-img-dark:focus{
outline:none !important;
}


.dark .math-output { background-color: #343434; }
.table-danger,.table-danger>td,.table-danger>th {
  background-color: #631C1C;
  color: white;
}

.table-success,.table-success>td,.table-success>th {
  background-color: #115534;
  color: white;
}
.table-warning,.table-warning>td,.table-warning>th {
  background-color: #F4BA24;
  color: black;
}
.dark .logo-amo{
  filter: brightness(0) invert(1);
}
.dark {
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
.force-white > h3 > a,.force-white > a,.force-white a{
  color: white!important;
}

.dark .solution-card-dark img {
filter: invert() contrast(2.5);
}

.green-nav{
  background-color:${ran_col()}!important;
}
.dark .green-nav{
  background-color:${ran_col()} !important;
}

.card{border:0px;  background-color: #0001;  box-shadow: 5px 5px 10px #0006;border-radius: 30px 30px 30px 30px;}
.dark .card{border:0px!important;  background-color: #fff1;  box-shadow: 5px 5px 10px #0006;}
.card-header{border: 0px;!important;}

.head-green  { background-color : #22773A !important; border-radius: 30px 30px 0px 0px !important;}
.body-green  { background-color : #03360f !important; border: solid 15px #22773A; border-radius: 0px 0px 30px 30px; box-shadow: inset 5px 5px 10px #0006; }
.head-red    { background-color : #f50707 !important; border-radius: 30px 30px 0px 0px !important;}
.body-red    { background-color : #611414 !important; border: solid 15px #832929; border-radius: 0px 0px 30px 30px; box-shadow: inset 5px 5px 10px #0006; }

.dark .unknown     { background-color : rgb(12 12 12) !important; }

.head-black  { background-color : #1E7077 !important; border-radius: 30px 30px 0px 0px !important;}
.body-black  { background-color : #17494E !important; border: solid 15px #1E7077; border-radius: 0px 0px 30px 30px; box-shadow: inset 5px 5px 10px #0006; }
.head-yellow { background-color : #cc991d !important; border-radius: 30px 30px 0px 0px !important;}
.body-yellow { background-color : #8a5506 !important; border: solid 15px #cc991d; border-radius: 0px 0px 30px 30px; box-shadow: inset 5px 5px 10px #0006; }

img{border-radius: 25px;}
tr:last-child td:last-child { border-top-left-radius: 10px; }
tr:last-child td:first-child { border-top-right-radius: 10px; }

tr:first-child td:last-child { border-bottom-left-radius: 10px; }
tr:first-child td:first-child { border-bottom-right-radius: 10px; }

.card-header { text-align:center;}

@media print{
  *{color:black!important;}
  .card-body, .card-header{border: 2px solid #000!important;}
  h3, a{color:black!important;}
}
</style>
<!-- MathJax-->
`;

function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['8a6d1d','201661','6174b9','661641','137275','0f6643','33660f','66250f']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];
                return color; // Setting the random color on your div element.
}

/*
for(let frame of document.getElementsByTagName("iframe")){
    if(frame.src.includes("pdf")){
        frame.src = "https://docs.google.com/gview?url="+ encodeURIComponent(frame.src) +"&embedded=true";
    }
}
*/

document.getElementsByTagName("nav")[0].classList.add("green-nav");

let body = document.getElementsByTagName("body")[0];

let cards = document.getElementsByTagName("div");

for (let i = 0; i < cards.length; i++) {
  let bg = window.getComputedStyle(cards[i], null).getPropertyValue('background-color');
  if (bg == "rgb(159, 249, 156)") { //head-green
    cards[i].classList.add("force-white");
    cards[i].classList.add("head-green");
  }
  else if (bg == "rgb(248, 255, 178)") { //head-black
    cards[i].classList.add("force-white");
    cards[i].classList.add("head-black");
  }
  else if (bg == "rgb(188, 255, 186)") { //body-green
    cards[i].classList.add("body-green");
    cards[i].classList.add("force-white");
  }
  else if (bg == "rgb(6, 38, 31)") { // ??
    cards[i].classList.add("unknown");
  }
  else if (bg == "rgb(254, 255, 186)") { //body-black
    cards[i].classList.add("body-black");
    cards[i].classList.add("force-white");
  }
  else if (bg == "rgb(255, 228, 105)" || bg == "rgb(253, 255, 163)") { //head-yellow
    cards[i].classList.add("head-yellow");
    cards[i].classList.add("force-white");
  }
  else if (bg == "rgb(255, 245, 123)") { //body-yellow
    cards[i].classList.add("body-yellow");
    cards[i].classList.add("force-white");
  }
  else if (bg == "rgb(237, 150, 158)") { //head-red
    cards[i].classList.add("head-red");
    cards[i].classList.add("force-white");
  }
  else if (bg == "rgb(245, 198, 203)") { //body-red
    cards[i].classList.add("body-red");
    cards[i].classList.add("force-white");
  }
}

let imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  if (imgs[i].src.includes("/static/images/logo.png")) {
    imgs[i].classList.add("logo-amo");
  }
}

if (!window.location.href.includes("admin"))
  document.getElementsByClassName('container')[0].insertAdjacentHTML('beforebegin',
    '<button type="button" id="switch-dark"><img src="https://raw.githubusercontent.com/SpeedCode210/algerianmo-dark-mode/main/dark-mode.png"></button>');


if (window.location.href.includes("?sub=") || window.location.href.includes("correction")) {
  document.getElementsByClassName('container')[0].insertAdjacentHTML('beforebegin',
    '<button type="button" id="switch-img-dark"><img src="https://raw.githubusercontent.com/SpeedCode210/algerianmo-dark-mode/main/brightness-and-contrast.png"></button>');
  let darkSwitch = () => {
    let cards = document.getElementsByClassName("solution-card");
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains("solution-card-dark")) {
        cards[i].classList.remove("solution-card-dark");
      } else {
        cards[i].classList.add("solution-card-dark");
      }
    }
  }

  darkSwitch();

  document.getElementById("switch-img-dark").addEventListener("click", darkSwitch);

}



document.getElementById("switch-dark").addEventListener("click", () => {
  let boostrapDarkStylesheet = [].slice.call(document.styleSheets).filter(s => s.title == "BoostrapDark")[0];
  boostrapDarkStylesheet.disabled = !boostrapDarkStylesheet.disabled;
  localStorage.dark = localStorage.dark == "TRUE" ? "FALSE" : "TRUE";
  if (localStorage.dark == "TRUE") {
    body.classList.add("dark");
  }
  else {
    body.classList.remove("dark");
  }
});

if (localStorage.dark == "TRUE") {
  body.classList.add("dark");
}


$(document).ready(function () {
  if (!localStorage.dark) {
    localStorage.dark = "TRUE";
  }

  if (localStorage.dark == "TRUE") {
    body.classList.add("dark");
  }
  else {
    body.classList.remove("dark");
  }
  let boostrapDarkStylesheet = [].slice.call(document.styleSheets).filter(s => s.title == "BoostrapDark")[0];
  boostrapDarkStylesheet.disabled = localStorage.dark != "TRUE";
});
