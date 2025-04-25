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