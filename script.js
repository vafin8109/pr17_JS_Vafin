document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.getElementById('catalog');
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');
    const productInfo = document.getElementById('product-info');
    const backBtn = document.getElementById('back-btn');

    async function fetchProducts() {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        displayProducts(data.products.slice(0, 15));
    }

    function displayProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Цена: $${product.price}</p>
            `;
            productCard.addEventListener('click', () => showProductDetails(product));
            productList.appendChild(productCard);
        });
    }

    function showProductDetails(product) {
        catalog.classList.add('hidden');
        productDetails.classList.remove('hidden');
        productInfo.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Цена: $${product.price}</strong></p>
            <p><strong>Рейтинг: ${product.rating} / 5</strong></p>
            <p><strong>Категория: ${product.category}</strong></p>
        `;
    }

    backBtn.addEventListener('click', () => {
        productDetails.classList.add('hidden');
        catalog.classList.remove('hidden');
    });

    fetchProducts();
});