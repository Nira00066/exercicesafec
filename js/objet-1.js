let film = {
  titre: "Inception",
  realisateur: "Christopher Nolan",
  annee: 2010,
  duree: 148,
  vu: false,
};


function userMovie(film) {
    
    let rep = prompt(
      "Voulez-vous voir le film " + film.titre + " ? (oui/non)"
    ).toLowerCase();
    
  if (rep === "oui") {
    film.vu = true;
    console.log("Vous avez regardé le film " + film.titre + ".");

    let note;
    do {
      note = Number(prompt("Note le film entre 1 à 5 :"));
      if (isNaN(note) || note < 1 || note > 5) {
        console.log("Note invalide. Entrez un nombre entre 1 et 5.");
      } else {
        film.note = note;
        alert(
          "Vous avez noté le film " + film.titre + " avec un " + film.note + "."
        );
      }
    } while (isNaN(note) || note < 1 || note > 5);
  } else if (rep === "non") {
    alert("Vous n'avez pas regardé le film " + film.titre + ".");
  } else {
    console.log("Réponse invalide. Veuillez répondre par 'oui' ou 'non'.");
  }
}

// userMovie(film);
console.log(film);

// afficher le contenu de film dans le html 
const filmContainer = document.getElementById("container-film");
filmContainer.innerHTML = `
  <h2>${film.titre}</h2>
  <p>Réalisateur : ${film.realisateur}</p>
  <p>Année : ${film.annee}</p>
  <p>Durée : ${film.duree} minutes</p>
  <p>Vu : ${film.vu ? "Oui" : "Non"}</p>
    <p>Note : ${film.note ? film.note : "Non noté"}</p>
`;	

 let films = [];
function addFilm() {
    let titre = prompt("Titre du film :");
    let realisateur = prompt("Réalisateur :");
    let annee = Number(prompt("Année :"));
    let duree = Number(prompt("Durée :"));
  
    let newFilm = {
      titre: titre,
      realisateur: realisateur,
      annee: annee,
      duree: duree,
      vu: false,
      note: null
    };
  
    films.push(newFilm);
    console.log("Nouveau film ajouté : ", newFilm);
    return newFilm;
  }
  