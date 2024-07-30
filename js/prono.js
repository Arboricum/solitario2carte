

var pronostico0 = 1;
var pronostico1 = '';
var pronostico2 = '';
var pronostico3 = '';
var pronostico4 = '';

function preGioco() {
document.getElementById("start").removeEventListener("click", preGioco);
document.getElementById("start").style.display = "none";
document.getElementsByClassName('scommetti')[0].style.display = 'block';
}

function scommessa1() {
  switch(pronostico0) {
  case 1:
  pronostico1 = "Coppe";
  document.getElementById('prono1').removeEventListener('click', scommessa1);
  document.getElementById('prono1').classList.remove('scom');
  document.getElementById('prono1').classList.add('scom1');
  document.getElementsByClassName('Coppe')[0].innerHTML = 'Pronostico: primo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per secondo?';
  pronostico0 += 1;
  break;
  case 2:
  pronostico2 = "Coppe";
  document.getElementById('prono1').removeEventListener('click', scommessa1);
  document.getElementById('prono1').classList.remove('scom');
  document.getElementById('prono1').classList.add('scom1');
  document.getElementsByClassName('Coppe')[0].innerHTML = 'Pronostico: secondo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per terzo?';
  pronostico0 += 1;
  break;
  case 3:
  pronostico3 = "Coppe";
  document.getElementById('pronoTitle').innerHTML = 'Iniziamo';
  document.getElementById('prono1').removeEventListener('click', scommessa1);
  document.getElementById('prono1').classList.remove('scom');
  document.getElementById('prono1').classList.add('scom1');
  document.getElementsByClassName('Coppe')[0].innerHTML = 'Pronostico: terzo';
  pronostico4 = document.getElementsByClassName('scom')[0].value;
  var a = document.getElementsByClassName('scom')[0].getAttribute('id');
  document.getElementById(a).classList.remove('scom');
  document.getElementById(a).classList.add('scom1');
  document.getElementsByClassName(pronostico4)[0].innerHTML = 'Pronostico: quarto';
  allRem();
  setTimeout(inizia, 1200);
  break;
  }
}
function scommessa2() {
  switch(pronostico0) {
  case 1:
  pronostico1 = "Ori";
  document.getElementById('prono2').removeEventListener('click', scommessa2);
  document.getElementById('prono2').classList.remove('scom');
  document.getElementById('prono2').classList.add('scom1');
  document.getElementsByClassName('Ori')[0].innerHTML = 'Pronostico: primo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per secondo?';
  pronostico0 += 1;
  break;
  case 2:
  pronostico2 = "Ori";
  document.getElementById('prono2').removeEventListener('click', scommessa2);
  document.getElementById('prono2').classList.remove('scom');
  document.getElementById('prono2').classList.add('scom1');
  document.getElementsByClassName('Ori')[0].innerHTML = 'Pronostico: secondo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per terzo?';
  pronostico0 += 1;
  break;
  case 3:
  pronostico3 = "Ori";
  document.getElementById('pronoTitle').innerHTML = 'Iniziamo';
  document.getElementById('prono2').removeEventListener('click', scommessa2);
  document.getElementById('prono2').classList.remove('scom');
  document.getElementById('prono2').classList.add('scom1');
  document.getElementsByClassName('Ori')[0].innerHTML = 'Pronostico: terzo';
  pronostico4 = document.getElementsByClassName('scom')[0].value;
  var a = document.getElementsByClassName('scom')[0].getAttribute('id');
  document.getElementById(a).classList.remove('scom');
  document.getElementById(a).classList.add('scom1');
  document.getElementsByClassName(pronostico4)[0].innerHTML = 'Pronostico: quarto';
  allRem();
  setTimeout(inizia, 1200);
  break;
  }
}
function scommessa3() {
  switch(pronostico0) {
  case 1:
  pronostico1 = "Spade";
  document.getElementById('prono3').removeEventListener('click', scommessa3);
  document.getElementById('prono3').classList.remove('scom');
  document.getElementById('prono3').classList.add('scom1');
  document.getElementsByClassName('Spade')[0].innerHTML = 'Pronostico: primo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per secondo?';
  pronostico0 += 1;
  break;
  case 2:
  pronostico2 = "Spade";
  document.getElementById('prono3').removeEventListener('click', scommessa3);
  document.getElementById('prono3').classList.remove('scom');
  document.getElementById('prono3').classList.add('scom1');
  document.getElementsByClassName('Spade')[0].innerHTML = 'Pronostico: secondo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per terzo?';
  pronostico0 += 1;
  break;
  case 3:
  pronostico3 = "Spade";
  document.getElementById('pronoTitle').innerHTML = 'Iniziamo';
  document.getElementById('prono3').removeEventListener('click', scommessa3);
  document.getElementById('prono3').classList.remove('scom');
  document.getElementById('prono3').classList.add('scom1');
  document.getElementsByClassName('Spade')[0].innerHTML = 'Pronostico: terzo';
  pronostico4 = document.getElementsByClassName('scom')[0].value;
  var a = document.getElementsByClassName('scom')[0].getAttribute('id');
  document.getElementById(a).classList.remove('scom');
  document.getElementById(a).classList.add('scom1');
  document.getElementsByClassName(pronostico4)[0].innerHTML = 'Pronostico: quarto';
  allRem();
  setTimeout(inizia, 1200);
  break;
  }
}
function scommessa4() {
  switch(pronostico0) {
  case 1:
  pronostico1 = "Bastoni";
  document.getElementById('prono4').removeEventListener('click', scommessa4);
  document.getElementById('prono4').classList.remove('scom');
  document.getElementById('prono4').classList.add('scom1');
  document.getElementsByClassName('Bastoni')[0].innerHTML = 'Pronostico: primo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per secondo?';
  pronostico0 += 1;
  break;
  case 2:
  pronostico2 = "Bastoni";
  document.getElementById('prono4').removeEventListener('click', scommessa4);
  document.getElementById('prono4').classList.remove('scom');
  document.getElementById('prono4').classList.add('scom1');
  document.getElementsByClassName('Bastoni')[0].innerHTML = 'Pronostico: secondo';
  document.getElementById('pronoTitle').innerHTML = 'Quale seme finirà per terzo?';
  pronostico0 += 1;
  break;
  case 3:
  pronostico3 = "Bastoni";
  document.getElementById('pronoTitle').innerHTML = 'Iniziamo';
  document.getElementById('prono4').removeEventListener('click', scommessa4);
  document.getElementById('prono4').classList.remove('scom');
  document.getElementById('prono4').classList.add('scom1');
  document.getElementsByClassName('Bastoni')[0].innerHTML = 'Pronostico: terzo';
  pronostico4 = document.getElementsByClassName('scom')[0].value;
  var a = document.getElementsByClassName('scom')[0].getAttribute('id');
  document.getElementById(a).classList.remove('scom');
  document.getElementById(a).classList.add('scom1');
  document.getElementsByClassName(pronostico4)[0].innerHTML = 'Pronostico: quarto';
  allRem();
  setTimeout(inizia, 1200);
  break;
  }
}

