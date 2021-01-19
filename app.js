// toglogchiin eeljiig hadgalah huvisagch, 1r toglogchiig 0, 2r toglogchiig 1 gej temdegleye.
var activePlayer = 0;

// toglogchiin ysugluulsan onoog hadgalah huvisagch. 2 onoog 1 massivt hadgalj uguh ni tohiromjtoi
var scores = [0 , 0];

// toglpgchiin eeljindee tsugluulj bgaa iniig hadgalah huvisagch
var roundScore = 0;

document.getElementById("score-0").textContent = "0";  // getElementbyId ni queryseectoroosoo iluu hurdan ajilladg.
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog ali talaaraa buusniig hadgalah huvisagch heregtei 1-6 gesn sanamsarguigeer huvisagchid ni hadgalj ugnu. shoog shideh eventlistener.
document.querySelector(".btn-roll").addEventListener('click', function () {
      var diceNumber = Math.floor(Math.random() * 6) + 1;
      //alert(" shoo shidegdlee : " + diceNumber);

      // zurgiig block bolgoj haragduulna
      diceDom.style.display = "block";

      //1-6 sanamsargui toonii hargalzah shoog img iin src-d hargalzuulj ugch bna
      diceDom.src = "dice-" + diceNumber + ".png";

      //buusan too ni 1s yalgaatai uyed idevhitei toglogchiin eeljiin onoog  nemeduulne.
      if(diceNumber !== 1) {
            //1s yalgaatai too buulaa
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
      } else {
            // 1 buusan tul toglogchiin eeljiig solij ugnu. onoog ni 0 bolgono
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = roundScore;

            //Toglogchiin eeljiig solino
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

            //ulaan tsegig shiljuuleh . classlist dr ni remove gd nemj add ged hasaj bolno toglle heregleh hergtei toglle ni acrive bval hasaad active bhgui bval nemeed yavaad bdg 
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            // shoog alga bolgono
            diceDom.style.display = "none";
      }
});

/* 
document.querySelector("#score-0").textContent = dice; contentiin utgiig uurchluhud
document.querySelector("#score-1").innerHTML = "<em>Yes !<em>";  html bichij uguhud innerHtml gene
*/