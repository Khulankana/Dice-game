// toglogchiin eeljiig hadgalah huvisagch, 1r toglogchiig 0, 2r toglogchiig 1 gej temdegleye.
var activePlayer = 1;


// toglogchiin ysugluulsan onoog hadgalah huvisagch. 2 onoog 1 massivt hadgalj uguh ni tohiromjtoi
var scores = [0 , 0];

// toglpgchiin eeljindee tsugluulj bgaa iniig hadgalah huvisagch
var roundScore = 0;

// shoog ali talaaraa buusniig hadgalah huvisagch heregtei 1-6 gesn sanamsarguigeer huvisagchid ni hadgalj ugnu.
var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

/* 
document.querySelector("#score-0").textContent = dice; contentiin utgiig uurchluhud
document.querySelector("#score-1").innerHTML = "<em>Yes !<em>";  html bichij uguhud innerHtml gene
*/
console.log("Shoo : " + dice)