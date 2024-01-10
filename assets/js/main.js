



// Globale Variable
let allProducts;  

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    allProducts = json;

    showAllProducts(allProducts); // Anzeige aller Produkte beim ersten Laden der Seite
  })
  .catch(error => console.error('Error fetching data:', error));

function showAllProducts(products) {
  products.forEach((product) => {
    const productItem = createProductItem(product);
    document.querySelector("#products").appendChild(productItem);
  });
}

function search() {
  const searchTerm = document.getElementById('input').value.toLowerCase();

  // löschung des suchergebnisses
  document.querySelector("#products").innerHTML = "";

  const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchTerm));
  showAllProducts(filteredProducts);
}

function createProductItem(product) {
  const productItem = document.createElement("div");

  // Image
  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.setAttribute("alt", product.title);
  productItem.appendChild(productImg);

    // Title
    const titleElement = document.createElement("h3");
    titleElement.textContent = product.title;
    productItem.appendChild(titleElement);

  // Price
  const p = document.createElement("p");
  p.textContent = product.price + " $";
  productItem.appendChild(p);

  // Button
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";

  
  productItem.appendChild(addToCartBtn);

  return productItem;
}


// filter nach electronics category
function filterByCategory(category) {
    document.querySelector("#products").innerHTML = "";
  
    if (category === "all") {
      showAllProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(product => product.category.toLowerCase() === category);
      showAllProducts(filteredProducts);
    }
  }
  
  document.querySelector('.electronicsBtn').addEventListener('click', function() {
    filterByCategory('electronics');
  });

  // Event listener for the "Jewelry" button
document.querySelector('.jeweleryBtn').addEventListener('click', function() {
    filterByCategory('jewelery');
  });
  
  
 // Event listener for the "Men's Clothing" button
document.querySelector('.mensClothingBtn').addEventListener('click', function() {
    filterByCategory('men\'s clothing');
  });
  
  // Event listener for the "Women's Clothing" button
document.querySelector('.womensClotthingBtn').addEventListener('click', function() {
    filterByCategory('women\'s clothing');
  });
  
  
document.getElementById('sortBy').addEventListener('change', function() {
    const selectedValue = this.value;

    if (selectedValue === 'lowToHigh') {
        sortByPriceLowToHigh();
    } else if (selectedValue === 'highToLow') {
        sortByPriceHighToLow();
    }
});

// sortieren von low to high
function sortByPriceLowToHigh() {
    const sortedProducts = allProducts.slice().sort((a, b) => a.price - b.price);
    document.querySelector("#products").innerHTML = "";
    showAllProducts(sortedProducts);
}

// sortieren von high to low
function sortByPriceHighToLow() {
    const sortedProducts = allProducts.slice().sort((a, b) => b.price - a.price);
    document.querySelector("#products").innerHTML = "";
    showAllProducts(sortedProducts);
}

