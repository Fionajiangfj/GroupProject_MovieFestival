const getPricePerTicket = (ticketType) => {
    switch (ticketType) {
        case 'regular-daily':
            return 20.00;
        case 'regular-4day':
            return 60.00;
        case 'premium-daily':
            return 50.00;
        case 'premium-4day':
            return 180.00;
        default:
            return 0.00;
    }
};

const calculateOrder = () => {
    const ticketType = document.getElementById('ticketType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const creditCard = document.getElementById('creditCard').value;
    const pricePerTicket = getPricePerTicket(ticketType);
    const subtotal = pricePerTicket * quantity;
    const tax = 0.13 * subtotal;
    const finalPrice = subtotal + tax;

    if (quantity < 1) {
        displayError("You must select a minimum of 1 ticket!");
        return;
    } else if (creditCard.length !== 6 || isNaN(creditCard)) {
        displayError("Please enter a 6-digit credit card number!");
        return;
    } else {
        clearError();
    }

    const orderSummaryHTML = `
    <h2>Order Summary</h2>
    <p>Number of tickets: ${quantity}</p>
    <p>Price per ticket: $${pricePerTicket.toFixed(2)}</p>
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (13%): $${tax.toFixed(2)}</p>
    <p>Final Price: $${finalPrice.toFixed(2)}</p>
    `;
    document.getElementById('orderSummary').innerHTML = orderSummaryHTML;
};

const displayError = (errorMessage) => {
    document.getElementById('error').innerHTML = errorMessage;
    document.getElementById('orderSummary').innerHTML = "";
};

const clearError = () => {
    document.getElementById('error').innerHTML = "";
};


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('payNowButton').addEventListener('click', calculateOrder);
});


