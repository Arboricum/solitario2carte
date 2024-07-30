/*Punti totali: contPuntiTot + contPuntiPar;

ogni volta che +1*/

function aggCk() {
setCookie("puntiPartT", contPuntiTot,365);
}

function aggScom() {
setCookie("vittorieS", scomVinte,365);
}

function aggCkIni() {
var dd = getCookie("puntiPartT"); 
  if (dd != "") {
  contPuntiTot = Number(dd);
  } else {
  contPuntiTot = 0;
  }
var ee = getCookie("vittorieG"); 
  if (ee != "") {
  contaVittorie = Number(ee);
  } else {
  contaVittorie = 0;
  }
var ff = getCookie("giocate"); 
  if (ff != "") {
  contGiocate = Number(ff);
  } else {
  contGiocate = 0;
  }
var gg = getCookie("vittorieS"); 
  if (gg != "") {
  scomVinte = Number(gg);
  } else {
  scomVinte = 0;
  }
}



/*var contPuntiPar = 0;
var contPuntiTot = 0;

1 carta = 1 punto
fine seme = 5 punti
tutti i semi = altri 20 punti
scommessa azzeccata = 10 punti
tutte le scommesse = altri 40 punti*/

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
  var solit = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(solit) == 0) {
      return c.substring(solit.length, c.length);
    }
  }
  return "";
}