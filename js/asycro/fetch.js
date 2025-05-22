function fetch1() {
  async function fetchPokemon(id) {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonDiv = document.getElementById("pokemon");
    try {
      let response = await fetch(baseUrl);

      if (!response.ok) {
        console.log("erreur reponse");
      }
      const data = await response.json();
      const title = document.createElement("h1");
      title.textContent = data.name;
      pokemonDiv.appendChild(title);

      const image = document.createElement("img");
      console.log(data);

      image.src = data.sprites.front_default;
      console.log(image);
      pokemonDiv.appendChild(image);

      const sound = document.createElement("audio");
      sound.src = data.cries.lastest;
      // element html audio
      sound.setAttribute("controls", "");

      // Cette partie et en auto
      // const sounds = new Audio(data.cries.lastest);
      // sounds.play();

      pokemonDiv.appendChild(sound);
    } catch (error) {
      console.error(error);
    }
  }
  let btnPokemeon = document.createElement("button");
  btnPokemeon.id = "btn-pokemon";
  btnPokemeon.className = "btn";
  btnPokemeon.textContent = "pokemon";
  document.body.appendChild(btnPokemeon);

  document.getElementById("btn-pokemon").addEventListener("click", function () {
    const id = Math.floor(Math.random() * 151) + 1;
    fetchPokemon(id);
  });
}

function fetch2() {
  const titre = document.createElement("h2");
  titre.textContent = "Découvre un personnage de Rick & Morty !";

  const consigne = document.createElement("p");
  consigne.textContent =
    "Un personnage aléatoire va s'afficher à chaque clic. Multivers garanti";

  const btn = document.createElement("button");
  btn.className = "btn btn-success";
  btn.id = "btn-rm";
  btn.textContent = "Afficher un personnage";

  const div = document.createElement("div");
  div.id = "character";
  div.className = "mt-3";

  document.body.appendChild(titre);
  document.body.appendChild(consigne);
  document.body.appendChild(btn);
  document.body.appendChild(div);

  // Debut du code  et de l'exo

  let totalPersonnages;

  // déclaration de total  de perso de l'api

  async function initialiserNombreDePersonnages() {
    // async permet de lancer l'action mais en continuant les autre elemnents autre

    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    totalPersonnages = data.info.count;
    console.log(data);
    console.log(data.results);
  }
  initialiserNombreDePersonnages();

  //  btn et le bouton crée pour lancer l'affichager du perso
  // ! question est ce que la fonction peut etre la en asyco

  btn.addEventListener("click", async function () {
    // la va etre l'action de ton randmon pour afficher ton id aleatoir !

    let id = Math.floor(Math.random() * totalPersonnages) + 1;

    try {
      // apiById = `https://rickandmortyapi.com/api/character${id}`;
      let response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      console.log("pourquuoi");

      if (!response.ok) {
        throw new Error("error reponse");
        // console.log("erreur reponse")
      }

      let data = await response.json();

      let name = data.name;
      console.log(name);

      let species = data.species;
      console.log(species);

      let status = data.status;
      console.log(status);

      let image = data.image;
      console.log(image);

      div.innerHTML = `
<img src="${image}" alt="${name}">
<h3>${name}</h3>
<p>Species : ${species} </p>
<p>Status : ${status} </p>
`;

      // Il y a la facon de innerHtml pour te l'injecter dans ton html
      // et il y a la facons de append ou appendChild pour la dernier je nest pas reussi a la mettre avec le meme style
    } catch (error) {
      console.error(error);
    }
  });
}

