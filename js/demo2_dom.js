function ajouterObjet() {
  const select = document.getElementById("objetSelect");
  // Prendre le parents pour obtenir les enfants
  console.log(select);

  let sac = document.getElementById("sac");
  // reconnaitre la zone sac comme ca il apparet directement a lui
  const objetChoisi = select.value;

  const nomObjet = document.createElement("div");
  console.log(nomObjet);

  console.log(objetChoisi);

  nomObjet.innerText = objetChoisi;
  // Met ton objet avec ton select et btn

  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";

  btnSupprimer.addEventListener("click", function () {
    nomObjet.remove();
  });

  const btnDeplacer = document.createElement("button");
  btnDeplacer.textContent = "Deplacer";
  btnDeplacer.addEventListener("click", function () {
    const camp = document.getElementById("camp");
// parent element permet de voir ou est l'enfant 
    if (nomObjet.parentElement === sac) {
      // échange avec le suivant;
      console.log("piou");
      camp.appendChild(nomObjet);
    } else {
      sac.appendChild(nomObjet);
      // sinon remet en haut
      console.log("pioupiou");
    }
  });


  // Ajout des boutons à l'objet
  nomObjet.appendChild(btnSupprimer);
  nomObjet.appendChild(btnDeplacer);

  // le faire apparaitre dans la zone 1 qui est sac a dos
  sac.append(nomObjet);
}
