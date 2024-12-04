let cart = [];
const shippingCost = 5;

function addToCart(id) {
    const productElement = document.querySelector(`.product[data-id="${id}"]`);
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);
    const image = productElement.dataset.image;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;

        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>$${item.price} × ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${index})">Eltávolítás</button>
        `;

        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("total-price").innerText = (subtotal + shippingCost).toFixed(2);
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

document.getElementById("cart-button").addEventListener("click", toggleCart);
window.onclick = function (event) {
    const modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

