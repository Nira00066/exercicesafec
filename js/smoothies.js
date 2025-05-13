// Liste fixe de fruits
const fruits = [
  "fraise",
  "banane",
  "kiwi magique",
  "pomme",
  "ananas",
  "framboise",
  "mangue",
];

let compteur = 0; // Compteur initialisé à zéro
let indexDepart = 0; // Point de départ dans le tableau

// Fonction de préparation
function preparerSmoothie() {
  // Ton code ici

  // Prendre 3 fruits à partir de l’index
  let smoothie = fruits.slice(indexDepart, indexDepart + 3);
  indexDepart += 3;

  // Reboucle si on dépasse le tableau
  if (indexDepart >= fruits.length) {
    indexDepart = 0;
  }

  // Réinitialiser le fond
  resultat.style.backgroundColor = "white";

  // Afficher chaque fruit dans un <p>
  for (let i = 0; i < smoothie.length; i++) {
    let text = document.createElement("p");
    text.textContent = smoothie[i];
    resultat.appendChild(text);
  }

  // Si le kiwi magique est là → fond vert
  if (smoothie.includes("kiwi magique")) {
    resultat.style.backgroundColor = "lightgreen";
  }
  const compteurDisplay = document.getElementById("compteur");

  // Incrémenter et afficher le compteur
  compteur++;
  compteurDisplay.textContent = "Smoothies préparés : " + compteur;
}

// Fonction de reset
function boireSmoothie() {
  // Ton code ici

  resultat.innerHTML = ""; // On vide les résultats
  resultat.style.backgroundColor = "white"; // On remet la couleur

  const compteurDisplay = document.getElementById("compteur");
  compteur = 0;
  compteurDisplay.textContent = "Smoothies préparés : " + compteur;
}
// On dois remettre les recuperation dans la function meme si on l'utiliser dans une autre function.