listeCitations = [
  { text: "La vie est un défi, relève-le !", auteur: "Mère Teresa" },
  {
    text: "Sois toi-même, tous les autres sont déjà pris.",
    auteur: "Oscar Wilde",
  },
  {
    text: "Le succès est la somme de petits efforts répétés jour après jour.",
    auteur: "Robert Collier",
  },
  {
    text: "La seule façon de faire un excellent travail est d’aimer ce que vous faites.",
    auteur: "Steve Jobs",
  },
  {
    text: "Ne comptez pas les jours, faites que les jours comptent.",
    auteur: "Muhammad Ali",
  },
  {
    text: "La vie est un voyage, pas une destination.",
    auteur: "Ralph Waldo Emerson",
  },
  {
    text: "Le meilleur moyen de prédire l’avenir est de l’inventer.",
    auteur: "Alan Kay",
  },
  {
    text: "La seule limite à notre réalisation de demain sera nos doutes d’aujourd’hui.",
    auteur: "Franklin D. Roosevelt",
  },
  {
    text: "N’attendez pas. Le temps ne sera jamais juste.",
    auteur: "Napoleon Hill",
  },
  {
    text: "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions.",
    auteur: "Dalai Lama",
  },
];

function genererCitation() {
  let indexAleatoir = Math.floor(Math.random() * listeCitations.length);
  // Math.random() génère un nombre aléatoire entre 0 et 1, multiplié par la longueur de la liste pour obtenir un index valide.
  let citation = listeCitations[indexAleatoir].text;
  let auteur = listeCitations[indexAleatoir].auteur;
  let citationComplete = citation + " -" + auteur;
  document.getElementById("texte").innerHTML = citationComplete;
}

function copierTexte() {
  let texte = document.getElementById("texte").innerHTML;
  // Récupère le texte de l'élément avec l'ID "texte"
  navigator.clipboard.writeText(texte).then(
    function () {
      // Navigator est un object contenant des informations sur l'agent utilisateur et la plateforme.
      // copier le texte dans le presse-papier qui est dans le conteneur texte
      // La méthode writeText() de l'API Clipboard permet d'écrire du texte dans le presse-papiers.
      // Elle renvoie une promesse qui se résout lorsque le texte a été copié avec succès.
      // La méthode then() est utilisée pour exécuter une fonction lorsque la promesse est résolue.
      alert("Texte copié dans le presse-papiers !");
    },
    function (err) {
        
      alert.error("Erreur lors de la copie : ", err);
    }
  );
}


// Pour que l'animation fonction je dois le crée quand on change 

// function partager() {}

