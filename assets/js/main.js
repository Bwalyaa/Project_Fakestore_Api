

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const ProductAusDemJson = json;

        ProductAusDemJson.forEach((product) => {
            const productCategory = product.category;
            const productPrice = product.price;
            const productUrl = product.img;
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

            


