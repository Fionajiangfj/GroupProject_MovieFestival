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

const orderSummary = document.getElementById('order-summary')

const calculateOrder = () => {
    const ticketType = document.getElementById('ticket-type').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const creditCard = document.getElementById('credit-card').value;
    const pricePerTicket = getPricePerTicket(ticketType);
    const subtotal = pricePerTicket * quantity;
    const tax = 0.13 * subtotal;
    const finalPrice = subtotal + tax;

    if (quantity < 1) {
        displayError("<p>You must select a minimum of 1 ticket!</p>");
        return;
    } else if (creditCard.length !== 6 || isNaN(creditCard)) {
        displayError("<p>Please enter a 6-digit credit card number!</p>");
        return;
    } else {
        const orderSummaryHTML = `
        <h2>Order Summary</h2>
        <p>Number of tickets: ${quantity}</p>
        <p>Price per ticket: $${pricePerTicket.toFixed(2)}</p>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (13%): $${tax.toFixed(2)}</p>
        <p>Final Price: $${finalPrice.toFixed(2)}</p>
        `;
        displayOrder(orderSummaryHTML);
    }

};

const displayError = (errorMessage) => {
    orderSummary.innerHTML = `<h2>Payment Declined</h2> ${errorMessage}`;
    orderSummary.style.color = "red";
    orderSummary.style.display = "block";
};

const displayOrder = (orderSummaryHTML) => {
    orderSummary.innerHTML = orderSummaryHTML;
    orderSummary.style.color = "white";
    orderSummary.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('pay-button').addEventListener('click', calculateOrder);
});


