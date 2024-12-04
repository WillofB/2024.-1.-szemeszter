let cart = [];
let products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 }
];

function addToCart(id) {
    let product = products.find(item => item.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById("total-price").innerText = total;
}

function toggleCart() {
    let modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

document.getElementById("cart-button").addEventListener("click", toggleCart);
window.onclick = function(event) {
    let modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
