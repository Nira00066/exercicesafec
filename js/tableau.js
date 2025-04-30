// Defis 1

let animaux = ["chat", "chien", "souris", "lapin", "poisson rouge"];
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];
console.log(couleurs[2]);

animaux[0] = "hamster";
console.log(animaux);

// 2

animaux.unshift("perroquet");
console.log(animaux);

animaux.shift();
console.log(animaux);

// animaux.includes('chat');
console.log(animaux.includes("chat"));
console.log(animaux.join(" "));

// 3

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nombres.length);

// 4
let valeurDouble = [1, 2, 2, 3, 4, 4, 5];

let valeurDoubleSansDoublon = valeurDouble.filter(
  (valeurDouble, index, self) => index === self.indexOf(valeurDouble)
);
console.log(valeurDoubleSansDoublon);

// 5

function displayArray() {
  let pannier = ["Pomme", "Banane", "Abricot", "Cerise"];

  console.log(pannier.join(" "));
}
// displayArray();

// 6

// Consigne : Crée une fonction appelée displayArray2 qui prend un tableau en paramètre et retourne une phrase contenant tous les éléments séparés par des virgules, sauf le dernier, qui doit être précédé de “et”.

function displayArray2() {
  let pannier = ["Pomme", "Banane", "Abricot", "Cerise"];
  console.log(pannier.slice(0, -1) + " et " + pannier[pannier.length - 1]);
}
// displayArray2();

// 7

function displayArray3() {
  let Valid = confirm("Voulez-vous voir le tableau ?");
  let pannier = ["Pomme", "Banane", "Abricot", "Cerise"];

  if (Valid === true) {
    console.log(pannier.slice(0, -1) + " et " + pannier[pannier.length - 1]);
    alert(pannier.slice(0, -1) + " et " + pannier[pannier.length - 1]);
  } else {
    console.log(pannier.join(" "));
    alert(pannier.join(" "));
  }
}

// displayArray3();

// 8

// Transformer la chaîne en un tableau de mots.
// Trier les mots par ordre alphabétique, sans tenir compte des majuscules/minuscules.
// Si le paramètre desc vaut true, trier les mots en ordre décroissant.
// Rejoindre les mots dans une nouvelle chaîne de caractères, séparés par des espaces.
// Retourner cette chaîne triée.

function sortWordsInString() {
  let valid = confirm("Voulez-vous trier les mots par ordre alphabétique ?");
  let phrase = "Voici une phrase avec des mots mélangés";
  let tableauMots = phrase.match(/\w+/g);
  let phraseTriee = tableauMots.join(" ");

  if (valid === true) {
    tableauMots.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log(phraseTriee);
    alert(phraseTriee);
  } else {
    alert(phrase);
  }
}
// sortWordsInString();

// 9


// Crée une expression JavaScript qui fait les étapes suivantes :

let tableauNombres = [1, 2, 3, 4, 5, 6];

let tableauNombresMultiplies = tableauNombres.filter(function (nombre) {
  return nombre % 2 === 0;
})
.map(function (nombre) {
  return nombre * 2;
});

// console.log(tableauNombresMultiplies);

// 10

function roundDownArray (){
    let tableauNombres = [3.7, 8.4, 2.1, 5.9];
    let tableauNombresArrondis = tableauNombres.map(function (nombre) {
        return Math.floor(nombre);
    });
    console.log(tableauNombresArrondis);
}

// est ce que je dois faire que si c'est 0.5 on arrondi vers l'uniter superieur ou pas ?

 

// roundDownArray();

// 11

function sumOfArray (){
    let tableauNombres = [3.7, 8.4, 2.1, 5.9];
    let tableauNombresArrondis = tableauNombres.map(function (nombre) {
        return Math.floor(nombre);
    });
    console.log(tableauNombresArrondis);

    let somme = tableauNombresArrondis.reduce(function (accumulateur, valeurCourante) {
        return accumulateur + valeurCourante;
    }, 0);
    console.log(somme);

}
// sumOfArray();

// 12

function averageOfArray  (){
    let tableauNombres = [3.7, 8.4, 2.1, 5.9];
    
    let tableauNombresArrondis = tableauNombres.map(function (nombre) {
        return Math.floor(nombre);
    });
    console.log(tableauNombresArrondis);

    let somme = tableauNombresArrondis.reduce(function (accumulateur, valeurCourante) {
        return accumulateur + valeurCourante;
    }, 0);
    console.log(somme);


    let moyenne = somme / tableauNombresArrondis.length;
    console.log(moyenne);
}
// averageOfArray();
