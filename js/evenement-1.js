function actionHello() {
  alert("bravo, tu as cliqué !");
}
// Exo 1

function action() {
  let btn = document.getElementById("btnaction");

  btn.addEventListener("mouseover", function () {
    btn.style.transform = "scale(1.2)";
  });
  btn.addEventListener("mouseout", function () {
    btn.style.transform = "scale(1)";
  });
}
// exo 2
function changeColor() {
  let zone = document.getElementById("paragraphe");

  zone.addEventListener("mouseover", function () {
    zone.style.color = "red";
  });
  zone.addEventListener("mouseout", function () {
    zone.style.color = "black";
  });
}
// exo 3

window.onload = function () {
  changeColor();
  action();
  actionClick();
  AjouterPara();
};

// exo 4 et 5  et de faire un btn click avec le compteur et lexo et que le compteur s'arrete a  3
let count = 0;

function actionClick() {
  if (count < 3) {
    count++;
    document.getElementById("compteur").textContent = count;
  } else {
    // alert("T'as déjà cliqué 3 fois, calme-toi 😅");
    disabled = true;
  }
}

// exo 6


const btnadd = document.getElementById('Addpara');

btnadd.addEventListener("click", function() {
  let text = document.createElement("p");
  text.textContent = "Il était une fois";

const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";

  btnSupprimer.addEventListener("click", function () {
  container.remove();
  });
  let container = document.createElement("div");
  container.appendChild(text);


  const idDiv = document.getElementById('bloc');
  container.appendChild(btnSupprimer);
  idDiv.appendChild(container);


});
// Alors pour resumer appendChild met l'element un dans le suivant 