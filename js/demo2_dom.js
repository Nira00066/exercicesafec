function ajouterObjet() {
  const select = document.getElementById("objetSelect");
  const objetChoisi = select.options[select.selectedIndex].text;
  
  const nomObjet = document.createElement("div");
  nomObjet.textContent = objetChoisi;

  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.onclick = () => divObjet.remove();

  
  const btnDeplacer = document.createElement("button");
  btnDeplacer.textContent = "Déplacer";
  btnDeplacer.onclick = () => {
    const sac = document.getElementById("camp");
    if (divObjet.nextSibling) {
      sac.insertBefore(divObjet.nextSibling, divObjet); // échange avec le suivant
    } else {
      sac.insertBefore(divObjet, sac.firstChild); // sinon remet en haut
    }
  };
  

  document.getElementById("sac").appendChild(divObjet);
  
  return;
  // divObjet.appendChild(nomObjet);
  // divObjet.appendChild(btnSupprimer);
  // divObjet.appendChild(btnDeplacer);
}
