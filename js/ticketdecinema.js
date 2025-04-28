let nameComplet = prompt("Quel est ton prénom et ton nom ?");
let age = parseInt(prompt("Quel est ton âge ?"));
// let Etudiant = prompt("Es-tu étudiant ? (oui/non)").toLowerCase() === "oui";
let nombreTickets = parseInt(prompt("Combien de tickets veux-tu acheter ?"));

const prixBase = 12;
let reduction;

if (isNaN(age)) {
    alert("Âge invalide");
  }

  if (isNaN(nombreTickets) || nombreTickets <= 0) {
    alert("Tu dois au moins acheter un ticket !");
  }

// Petit proble dans le rappel ici je comprens pas 
  
// exo bonus 1   

  let reponseEtudiant = prompt("Es-tu étudiant ? (oui/non)").toLowerCase();



// exo bonus 2

  if (reponseEtudiant !== "oui" && reponseEtudiant !== "non") {
    alert("Réponse invalide. Tu dois répondre par oui ou non.");
  }
  
  let Etudiant = reponseEtudiant === "oui";


// Étape 1 
if (age < 12) {
  reduction = 0.5;
} else if (age > 60) {
  reduction = 0.3;
} else if (Etudiant) {
  reduction = 0.2;
} else {
  reduction = 0;
}

// Étape 2 
let prixTotalSansReduction = prixBase * nombreTickets;

// Étape 3 
let prixApresReductionPrincipale = prixTotalSansReduction * (1 - reduction);

// Étape 4 
if (nombreTickets > 3) {
  prixApresReductionPrincipale *= 0.9;
}

// Étape 5
let tableauNom = nameComplet.split(" ");
let prenom = tableauNom[0];
let nom = tableauNom[1];
let longueurPrenom = prenom.length;
let deuxPremieresLettres = nom.slice(0, 2).toUpperCase();
 
// Étape 6 
let message = "Bonjour " + nameComplet + ", ton nom commence par " + deuxPremieresLettres + ", tu as " + age + " ans et tu paies " + prixApresReductionPrincipale.toFixed(2) + " € pour " + nombreTickets + " tickets.";
alert(message);



 