function preGioco1() {
switch(pronostico1) {
  case 'Coppe':
  document.getElementsByClassName('pv1 pr')[0].innerHTML = '<i>Pronostico: primo</i>';
  break;
  case 'Ori':
  document.getElementsByClassName('pv2 pr')[0].innerHTML = '<i>Pronostico: primo</i>';
  break;
  case 'Spade':
  document.getElementsByClassName('pv3 pr')[0].innerHTML = '<i>Pronostico: primo</i>';
  break;
  case 'Bastoni':
  document.getElementsByClassName('pv4 pr')[0].innerHTML = '<i>Pronostico: primo</i>';
  break;
}
switch(pronostico2) {
  case 'Coppe':
  document.getElementsByClassName('pv1 pr')[0].innerHTML = '<i>Pronostico: secondo</i>';
  break;
  case 'Ori':
  document.getElementsByClassName('pv2 pr')[0].innerHTML = '<i>Pronostico: secondo</i>';
  break;
  case 'Spade':
  document.getElementsByClassName('pv3 pr')[0].innerHTML = '<i>Pronostico: secondo</i>';
  break;
  case 'Bastoni':
  document.getElementsByClassName('pv4 pr')[0].innerHTML = '<i>Pronostico: secondo</i>';
  break;
}
switch(pronostico3) {
  case 'Coppe':
  document.getElementsByClassName('pv1 pr')[0].innerHTML = '<i>Pronostico: terzo</i>';
  break;
  case 'Ori':
  document.getElementsByClassName('pv2 pr')[0].innerHTML = '<i>Pronostico: terzo</i>';
  break;
  case 'Spade':
  document.getElementsByClassName('pv3 pr')[0].innerHTML = '<i>Pronostico: terzo</i>';
  break;
  case 'Bastoni':
  document.getElementsByClassName('pv4 pr')[0].innerHTML = '<i>Pronostico: terzo</i>';
  break;
}
switch(pronostico4) {
  case 'Coppe':
  document.getElementsByClassName('pv1 pr')[0].innerHTML = '<i>Pronostico: quarto</i>';
  break;
  case 'Ori':
  document.getElementsByClassName('pv2 pr')[0].innerHTML = '<i>Pronostico: quarto</i>';
  break;
  case 'Spade':
  document.getElementsByClassName('pv3 pr')[0].innerHTML = '<i>Pronostico: quarto</i>';
  break;
  case 'Bastoni':
  document.getElementsByClassName('pv4 pr')[0].innerHTML = '<i>Pronostico: quarto</i>';
  break;
}
}