function fetch3() {
  const titre = document.createElement("h2");
  titre.textContent = "Découvre un personnage de Rick & Morty !";

  const consigne = document.createElement("p");
  consigne.textContent =
    "Un personnage aléatoire va s'afficher à chaque clic. Multivers garanti";

  const btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = "btn-multi";
  btn.textContent = "Afficher 10 personnages";

  const div = document.createElement("div");
  div.id = "character";
  div.className = "mt-3";

  document.body.appendChild(titre);
  document.body.appendChild(consigne);
  document.body.appendChild(btn);
  document.body.appendChild(div);

  // Debut du code  et de l'exo
  // On récupère le nombre total de personnages
  let totalPersonnages;

  // déclaration de total  de perso de l'api

  // Pour suivre où on en est dans l'affichage (1ère page, 2e, etc.)
  let pageActuelle = 0;

  async function initialiserNombreDePersonnages() {
    // async permet de lancer l'action mais en continuant les autre elemnents autre

    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    totalPersonnages = data.info.count;

    console.log(data);
    console.log(data.results);
  }
  initialiserNombreDePersonnages();

  const divPage = document.createElement("div");
  divPage.className = "grille";
  divPage.id = "galerie";

  document.body.appendChild(divPage);

  // Le bouton est deja crée et a les class besoin !

  //  btn et le bouton crée pour lancer l'affichager du perso
  // ! question est ce que la fonction peut etre la en asyco

  btn.addEventListener("click", async function () {
    // la va etre l'action de ton randmon pour afficher ton id aleatoir !

    // Mettre a vide la page
    divPage.innerHTML = "";

    for (index = 0; pageActuelle == 10; index++) {
      const debut = "";
      const fin = "";
    }
    // On calcule les ID de début et de fin du groupe de 10 personnages à afficher
    // À faire

    try {
      // apiById = `https://rickandmortyapi.com/api/character${id}`;
      let response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      console.log("pourquuoi");

      if (!response.ok) {
        throw new Error("error reponse");
        // console.log("erreur reponse")
      }
      let ids = [];
      while (ids.length < 10) {
        let ramdomId = Math.floor(Math.random() * totalPersonnages) + 1;
        if (!ids.includes(ramdomId)) {
          ids.push(ramdomId);
        }
      }

      let data = await response.json();
      let name = data.name;
      console.log(name);

      let species = data.species;
      console.log(species);

      let status = data.status;
      console.log(status);

      let image = data.image;
      console.log(image);

      div.innerHTML = `
<img src="${image}" alt="${name}">
<h3>${name}</h3>
<p>Species : ${species} </p>
<p>Status : ${status} </p>
`;

      // Il y a la facon de innerHtml pour te l'injecter dans ton html
      // et il y a la facons de append ou appendChild pour la dernier je nest pas reussi a la mettre avec le meme style
    } catch (error) {
      console.error(error);
    }
  });
}

// Local Storager

function LocalDemo() {
  let input = document.createElement("input");
  input.type = "text";
  input.id = "champ-prenom";
  input.placeholder = "Entrez votre prénom";
  input.className = " form-control w-50 mn-2";
  // Création de l'input
  // <input type="text" id="champ-prenom" placeholder="Entrez votre prénom" class="form-control w-50 mb-2" />
  // Rendu normal !
  let btn = document.createElement("button");
  btn.id = "btn-sauvegarder";
  btn.className = "btn btn-success";
  btn.textContent = "Sauvgarder";
  // Creation de ton btn
  // <button id="btn-sauvegarder" class="btn btn-success">Sauvegarder</button>
  // Rendu normal

  let text = document.createElement("p");
  text.id = "message-accueil";
  text.className = "mt-3";
  // Creation d'une balise p
  //  <p id="message-accueil" class="mt-3"></p>
  // Rendu Normal !
  let container = document.getElementById("container");

  container.appendChild(input);
  container.appendChild(btn);
  container.appendChild(text);
  // Script

  // Si un prénom est déjà enregistré, on le récupère
  let nomEnregistre = localStorage.getItem("prenom");
  if (nomEnregistre) {
    text.textContent = "Bonjour " + nomEnregistre;
  }

  // Quand on clique sur "Sauvegarder"
  btn.addEventListener("click", function () {
    let prenom = input.value.trim();

    if (prenom !== "") {
      localStorage.setItem("prenom", prenom);
      text.textContent = "Bonjour " + prenom + " (enregistré)";
      input.value = "";
    }
  });
}

