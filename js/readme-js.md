 🎓 Exercice JS — Réduction billets + Affichage personnalisé

## 🧠 Objectif :
Créer un programme JavaScript qui :
1. Demande à l’utilisateur son nom, son âge, son statut étudiant et le nombre de tickets souhaités
2. Applique une réduction principale selon l’âge ou le statut
3. Applique une réduction supplémentaire si plus de 3 tickets sont achetés
4. Calcule et affiche le prix final
5. Affiche un message personnalisé avec manipulation de texte

---

## ✅ Étapes réalisées et expliquées

### 1. Récupération des données utilisateur

```js
let name = prompt("Quel est ton prénom et ton nom ?");
let age = parseInt(prompt("Quel est ton âge ?"));
let Etudiant = prompt("Es-tu étudiant ? (oui/non)").toLowerCase() === "oui";
let nombreTickets = parseInt(prompt("Combien de tickets veux-tu acheter ?"));


Ce qu’on a appris :

    prompt() récupère une valeur texte

    parseInt() convertit une chaîne en nombre

    .toLowerCase() === "oui" permet de tester proprement le “oui/non” en ignorant les majuscules

2. Détermination de la réduction principale

if (age < 12) {
  reduction = 0.5;
} else if (age > 60) {
  reduction = 0.3;
} else if (Etudiant) {
  reduction = 0.2;
} else {
  reduction = 0;
}

Erreurs corrigées en cours :

    Mauvais usage de else avec une condition → remplacé par else if

    Tentative de faire une réduction avec reduction = 0.1 → corrigé en ajout de réduction secondaire plus tard

3. Calcul du prix sans réduction

let prixTotalSansReduction = prixBase * nombreTickets;

Erreur corrigée :

    L’élève avait tenté de calculer directement avec la réduction, sans passer par l'étape “prix brut”.

4. Application de la réduction principale

let prixApresReductionPrincipale = prixTotalSansReduction * (1 - reduction);

Rappel appris :

    1 - reduction = pourcentage du prix à payer

    Exemple : reduction = 0.2 → on paie 80% → donc * 0.8

5. Réduction de groupe (si plus de 3 tickets)

if (nombreTickets > 3) {
  prixApresReductionPrincipale *= 0.9;
}

Erreur corrigée :

    L’élève avait tenté if (prixTotalSansReduction, nombreTickets > 3) → remplacé par un test simple sur nombreTickets

    On a appris à utiliser *= 0.9 pour appliquer -10% proprement

6. Manipulation du prénom et du nom

let tableauNom = name.split(" ");
let prenom = tableauNom[0];
let nom = tableauNom[1];
let longueurPrenom = prenom.length;
let deuxPremieresLettres = nom.slice(0, 2).toUpperCase();

Ce qu’on a vu ici :

    .split(" ") → transforme "John Doe" en ["John", "Doe"]

    .length → compte le nombre de lettres du prénom

    .slice(0, 2).toUpperCase() → extrait les 2 premières lettres et les met en majuscules

7. Affichage final dans une alert()

let message = "Bonjour " + name + ", ton nom commence par " + deuxPremieresLettres + ", tu as " + age + " ans et tu paies " + prixApresReductionPrincipale.toFixed(2) + " € pour " + nombreTickets + " tickets.";
alert(message);

Ce qu’on a appris ici :

    .toFixed(2) pour limiter à 2 chiffres après la virgule

    Concaténation de string et de variables pour afficher un message propre

💡 Bonus appris durant l’exo :

    Syntaxe JS : if / else if / else, +=, *=

    Vérification de majuscules avec .toUpperCase()

    Bonne pratique : séparer calculs et affichage

    Compréhension logique de l’ordre des opérations

✅ Résultat attendu :

Par exemple, pour une personne :

    nom : John Doe

    âge : 24

    étudiant : oui

    tickets : 4

Le message final sera :

Bonjour John Doe, ton nom commence par DO, tu as 24 ans et tu paies 34.56 € pour 4 tickets.

🎉 Conclusion

Cet exercice a permis de pratiquer :

    Les conditions

    Les calculs simples

    La manipulation de chaînes de caractères

    L’affichage dynamique

Et surtout, d'apprendre en faisant des erreurs et en les corrigeant comme une vraie dev 🔥



📚 Synthèse : Mes Premières Fonctions en JavaScript
Introduction

Dans cet exercice, j'ai créé plusieurs fonctions simples pour m'entraîner aux bases de JavaScript :

    Déclaration de fonctions

    Utilisation de paramètres

    Utilisation de return pour renvoyer des valeurs

    Utilisation de console.log pour afficher des résultats

    Maîtrise des conditions if/else

📌 Fonctions réalisées
1. saluerUtilisateur(prenom)

Fonction qui prend un prénom en paramètre et affiche un message personnalisé dans la console.

function saluerUtilisateur(prenom) {
    console.log(`Bonjour ${prenom} !`);
}

// Exemples d'appels :
saluerUtilisateur('Nina');
saluerUtilisateur('Alex');

2. addition(a, b)

Fonction qui prend deux nombres en paramètres, retourne leur somme, et affiche le résultat dans la console.

function addition(a, b) {
    return a + b;
}

// Exemple d'utilisation :
console.log(addition(4, 5)); // Affiche 9

3. estPair(nombre)

Fonction qui prend un nombre en paramètre et retourne true si le nombre est pair, false sinon.

function estPair(nombre) {
    return nombre % 2 === 0;
}

// Exemples de tests :
console.log(estPair(4)); // true
console.log(estPair(7)); // false

4. calculerMoyenne(note1, note2, note3)

Fonction qui calcule et retourne la moyenne de trois notes.

function calculerMoyenne(note1, note2, note3) {
    return (note1 + note2 + note3) / 3;
}

// Exemple d'utilisation :
console.log(calculerMoyenne(10, 15, 20)); // 15

5. plusGrand(a, b)

Fonction qui prend deux nombres en paramètres et retourne le plus grand des deux.

function plusGrand(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Exemples de tests :
console.log(plusGrand(10, 5)); // 10
console.log(plusGrand(3, 8));  // 8
console.log(plusGrand(7, 7));  // 7

🚀 Compétences utilisées :

    Utilisation de function, return, console.log

    Gestion des paramètres

    Maîtrise des opérateurs (%, +, >)

    Écriture de conditions avec if/else

    Respect de l'ordre des opérations en JavaScript

🔥 Conclusion

Ces exercices m'ont permis de :

    Bien comprendre comment fonctionnent les fonctions.

    Savoir comment traiter et manipuler des valeurs en JavaScript.

    Gagner en logique et en vitesse d'écriture.

Prochaine étape ➔ m'entraîner avec des fonctions un peu plus complexes ! 🚀