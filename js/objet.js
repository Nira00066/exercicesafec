let animal = {
  escape: "chat",
  age: 3,
  color: "gris",
};

// console.log(animal.escape);
// console.log(animal.age);

animal.age = 4;
animal.nom = "minou";
// console.log(animal);

function decrireAnimal(animal) {
  console.log(
    "C'est un " +
      animal.espece +
      " de couleur " +
      animal.couleur +
      ", âgé de " +
      animal.age +
      " ans."
  );
}
// decrireAnimal(animal);

// Exo defis express

let user = {
  prenom: "Nina",
  age: 25,
  ville: "bayonne",
};
console.log(user.ville);
user.ville = "Dax";
console.log(user.ville);

// console.log(user.age);
user.age += 1;
// console.log(user.age);

// user.estEtudiant =
//   confirm("Es-tu étudiant ? (OK pour oui, Annuler pour non)") === true;
// console.log(user);

function afficherInfo(user) {
  alert(
    "je m'appelle " +
      user.prenom +
      ", j'ai" +
      user.age +
      " ans et j'habit à " +
      user.ville
  );
}
// afficherInfo(user);

let listeUsers = [
  user,
  {
    prenom: "Nina",
    age: 25,
    ville: "bayonne",
  },
  user,
  {
    prenom: "Paul",
    age: 30,
    ville: "Paris",
  },
  user,
  {
    prenom: "Marie",
    age: 28,
    ville: "Lyon",
  },
];

// console.log(listeUsers);

function afficherInfos(listeUsers) {
  for (let i = 0; i < listeUsers.length; i++) {
    let user = listeUsers[i];
    alert(
      "je m'appelle " +
        user.prenom +
        ", j'ai" +
        user.age +
        " ans et j'habit à " +
        user.ville
    );
  }
}
// afficherInfos(listeUsers);
let livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee: 1943,
  estDisponible: true,
};

let bibliotheque = [
  livre,
  {
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    estDisponible: false,
  },
  livre,
  {
    titre: "Le Meilleur des mondes",
    auteur: "Aldous Huxley",
    annee: 1932,
    estDisponible: true,
  },
];

// console.log(livre);

// console.log(bibliotheque);

// function afficherInfosBibliotheque(livre) {
//   for (let i = 0; i < bibliotheque.length; i++) {
//     if (bibliotheque[i].estDisponible === true) {
//       alert(
//         "Titre : " +
//           livre[i].titre +
//           ", Auteur : " +
//           livre[i].auteur +
//           ", Année : " +
//           livre[i].annee +
//           ", Disponible : " +
//           livre[i].estDisponible
//       );
//       return;
//     } else {
//       console.log(livre[i] + "non disponible");
//     }
//   }
// }

// afficherInfosBibliotheque(livre);

function afficherTitresDisponibles(bibliotheque) {
    console.log("Livres disponibles :");
    for (let i = 0; i < bibliotheque.length; i++) {
      if (bibliotheque[i].estDisponible) {
        console.log("- " + bibliotheque[i].titre);
      }
    }
  }

afficherTitresDisponibles(bibliotheque);

function emprunterLivre(titre) {
  for (let i = 0; i < bibliotheque.length; i++) {
    if (bibliotheque[i].titre === titre) {
      if (bibliotheque[i].estDisponible) {
        bibliotheque[i].estDisponible = false;
        console.log("Vous avez emprunté " + titre);
      } else {
        console.log(titre + " n'est pas disponible.");
      }
      return;
    }
  }
  console.log(titre + " n'existe pas dans la bibliothèque.");
}
// Emprunter un livre
emprunterLivre(prompt("Quel livre voulez-vous emprunter ?"));

function rendreLivre(titre) {
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].titre === titre) {
        bibliotheque[i].estDisponible = true;
        console.log("Vous avez rendu " + titre);
        return;
        }
    }
    console.log(titre + " n'existe pas dans la bibliothèque.");
    }
// Rendre un livre
rendreLivre(prompt("Quel livre voulez-vous rendre ?"));