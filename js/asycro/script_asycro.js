// setTimeout(function () {
//   alert("3 secondes se sont écoulees !");
// }, 3000);

function defis2() {
  console.log("Début du script");

  setTimeout(function () {
    console.log("Message 1");
  }, 1000);

  // Les messages sont dans la function et le temps en dehors
  setTimeout(function () {
    console.log("Message 2");
  }, 3000);
}
function defis3() {
  let text = document.createElement("p");
  text.innerHTML = "Chargement en cours!";

  // Les messages sont dans la function et le temps en dehors
  setTimeout(function () {
    text.innerHTML = "Contenu Changé";
  }, 3000);

  document.body.appendChild(text); // ou dans un élément spécifique genre une div
  // Ne pas oublie cette merde en haut !
}
function defis4() {
  let compteur = 0;
  let intervalID = null;

  let text = document.createElement("p");
  text.textContent = compteur;

  let startBtn = document.createElement("button");
  startBtn.textContent = " start";
  let stopBtn = document.createElement("button");
  stopBtn.textContent = "stop";

  startBtn.addEventListener("click", function () {
    if (intervalID != null) return;
    intervalID = setInterval(function () {
      compteur++;
      text.textContent = compteur;
    }, 1000);
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = null; // pour pouvoir relancer plus tard
  });

  // Les messages sont dans la function et le temps en dehors

  document.body.appendChild(text);
  document.body.appendChild(startBtn);
  document.body.appendChild(stopBtn); // ou dans un élément spécifique genre une div
  // Ne pas oublie cette merde en haut !
}
// Crée un timer avec stop

function timer() {
  let compteur = 0;
  let intervalID = null;

  function getTexte(secondes) {
    return secondes === 1 ? "1 seconde" : secondes + " secondes";
  }

  let text = document.createElement("p");
  text.className ='Listbtn';
  text.textContent = getTexte(compteur);

  let startBtn = document.createElement("button");
  startBtn.textContent = " start";
  startBtn.className = "btn btn-success";

  let stopBtn = document.createElement("button");
  stopBtn.textContent = "stop";
  stopBtn.className = "btn btn-danger ";

  let reinstallBtn = document.createElement("button");
  reinstallBtn.textContent = "Réinitialiser";
  reinstallBtn.className = "btn btn-warning";

  //  Reinitialiser btn

  reinstallBtn.addEventListener("click", function () {
    clearInterval(intervalID);
    text.textContent = getTexte(compteur);
    intervalID = null;
    compteur = 0;
  });

  // start btn

  startBtn.addEventListener("click", function () {
    if (intervalID != null) return;

    intervalID = setInterval(function () {
      compteur++;
      text.textContent = getTexte(compteur);
    }, 1000);
  });

  // Stop btn

  stopBtn.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = null; // pour pouvoir relancer plus tard
  });

  // Les messages sont dans la function et le temps en dehors

  document.body.appendChild(text);
  document.body.appendChild(startBtn);
  document.body.appendChild(reinstallBtn);
  document.body.appendChild(stopBtn); // ou dans un élément spécifique genre une div
  // Ne pas oublie cette merde en haut !
}
