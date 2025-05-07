
document.getElementById("form-film").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    
    const titre = document.getElementById("titre").value;
    const realisateur = document.getElementById("realisateur").value;
    const annee = Number(document.getElementById("annee").value);
    const duree = Number(document.getElementById("duree").value);
    
    const newFilm = {
        titre: titre,
        realisateur: realisateur,
        annee: annee,
        duree: duree,
        vu: false,
        note: null
    };
    
    films.push(newFilm);
    afficherFilms();
    e.target.reset(); // Réinitialise le formulaire
});

let films = [];
function afficherFilms() {
  const filmContainer = document.getElementById("container-film");
  filmContainer.innerHTML = ""; // Nettoie l'affichage

  films.forEach(film => {
    filmContainer.innerHTML += `
      <div class="film">
        <h2>${film.titre}</h2>
        <p>Réalisateur : ${film.realisateur}</p>
        <p>Année : ${film.annee}</p>
        <p>Durée : ${film.duree} minutes</p>
        <p>Vu : ${film.vu ? "Oui" : "Non"}</p>
        <p>Note : ${film.note ?? "Non noté"}</p>
      </div>
    `;
  });
}
