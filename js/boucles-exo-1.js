//  Exercice 1 : Boucle for

// for (let i = 0; i < 10; i++) {
// 	console.log('Itération numéro:', 5);

// }
// affichie 10 fois le nombre 5

// Défi 2 : La montée de l’escalier

// for ( let i=0; i < 11; i++) {
// 	console.log('Itération numéro:', i);
// }

// afficher les nombres de 0 à 10

//  Défi 3 : L’armée des nombres pairs

// for (let nombre = 1; nombre <= 20; nombre++) {
//   if (nombre % 2 === 0) {
//     console.log("Itération numéro:", nombre);
//   }
// }

// afficher les nombres pairs de 1 à 20

// Défi 4 : Les multiples de 3 en mission
// Affiche les multiples de 3 entre 1 et 30


// for (let i = 1; i <= 30; i++) {
//   console.log("Itération numéro:", i * 3);
// }


//  Défi 5 : L’oracle de la parité
// Objectif : Crée une fonction qui dit "Pair" ou "Impair" quand on lui donne un nombre. 
// Utilise prompt() pour demander un chiffre à l'utilisateur et affiche le résultat dans une alert().

function oracleDeLaParite() {
  let nombre = parseInt(prompt("Entrez un nombre :"));
  if (nombre % 2 === 0) {
    alert("Pair");
  } else {
    alert("Impair");
  }
}

oracleDeLaParite();
