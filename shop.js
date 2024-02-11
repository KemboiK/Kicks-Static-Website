// Sample array of products
const products = [
    { name: 'HP', price: '$2000', category: 'Laptops', image: 'C:\Users\ADMIN\Downloads\laptop1.jpg' },
    { name: 'HP spectre', price: '$1500', category: 'Laptops', image: 'C:\Users\ADMIN\Downloads\laptop2.webp' },
    { name: 'Macbook', price: '$3000', category: 'Laptops', image: 'C:\Users\ADMIN\Downloads\laptop3.avif' }
];

const content = document.querySelector('.content');

// Function to display products on the shop page
function displayProducts() {
    content.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: ${product.category}</p>
        `;
        content.appendChild(productDiv);
    });
}

// Call the function to display products when the page loads
displayProducts();
