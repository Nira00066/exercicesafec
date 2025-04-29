// let i =0;
// while ( i <= 20) {
//       if (i % 2 === 0) {
//         console.log("Itération numéro:", i);
//     }
//     i++;
//     }

// Défi 6 : La table de multiplication
// function multiplierParTrois(){
//     for (let i = 1; i <= 10; i++) {
//           console.log("table de 3:", i * 3);
//         }

//     }
// multiplierParTrois();

// defi 3 : FizzBuzz

// crée une fonction qui affiche jusqu'a 20 et que si c'est multiple de 3 affiche "Fizz" et si c'est multiple de 5 affiche "Buzz" et si c'est multiple de 3 et 5 affiche "FizzBuzz"
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz();

// defi 4 compter les voyelles
// Crée une fonction qui compte le nombre de voyelles dans une phrase donnée par l'utilisateur.
//Astuce : transforme la phrase en minuscules et utilise .includes() pour vérifier chaque lettre.

function compterVoyelles() {
  let phrase = prompt("Entrez une phrase :").toLowerCase();
  let voyelles = "aeiouy";
  let compteur = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
      compteur++;
    }
  }

  console.log("Nombre de voyelles :", compteur);
  alert("Nombre de voyelles :" + compteur);
}
// compterVoyelles();

// Defi 5 : Pyramide d'étoiles

//Objectif : Crée une fonction pyramid(size) qui affiche une pyramide de taille donnée avec des étoiles.

// Résultat attendu : Une pyramide centrée en console avec des étoiles *.

// Astuce : Utilise deux boucles imbriquées pour gérer les espaces puis les étoiles.

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);

    let str2 = "*".repeat(i * 2 - 1);

    console.log(str + str2 + str);
  }
}

//   pyramid(20
//   );

//   defis 6 devinettes

function devinette() {
  let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
  let essai = 0;
  let trouve = false;

  while (!trouve) {
    essai = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

    if (essai < nombreAleatoire) {
      alert("Trop bas ! Essayez encore.");
    } else if (essai > nombreAleatoire) {
      alert("Trop haut ! Essayez encore.");
    } else {
      alert("Bravo ! Vous avez trouvé le nombre " + nombreAleatoire + " !");
      trouve = true;
    }
  }
}
// devinette();

// machine a bonbon
//  tant que tu as de l'argent alors tu peux acheter un bonbon
//  si tu n'as plus d'argent alors tu ne peux plus acheter de bonbon
//  afficher le nombre de bonbon que tu as acheté et combien il te reste d'argent
//  afficher le prix du bonbon
//  afficher le nombre de bonbon que tu as acheté et combien il te reste d'argent

function machineABonbon() {
  let bonbon = 0;
  let messageBonbon = Number(
    prompt("Combien d'argent avez-vous mis dans la machine?")
  );

  let prixBonbon = 2;
  while (messageBonbon >= prixBonbon) {
    messageBonbon -= prixBonbon;
    bonbon++;
    console.log("Bonbon distribué!");
    console.log("Il vous reste " + messageBonbon + " euros.");
  }
  if (messageBonbon < prixBonbon) {
    console.log("Crédits insuffisants. Opération terminée. ");
  }
}

machineABonbon();
