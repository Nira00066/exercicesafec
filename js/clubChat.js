let nom = prompt("  quels est ton nom");

// function infoName(nom) {
//   if (!nom || nom.trim() == "") {
//       alert("Merci d’entrer un nom valide.");

//   } else {

//   }

// }

// infoName(nom);


if (!nom || nom.trim() == "") {
    alert('nom invalide');
} else {
    if (age) {

    }
}

let age = Number;




// let age = prompt('Quel est ton age?'); 
// if (Number(age)) {

// }



    
let poids = '15kg';


// if (age > 15 || poids > "10kg") {
//     alert("Membre légendaire");
// }  else if ( 10 <= age <= 15 && "6" < poids =< "10 kg"  ){
//     alert("Membre d’Honneur");
// }else (){

// }





function verifierAdhesion(nom, age, poids) {
	if (age > 15 || poids > 10) {
		alert(nom + " est un Membre Légendaire du club.");
	} else if (age >= 10 && age <= 15 && poids > 6 && poids <= 10) {
		alert(nom + " est un Membre d'Honneur du club.");
	} else if (age >= 3 && age < 10 && poids >= 3 && poids <= 6) {
		alert(nom + " est un Membre Approuvé du club.");
	} else {
		alert("Désolé " + nom + ", tu ne peux pas entrer dans le club.");
	}
}

// Collecte des données utilisateur
let nomChat = prompt("Quel est le nom du chat ?");
if (!nomChat || nomChat.trim() === "") {
	alert("Merci d’entrer un nom valide.");
} else {
	let ageChat = prompt("Quel est l'âge de " + nomChat + " ?");
	let poidsChat = prompt("Quel est le poids de " + nomChat + " (en kg) ?");

	// Transformation en nombre
	ageChat = parseInt(ageChat);
	poidsChat = parseInt(poidsChat); // Ou parsfloat

	// Vérification des saisies
	if (isNaN(ageChat) || isNaN(poidsChat)) {
		alert("Âge ou poids invalide. Merci de réessayer.");
	} else {
		verifierAdhesion(nomChat.trim(), ageChat, poidsChat);
	}
}
	