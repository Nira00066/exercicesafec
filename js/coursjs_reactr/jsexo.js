function generateur() {
  function generateLotoNumbers() {
    let result = [];

    while (result.length < 5) {
      let num = Math.floor(Math.random() * 49) + 1;
      if (!result.includes(num)) {
        result.push(num);
      }
    }

    result.sort((a, b) => a - b); // tri après avoir tous les numéros
    let numsupp = Math.floor(Math.random() * 9) + 1;
    console.log(result + " + " + numsupp);
  }
  generateLotoNumbers();
}

function shop() {

    // Ton stock de produits
    const stock = [
      { name: "Stylo", price: 1.5, category: "Fournitures" },
      { name: "Cahier", price: 3, category: "Fournitures" },
      { name: "Clé USB", price: 10, category: "Électronique" },
      { name: "Chargeur", price: 15, category: "Électronique" },
    ];

    // Fonction qui groupe les produits par catégorie
    function groupProductsByCategory(products) {
      let categories = {};
      products.forEach(product => {
        if (!categories[product.category]) {
          categories[product.category] = [];
        }
        categories[product.category].push({
          name: product.name,
          price: product.price
        });
      });
      return categories;
    }

    // Fonction qui affiche les produits dans une catégorie
    function displayProducts(products) {
      const displayDiv = document.getElementById("productDisplay");
      displayDiv.innerHTML = ""; // on vide avant d’afficher
      products.forEach(product => {
        const p = document.createElement("p");
        p.textContent = `${product.name} - ${product.price}€`;
        displayDiv.appendChild(p);
      });
    }

    // Bouton principal : afficher les catégories
    const btnShowCategories = document.createElement("button");
    btnShowCategories.textContent = "Afficher les produits par catégorie";
    document.body.appendChild(btnShowCategories);

    // Div pour afficher les boutons de catégories
    const categoriesContainer = document.createElement("div");
    document.body.appendChild(categoriesContainer);

    // Div pour afficher les produits
    const displayDiv = document.createElement("div");
    displayDiv.id = "productDisplay";
    document.body.appendChild(displayDiv);

    // Quand on clique sur le bouton principal
    btnShowCategories.addEventListener("click", () => {
      const grouped = groupProductsByCategory(stock);

      // On vide les anciens boutons si besoin
      categoriesContainer.innerHTML = "";

      // Pour chaque catégorie, on crée un bouton
      for (let category in grouped) {
        const btn = document.createElement("button");
        btn.textContent = category;

        // Quand on clique sur une catégorie, on affiche ses produits
        btn.addEventListener("click", () => {
          displayProducts(grouped[category]);
        });

        categoriesContainer.appendChild(btn);
      }
    });
  
}
