let age = 20;
let motDePasse = "afec";
let motEntreParLeJoueur = prompt("Entrez le mot de passe du donjon :");
let aUnBadgeMagique = true;
let niveauDeForce = 8;

console.log(age);
console.log(motDePasse);
console.log(motEntreParLeJoueur);
console.log(aUnBadgeMagique);
console.log(niveauDeForce);

if (motEntreParLeJoueur == motDePasse) {
  console.log("bravo suivants");
  alert("Bienvenu dans le donjon, avanturier!");
  
if (age >= 18 && aUnBadgeMagique == true && niveauDeForce >= 7) {
    console.log("Treès bien!");
  } else {
    console.log("pas cool");
  }
} else {
  alert("🔴 Accès refusé. Tu ne remplis pas toutes les conditions…");

}
