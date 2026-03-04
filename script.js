let itemCount = 0;
let totalPrice = 0;

function addToBasket(name, price, qtyId) {
    // 1. Get quantity from the correct input field
    const qtyInput = document.getElementById(qtyId);
    const quantity = parseInt(qtyInput.value);

    // 2. Validate input
    if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    const subTotal = price * quantity;

    // 3. Ask for confirmation
    let response = confirm(`Add ${quantity}x ${name} to your basket for £${subTotal.toFixed(2)}?`);

    if (response) {
        // 4. Update the global variables
        itemCount += quantity;
        totalPrice += subTotal;

        // 5. Update the HTML elements
        document.getElementById('basket-count').innerText = itemCount;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);

        console.log(`Success: Added ${quantity} ${name}. Total: £${totalPrice}`);

        // Optional: Reset quantity back to 1
        qtyInput.value = 1;
    }
}

function clearBasket() {
    if (itemCount === 0) {
        alert("Your basket is already empty!");
        return;
    }

    if (confirm("Are you sure you want to empty your basket?")) {
        itemCount = 0;
        totalPrice = 0;
        document.getElementById('basket-count').innerText = "0";
        document.getElementById('total-price').innerText = "0.00";
    }
}
