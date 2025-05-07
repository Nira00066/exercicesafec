function reponseFausse() {
  let reponses = document.querySelectorAll(".resultat");
  for (let i = 0; i < reponses.length; i++) {
    reponses[i].style.color = "red";
    reponses[i].textContent = "Mauvaise Réponse !";
  }
}

function reponseBonne() {
  let reponses = document.querySelectorAll(".resultat");
  for (let i = 0; i < reponses.length; i++) {
    reponses[i].style.color = "green";
    reponses[i].textContent = "Bonne Réponse !";
  }
}

// Camp de l'explorateur 

