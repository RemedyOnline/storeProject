fetch("https://fakestoreapi.com/products").then(
    function(responses){
        return responses.json();
    }
).then(
    function(data){
        console.table(data);
        for(const product of data) {
            const productDiv = document.createElement('div');

            const productImage = document.createElement('img');
            productImage.setAttribute('src',product.image);
            productImage.setAttribute('alt',product.title);
            productImage.classList.add('product-img')
            productDiv.appendChild(productImage);

            const productTitle = document.createElement('h1');
            productTitle.textContent = product.title;
            productDiv.appendChild(productTitle);

            const productDesc = document.createElement('p');
            productDesc.textContent = product.description;
            productDiv.appendChild(productDesc);
            
            

            document.querySelector('#products').appendChild(productDiv);
        }
    }
)