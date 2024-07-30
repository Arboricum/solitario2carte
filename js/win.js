var coppeOk = 0;
var oriOk = 0;
var spadeOk = 0;
var bastoniOk = 0;
var scomVinte = 0;
var scomVinteP = 0;

function winSeme() {
  if (contpv1 == 10 && coppeOk == 0) {
  valuta();
  cartapv1.style.border = "4px solid " + contPosCol;
  aggPronoG1();
  contPos += 1;
  contPuntiPar += 5;
  contPuntiTot += 5;
  aggPuntiBis();
  coppeOk = 1;
  winGame();
  }
  if (contpv2 == 10 && oriOk == 0) {
  valuta();
  cartapv2.style.border = "4px solid " + contPosCol;
  aggPronoG2();
  contPos += 1;
  contPuntiPar += 5;
  contPuntiTot += 5;
  aggPuntiBis();
  oriOk = 1; 
  winGame();
  }
  if (contpv3 == 10 && spadeOk == 0) {
  valuta();
  cartapv3.style.border = "4px solid " + contPosCol;
  aggPronoG3();
  contPos += 1;
  contPuntiPar += 5;
  contPuntiTot += 5;
  aggPuntiBis();
  spadeOk = 1;
  winGame();
  }
  if (contpv4 == 10 && bastoniOk == 0) {
  valuta();
  cartapv4.style.border = "4px solid " + contPosCol;
  aggPronoG4();
  contPos += 1;
  contPuntiPar += 5;
  contPuntiTot += 5;
  aggPuntiBis();
  bastoniOk = 1;
  winGame();
  }
}

function valuta() {
  switch (contPos) {
  case 1:
  contPosCol = "gold";
  break;
  case 2:
  contPosCol = "silver";
  break;
  case 3:
  contPosCol = "chocolate";
  break;
  case 4:
  contPosCol = "white";
  break;
  }
}


function winGame() {
  if (contPos == 5) {
  carteInserite = 40;
  contPuntiPar += 20;
  contPuntiTot += 20;
  carteC.src = "";
  aggPuntiBis();
  contaVittorie += 1;
  setCookie("vittorieG", contaVittorie, 365);
  document.getElementById('win').innerHTML = "<h2 style='margin-bottom:-16px;margin-top:5px'>Complimenti, hai vinto!</h2><p>Carte inserite: " + carteInserite + "<br>Pronostici esatti: " + scomVinteP + "<br>Punti guadagnati: " + contPuntiPar + "<br>Punti totali: " + contPuntiTot + "</p><br><p id='start1' onclick='nuovaP()'>Nuova partita</p>";
  document.getElementById('win').style.display = 'block';
document.getElementById('win').style.zIndex = '3';
document.getElementsByClassName('contorno2')[0].style.marginTop = '-143px';
cartaG1.removeEventListener("click", inserisci);
cartaG1.removeEventListener("click", inserisci2);
cartaG1.removeEventListener("click", inserisci3);
carteC.removeEventListener("click", reiniziaMazzo);
carteC.removeEventListener("click", reiniziaMazzo1);
carteC.removeEventListener("click", gioco1);
document.getElementById("fine").style.display = "none";
  }
}

function fineGame() {
document.getElementById('win').style.display = 'none';
  carteInserite = 40 - lista.length;
  document.getElementById('win').innerHTML = "<h2 style='margin-bottom:-16px;margin-top:5px'>Hai terminato la partita!</h2><p>Carte inserite: " + carteInserite + "<br>Scommesse vinte: " + scomVinteP + "<br>Punti guadagnati: " + contPuntiPar + "<br>Punti totali: " + contPuntiTot + "</p><br><p id='start1' onclick='nuovaP()'>Nuova partita</p>";
document.getElementById('win').style.display = 'block';
document.getElementById('win').style.zIndex = '3';
document.getElementsByClassName('contorno2')[0].style.marginTop = '-143px';
cartaG1.removeEventListener("click", inserisci);
cartaG1.removeEventListener("click", inserisci2);
cartaG1.removeEventListener("click", inserisci3);
carteC.removeEventListener("click", reiniziaMazzo1);
carteC.removeEventListener("click", gioco1);
document.getElementById("fine").style.display = "none";
}

function nuovaP() {
window.open("Solitariodelleduecarte1.0.html","_self");
}