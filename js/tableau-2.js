let ingredient = prompt("Quel ingrédient voulez-vous ajouter ?");
function ajouterIngredient(ingredient) {
  let grimoire = [
    "bave de crapeaux",
    "plume de phénix",
    "racine de mandragore",
  ];
  const content = document.getElementById("liste");
  // Fonction pour ajouter un ingrédient au grimoire
  // et afficher le contenu du grimoire
  if (ingredient === null || ingredient.trim() === "") {
    alert("Merci d'entrer un ingrédient valide.");
    return;
  } else if (grimoire.includes(ingredient)) {
    alert("Cet ingrédient est déjà dans le grimoire.");
    return;
  } else {
    grimoire.push(ingredient);
    alert(grimoire.join(","));
    content.innerHTML += "<li>" + grimoire + "</li>";
  }

  analyserPotion();
}

function analyserPotion() {
  let nb = grimoire.length;

  let totalLettres = grimoire.reduce(function (acc, item) {
    return acc + item.length;
  }, 0);

  alert(
    "Analyse :\n" +
      "Nombre d’ingrédients : " +
      nb +
      "\n" +
      "Total de charactere utilisées : " +
      totalLettres
  );
}
// ajouterIngredient(ingredient);
