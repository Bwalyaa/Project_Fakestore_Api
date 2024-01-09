let allProducts = []

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
        console.log(json)
         ProductAusDemJson = json;
         console.log(ProductAusDemJson);
        search(json)

        ProductAusDemJson.forEach((product) => {
            const productCategory = product.category;
            const productPrice = product.price;
            const productUrl = product.image;
            const productTitle = product.title;

            let productItem = document.createElement("div")

            // img
            const productImg = document.createElement("img")
            productImg.setAttribute("src", productUrl)
            productImg.setAttribute("alt", productTitle)
            productItem.appendChild(productImg)

            document.body.appendChild(productItem);

            // Price
            let p = document.createElement("p")
            p.textContent = productPrice
            productItem.appendChild(p)

            //Button
            let addToCardBtn = document.createElement("button")
            addToCardBtn.textContent = "add to card"

            
        });
    
    })
    .catch(error => console.error('Fehler beim Abrufen der Daten:', error));



    let search = () => {
        let input = document.querySelector("#input").value.toLowerCase();
        let filteredProducts = allProducts.filter((element) => {
            for(const key in element){
                if (element[key].toString().toLowerCase().includes(input)){
                    return true
                }
            }
            return false 
        }) 
        ProductAusDemJson(filteredProducts)
    
        // let copiedProducts = [...ProductAusDemJson];
        // let titleResult = copiedProducts.filter((product) => product.title.toLowerCase().includes(input));
        // let categoryResult = copiedProducts.filter((product) => product.category.toLowerCase().includes(input));
    
        // if (titleResult.length > 0) {
        //     resetProducts();
        //     titleResult;
        // } else if (categoryResult.length > 0) {
        //     resetProducts();
        //     categoryResult;
        // } else {
        //     resetProducts();
        //     productContainer.innerHTML = `<p class="noResult">No result found</p>`;
        //     console.log("No result found");
        // }
    };

    let resetProducts = () => {
        products.innerHTML = ""
    }
    
    // let showProducts = () => {
    //     ProductAusDemJson.innerHTML 
    // }

            


