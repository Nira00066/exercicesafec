// // creation de fonction

// // tu choisi un nombre de  1/5
// // selon ton chois tu tombe sur ton animal

// let magie = Number(prompt("Choisissez un numbre entre 1 et 5 ?"));

// function revelerAnimal(magie) {
// //  "Si magie vaut 1, alors afficher "Tu es une Licorne" avec alert()" ?  ,
// //  attention a moi dans les parametre on demander que le parametre dois ! etre 1 donc ===

// if (magie === 1) {
//     alert("Tu es une Licorne !");
// }
//  else if (magie === 2) {
//     alert("Tu es une Grenouille !");
// }
// else if (magie === 3) {
//     alert("Tu es un dragon !");
// }
// else if (magie === 4) {
//     alert("Tu es un Hibou !");
// }
// else if (magie === 5) {
//     alert("Tu es un Escargot !");
// }

// // Pour tu n'as pas besion de mettre un param car c'est les autre nombre
// else  {
//     alert("Chiffre inconnu est trop magique pour être interprété");
// }

// }

// revelerAnimal(magie);

// Defis 1

function saluerUtilisateur(prenom) {
  console.log("bonjour " + prenom + " !");
}

// note pour moi même lit + 2 fois ton enoncer

saluerUtilisateur("Nina");

// Defi 2

function addition(a, b) {
  return a + b;
}
// Ne pas oublier de mettre le consol.log sinon pas visible
console.log(addition(4, 5));

// Defis 3
function estPair(nombre) {
  if (nombre % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(estPair(4));
console.log(estPair(7));

// defis 4 


function calculerMoyenne(note1 ,note2, note3){
 
  return  (note1+note2+note3) /3;

}

console.log(calculerMoyenne(7,15,20));

function plusGrand (a,b) {
    if (a>b){
        return a ;
    } else {
        return b ;
    }
}
console.log(plusGrand(10, 5));   // devrait afficher 10
console.log(plusGrand(3, 8));    // devrait afficher 8
console.log(plusGrand(7, 7));    // devrait afficher 7
