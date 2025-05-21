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
divPage.innerHTML='';


     for( index = 0 ; pageActuelle == 10 ; index++ ){

       let id = Math.floor(Math.random() * totalPersonnages - 10) + 1;
       
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
