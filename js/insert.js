

function inserisci() {
cartaG2.removeEventListener("click", inserisci);
var seme = lista[contG2][1];
  switch (seme) {
     case "Coppe":
        if (lista[contG2][0] == contpv1 + 1) {
        document.getElementsByClassName("mc")[0].style.display = 'none';
        document.getElementsByClassName("pv")[0].style.border = "none";
        cartapv1.src = lista[contG2][2];
        cartaG2.src = "";
        contpv1 += 1;
        listaProv.push(contG2);
        aggPunti();
        winSeme();
        cartaG1.addEventListener("click", inserisci2);
        document.getElementById("c2").classList.remove("mazzoG1");
        document.getElementById("c2").classList.add("mazzoG1b");
        }
        break;
     case "Ori":
        if (lista[contG2][0] == contpv2 + 1) {
        document.getElementsByClassName("mc")[1].style.display = 'none';
        document.getElementsByClassName("pv")[1].style.border = "none";
        cartapv2.src = lista[contG2][2];
        cartaG2.src = "";
        contpv2 += 1;
        listaProv.push(contG2);
        aggPunti();
        winSeme();
        cartaG1.addEventListener("click", inserisci2);
        document.getElementById("c2").classList.remove("mazzoG1");
        document.getElementById("c2").classList.add("mazzoG1b");
        }
        break;
     case "Spade":
        if (lista[contG2][0] == contpv3 + 1) {
        document.getElementsByClassName("mc")[2].style.display = 'none';
        document.getElementsByClassName("pv")[2].style.border = "none";
        cartapv3.src = lista[contG2][2];
        cartaG2.src = "";
        contpv3 += 1;
        listaProv.push(contG2);
        aggPunti();
        winSeme();
        cartaG1.addEventListener("click", inserisci2);
        document.getElementById("c2").classList.remove("mazzoG1");
        document.getElementById("c2").classList.add("mazzoG1b");
        }
        break;
     case "Bastoni":
        if (lista[contG2][0] == contpv4 + 1) {
        document.getElementsByClassName("mc")[3].style.display = 'none';
        document.getElementsByClassName("pv")[3].style.border = "none";
        cartapv4.src = lista[contG2][2];
        cartaG2.src = "";
        contpv4 += 1;
        listaProv.push(contG2);
        aggPunti();
        winSeme();
        cartaG1.addEventListener("click", inserisci2);
        document.getElementById("c2").classList.remove("mazzoG1");
        document.getElementById("c2").classList.add("mazzoG1b");
        }
        break;
  }
}

function inserisci2() {
var seme1 = lista[contG1][1];
  switch (seme1) {
     case "Coppe":
        if (lista[contG1][0] == contpv1 + 1) {
        document.getElementsByClassName("mc")[0].style.display = 'none';
        cartapv1.src = lista[contG1][2];
        cartaG1.src = "";
        listaProv.push(contG1);
        contpv1 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
     case "Ori":
        if (lista[contG1][0] == contpv2 + 1) {
        document.getElementsByClassName("mc")[1].style.display = 'none';
        cartapv2.src = lista[contG1][2];
        cartaG1.src = "";
        listaProv.push(contG1);
        contpv2 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
     case "Spade":
        if (lista[contG1][0] == contpv3 + 1) {
        document.getElementsByClassName("mc")[2].style.display = 'none';
        cartapv3.src = lista[contG1][2];
        cartaG1.src = "";
        listaProv.push(contG1);
        contpv3 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
     case "Bastoni":
        if (lista[contG1][0] == contpv4 + 1) {
        document.getElementsByClassName("mc")[3].style.display = 'none';
        cartapv4.src = lista[contG1][2];
        cartaG1.src = "";
        listaProv.push(contG1);
        contpv4 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
  }
}

function inserisci3() {
var seme2 = lista[contG1a][1];
  switch (seme2) {
     case "Coppe":
        if (lista[contG1a][0] == contpv1 + 1) {
        document.getElementsByClassName("mc")[0].style.display = 'none';
        cartapv1.src = lista[contG1a][2];
        cartaG1.src = "";
        listaProv.push(contG1a);
        contpv1 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
     case "Ori":
        if (lista[contG1a][0] == contpv2 + 1) {
        document.getElementsByClassName("mc")[1].style.display = 'none';
        cartapv2.src = lista[contG1a][2];
        cartaG1.src = "";
        listaProv.push(contG1a);
        contpv2 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
     case "Spade":
        if (lista[contG1a][0] == contpv3 + 1) {
        document.getElementsByClassName("mc")[2].style.display = 'none';
        cartapv3.src = lista[contG1a][2];
        cartaG1.src = "";
        listaProv.push(contG1a);
        contpv3 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
     case "Bastoni":
        if (lista[contG1a][0] == contpv4 + 1) {
        document.getElementsByClassName("mc")[3].style.display = 'none';
        cartapv4.src = lista[contG1a][2];
        cartaG1.src = "";
        listaProv.push(contG1a);
        contpv4 += 1;
        aggPunti();
        winSeme();
        contG1a -= 1;
        controllaCarta();
        }
        break;
  }
}

function controllaCarta() {
  switch(contG1a) {
  case contG1a:
    if (contG1a >= 0) {
    var pos = listaProv.indexOf(contG1a);
      if (pos == -1) {
      cartaG1.src = lista[contG1a][2];
      cartaG1.addEventListener("click", inserisci3);
      } else {
      contG1a -= 1;
      controllaCarta();
      }
    } else if (contG1a < 0) {
    cartaG1.src = "";
    }
  break;
  }
}

function aggPunti() {
contPuntiPar += 1;
contPuntiTot += 1;
carteInserite += 1;
aggCk();
document.getElementById("puntPar").innerHTML = "Punti in questa partita: " + contPuntiPar;
document.getElementById("puntTot").innerHTML = "Punti totali: " + contPuntiTot;
}

function aggPuntiBis() {
aggCk();
document.getElementById("svinte").innerHTML = "Pronostici esatti: " + scomVinte;
document.getElementById("puntPar").innerHTML = "Punti in questa partita: " + contPuntiPar;
document.getElementById("puntTot").innerHTML = "Punti totali: " + contPuntiTot;
}