function aggPronoG1() {
  switch(contPos) {
    case 1:
    if (pronostico1 == "Coppe") {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 2:
    if (pronostico2 == "Coppe") {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 3:
    if (pronostico3 == "Coppe") {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 4:
    if (pronostico4 == "Coppe") {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv1 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
  }
}
function aggPronoG2() {
  switch(contPos) {
    case 1:
    if (pronostico1 == "Ori") {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 2:
    if (pronostico2 == "Ori") {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 3:
    if (pronostico3 == "Ori") {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 4:
    if (pronostico4 == "Ori") {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv2 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
  }
}
function aggPronoG3() {
  switch(contPos) {
    case 1:
    if (pronostico1 == "Spade") {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 2:
    if (pronostico2 == "Spade") {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 3:
    if (pronostico3 == "Spade") {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 4:
    if (pronostico4 == "Spade") {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv3 pr')[0].innerHTML = "Pronostico errato!" 
    }
    break;
  }
}
function aggPronoG4() {
  switch(contPos) {
    case 1:
    if (pronostico1 == "Bastoni") {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 2:
    if (pronostico2 == "Bastoni") {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico errato!"; 
    }
    break;
    case 3:
    if (pronostico3 == "Bastoni") {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico errato!";
    }
    break;
    case 4:
    if (pronostico4 == "Bastoni") {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico esatto!";
    contPuntiPar += 10;
    contPuntiTot += 10;
    scomVinte += 1;
    scomVinteP += 1;
    aggScom();
    aggPuntiBis();
    } else {
    document.getElementsByClassName('pv4 pr')[0].innerHTML = "Pronostico errato!";
    }
    break;
  }
}

function allRem() {
document.getElementById('prono1').removeEventListener('click', scommessa1);
document.getElementById('prono2').removeEventListener('click', scommessa2);
document.getElementById('prono3').removeEventListener('click', scommessa3);
document.getElementById('prono4').removeEventListener('click', scommessa4);
}