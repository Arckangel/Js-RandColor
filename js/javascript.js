document.onkeypress = function(entrer) {
  if (entrer.keyCode == "13") {
    motTab();
  }
}

function symboleAleatoire() {
  var liste = "0123456789ABCDEF";
  var rand = liste[Math.floor(Math.random()*liste.length)];
  return rand;
}

couleurAleatoire();

function couleurAleatoire() {
  var randomcolor = "#";
  for (var i = 0; i < 6; i++) {
    randomcolor += symboleAleatoire();
  }
  return randomcolor;
}

console.log(couleurAleatoire());

var tab = document.getElementById("tableau");

tableau();

function tableau() {
  var i = 0;
  while (i<20) {
    var j = 0;
    tab.insertRow(); // insérer ligne
    var row = document.getElementsByTagName("tr")[i];
    while(j<30) {
      row.insertCell(); // insérer colonne
      var cell = row.getElementsByTagName("td")[j];
      cell.style.backgroundColor = couleurAleatoire();
      j++;
    }
    i++;
  }
}

function boutonCouleur() {
  var i = 0;
  while (i<20) {
    var j = 0;
    var row = document.getElementsByTagName("tr")[i];
    while(j<30) {
      var cell = row.getElementsByTagName("td")[j];
      cell.style.backgroundColor = couleurAleatoire();
      j++;
    }
    i++;
  }
}

var mot = "";
function motTab() {
  var k = 0;
  mot += document.getElementById("texte").value;
  while (k < mot.length) {
    tab.getElementsByTagName("td")[k].innerHTML=mot[k];
    k++;
  }
}