function LocalDemo1() {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = "btn-eleves";
  btn.textContent = " Afficher la Liste";

  // retour Normal :<button id="btn-eleves" class="btn btn-primary">Afficher la liste</button>
  let ul = document.createElement("ul");
  ul.id = "liste-eleves";
  ul.className = "mt-3 list-group w-50";

  let container = document.getElementById("container");
  container.appendChild(btn);
  container.appendChild(ul);

  btn.addEventListener("click", function () {
    // Étape 1 : liste d’élèves à enregistrer
    let eleves = ["guillaume", "angélique", "alan", "alvyn"];

    // Étape 2 : enregistrer dans localStorage
    localStorage.setItem("eleves", JSON.stringify(eleves));

    // Étape 3 : récupérer la liste
    let liste = JSON.parse(localStorage.getItem("eleves"));

    // Étape 4 : afficher dans la page
    ul.innerHTML = ""; // on vide d’abord

    for (let i = 0; i < liste.length; i++) {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = liste[i];
      ul.appendChild(li);
    }
  });
}
// ! Attention si tu mets tes balise avec body alors elle sera toujours apres tout donc mis en dernier !
function LocalDemo2() {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = "btn-eleves";
  btn.textContent = " Afficher la Liste Exo 3";

  // retour Normal :<button id="btn-eleves" class="btn btn-primary">Afficher la liste</button>
  let ul = document.createElement("ul");
  ul.id = "liste-eleves";
  ul.className = "mt-3 list-group w-50";

  let container = document.getElementById("container1");
  container.appendChild(btn);
  container.appendChild(ul);

  btn.addEventListener("click", function () {
    // 1. Liste initiale
    let eleves = ["jean-francois", "ilona", "guillaume"];
    localStorage.setItem("eleves", JSON.stringify(eleves));

    // 2. Ajouter "nuno"
    let liste = JSON.parse(localStorage.getItem("eleves"));
    liste.push("nuno");
    localStorage.setItem("eleves", JSON.stringify(liste));

    // 3. Supprimer "ilona"
    liste = liste.filter(function (prenom) {
      return prenom !== "ilona";
    });
    localStorage.setItem("eleves", JSON.stringify(liste));

    // 4. Modifier "dax" en "daxter"
    liste = liste.map(function (prenom) {
      return prenom === "dax" ? "daxter" : prenom;
    });
    localStorage.setItem("eleves", JSON.stringify(liste));

    // 5. Affichage final
    let listeFinale = JSON.parse(localStorage.getItem("eleves"));

    // Afficher dans une liste HTML
    ul.innerHTML = "";
    for (let i = 0; i < listeFinale.length; i++) {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = listeFinale[i];
      ul.appendChild(li);
    }
  });
}
function LocalDemo3() {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = "btn-eleves";
  btn.textContent = " Afficher la Liste Exo 4";

  // retour Normal :<button id="btn-eleves" class="btn btn-primary">Afficher la liste</button>
  let text = document.createElement("p");
  text.id = "liste-eleves";
  text.className = "mt-3 list-group w-50";

  let container = document.getElementById("container2");
  container.appendChild(btn);
  container.appendChild(text);

  btn.addEventListener("click", function () {
    let alerteVue = sessionStorage.getItem("alerteDejaVue");

    if (!alerteVue) {
      text.textContent = "Pense à push ton travail !";
      sessionStorage.setItem("alerteDejaVue", "true");
    } else {
      me;
      text.textContent = "Alerte déjà affichée dans cette session.";
    }
  });
}

function Local() {
  let input = document.createElement("input");
  input.type = "text";
  input.id = "champ-prenom";
  input.placeholder = "Entrez votre prénom";
  input.className = " form-control w-50 mn-2";
  // Création de l'input
  // <input type="text" id="champ-prenom" placeholder="Entrez votre prénom" class="form-control w-50 mb-2" />
  // Rendu normal !
  let btn = document.createElement("button");
  btn.id = "btn-sauvegarder";
  btn.className = "btn btn-success";
  btn.textContent = "Sauvgarder";
  // Creation de ton btn
  // <button id="btn-sauvegarder" class="btn btn-success">Sauvegarder</button>
  // Rendu normal
  let btnSupp = document.createElement("button");
  btnSupp.id = "btn-delete";
  btnSupp.className = "btn btn-waring";
  btnSupp.textContent = "Supprimer";

  let listeName = document.createElement("ul");
  listeName.id = "message-accueil";
  listeName.className = "mt-3";
  // Creation d'une balise p
  //  <p id="message-accueil" class="mt-3"></p>
  // Rendu Normal !
  let container = document.getElementById("container3");

  container.appendChild(input);
  container.appendChild(btn);
  container.appendChild(btnSupp);
  container.appendChild(listeName);

  function getList() {
    return JSON.parse(localStorage.getItem("eleves")) || [];
  }

  function setList(liste) {
    localStorage.setItem("eleves", JSON.stringify(liste));
  }
  function afficherListe() {
    let liste = getList();
    listeName.innerHTML = "";
    liste.forEach((prenom) => {
      const li = document.createElement("li");
      li.textContent = prenom;
      listeName.appendChild(li);
    });
  }

  btn.addEventListener("click", function () {
    const prenom = input.value.trim();
    if (!prenom) return;

    let liste = getList();
    if (!liste.includes(prenom)) {
      liste.push(prenom);
      setList(liste);
      afficherListe();
    }
    input.value = "";
  });

  // ! Problem la dedans !
  //Il ne me le refrech pas et supp pas mon element
  btnSupp.addEventListener("click", function () {
    const prenom = input.value.trim();
    console.log(prenom);
   
    if (!prenom) return;
    console.log(prenom);
    let liste = getList();
    if (
      liste.filter(function (p) {
        return p !== prenom;
        console.log(prenom);
      })
    );
    console.log(prenom);
    console.log(afficherListe);

    afficherListe();
    input.value = "";
  });
}
