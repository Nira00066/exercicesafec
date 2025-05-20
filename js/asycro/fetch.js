// function fetch1() {
  //   const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  //   try {
  //     fetch(baseUrl)
  //       .then((response) => {
  //         const responseJson = response.json();
  //         return responseJson;
  //       })
  //       .then((data) => {
  //         const pokemons = data.results;
  //         pokemons.forEach((pokemon) => {
  //           console.log(pokemon);
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   function renderPokemon(pokeData) {
  //     let allPokemonContainer = document.createElement("div");
  //     let pokeContainer = document.createElement("div");

  //     let pokeName = document.createElement("h4");
  //     pokeName.innerText = `#${pokeData.name}`;

  //     let pokeNumber = document.createElement("p");
  //     pokeNumber.innerText = `#${pokeData.id}`;

  //     let pokeTypes = document.createElement("ul");
  //     createType(pokeData.Types, pokeTypes);

  //     pokeCOntainer.append(pokeName, pokeNumber, pokeTypes, pokeUrl);
  //     allPokemonContainer.appendChild(pokeContainer);
  //   }
  //   renderPokemon();

  //   function createTypes(types, ul) {
  //     types.forEach(function (type) {
  //       let typeLi = document.createElement("li");
  //       typeLi.innerText = type["type"]["name"];
  //       ul.append(typeLi);
  //     });
  //   }
  