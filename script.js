

document.querySelectorAll('.Stops').forEach((stop) => {
  // Select elements within this particular .Stops container
    // Select elements within this particular .Stops container
    const tickedDetails = stop.querySelector('.tickedDetails');
    const closeBtn = stop.querySelector('.closeBtn');
    const openBtn = stop.querySelector('.OpenBtn');
    const increaseBtn = stop.querySelector('.increase');
    const decreaseBtn = stop.querySelector('.decrease');
    const Qprice = stop.querySelector('.Qprice');
    const inputQuantity = stop.querySelector('.Inputquantity');
    const priceElement = stop.querySelector('.price');
    const totalPrice = stop.querySelector('.Totalprice');

    // Ensure priceElement exists before trying to get its value
    const priceValue = priceElement ? parseInt(priceElement.textContent) : 0;

    // Function to update total price
    function updateTotalPrice() {
        let quantity = parseInt(inputQuantity.value);
        Qprice.textContent = quantity;
        totalPrice.textContent = quantity * priceValue; // Update total price
    }

    // Increase quantity button
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            inputQuantity.value = parseInt(inputQuantity.value) + 1;
            updateTotalPrice();
        });
    }

    // Decrease quantity button
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            let newValue = Math.max(1, parseInt(inputQuantity.value) - 1);
            inputQuantity.value = newValue;
            updateTotalPrice();
        });
    }

    // Open ticket details
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            tickedDetails.classList.add('open');
            openBtn.style.display = "none"; // Hide Open button
        });
    }

    // Close ticket details
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            tickedDetails.classList.remove('open');
            openBtn.style.display = "block"; // Show Open button again
        });
    }
});


function changeQuantity(amount) {
    let input = document.getElementById('quantity');
    let currentValue = parseInt(input.value);

    if (isNaN(currentValue)) {
        input.value = 1;
    } else {
        let newValue = currentValue + amount;
        input.value = newValue > 0 ? newValue : 1;  // Prevent negative values
    }
}


