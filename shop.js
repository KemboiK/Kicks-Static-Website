// Sample array of products (replace with your own data)
const products = [
    { name: 'Product 1', price: '$20', category: 'Laptops', image: 'C:\Users\ADMIN\Downloads\laptop1.jpg' },
    { name: 'Product 2', price: '$30', category: 'Laptops', image: 'C:\Users\ADMIN\Downloads\laptop2.webp' },
    { name: 'Product 3', price: '$25', category: 'Laptops', image: 'C:\Users\ADMIN\Downloads\laptop3.avif' },
    // Add more products as needed
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
