
let win = 0;
let lose = 0;
let ctour = 0;
function choixutilisateur(choix) {
  var lien = "";
  var choixutili = "";
  var choixbot = "";

  const resultat = document.getElementById('resultat');
  const scj = document.getElementById('scorej');
  const scb = document.getElementById('scoreb');
  const sct = document.getElementById('tour')

  ctour++;
  if (ctour == 3) {
    if (win > lose) {
     personnegagnant = document.getElementById('placementwin').innerText = 'Joueur'
    }
    else if (lose > win) {
      personnegagnant = document.getElementById('placementwin').innerText = 'Robot'
    }
    else {
      personnegagnant = document.getElementById('placementwin').innerText = 'égalité'
    }
  }
  sct.innerHTML = ctour;

  if (choix == "pierre") {
    lien = "https://img.icons8.com/small/32/000000/rock.png";
    choixutili = "pierre";
  }
  else if (choix == "papier") {
    lien = "https://img.icons8.com/small/32/000000/paper.png";
    choixutili = "papier";

  }
  else {
    lien = "https://img.icons8.com/small/32/000000/barber-scissors.png";
    choixutili = "ciseaux";

  }
  var choixpierrevar = document.getElementById("choixutilisateur").setAttribute("src", lien);
  getRandom();
  console.log(choixutili + choixbot);
  if (choixutili === "pierre" && choixbot === "papier" || choixutili === "papier" && choixbot === "ciseaux" || choixutili === "ciseaux" && choixbot === "pierre") {

    resultat.innerHTML = "Perdu";
    lose++;
    scb.innerHTML = lose;

  }
  else if (choixutili === "papier" && choixbot === "pierre" || choixutili === "ciseaux" && choixbot === "papier" || choixutili === "pierre" && choixbot === "ciseaux") {

    resultat.innerHTML = "Gagné";
    win++;
    scj.innerHTML = win;
    personnegagnant.innerHTML = document.write('le joueur');
  }
  else if (choixutili === choixbot) {
    resultat.innerHTML = "égalité";
  }
  choixutili = "";
  choixbot = "";

  function getRandom() {
    var nombreale = Math.floor(Math.random(0) * 3);

    var lien = "";

    if (nombreale == 0) {
      lien = "https://img.icons8.com/small/32/000000/rock.png";
      choixbot = "pierre";

    }
    else if (nombreale == 1) {
      lien = "https://img.icons8.com/small/32/000000/paper.png";
      choixbot = "papier";

    }
    else {
      choixbot = "ciseaux";
      lien = "https://img.icons8.com/small/32/000000/barber-scissors.png";
    }
    var choixpierrevar = document.getElementById("choixrobot").setAttribute("src", lien);

  }
}
function calcScore(form) {
  document.getElementById("score").innerHTML = "Gagné: " + won + " fois. Perdu: " + lost + " fois."
}
function raz(form) {
  form.texte.value = "";
  choixutili = "";
  choixbot = "";
}

