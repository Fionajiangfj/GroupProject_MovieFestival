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


const purchaseHistory = [];

const addToPurchaseHistory = (ticketType, quantity, totalPrice) => {
    const purchaseInfo = {
        ticketType,
        quantity,
        totalPrice,
        date: new Date().toLocaleDateString(),
    };
    purchaseHistory.push(purchaseInfo);
    purchaseHistoryDiv.style.display = "block";
};

const orderSummary = document.getElementById('order-summary')
const purchaseHistoryDiv = document.getElementById('purchase-history');

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

        addToPurchaseHistory(ticketType, quantity, finalPrice);
        updatePurchaseHistory();
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

const updatePurchaseHistory = () => {
    const purchaseList = document.getElementById('purchase-list');
    purchaseList.innerHTML = '';

    let listItemHTML = `<h2>Purchase History</h2>`;

    purchaseHistory.forEach((purchase, index) => {
        listItemHTML += `
        <li>
            <p><strong>Purchase ${index + 1}:</strong></p>
            <p>Ticket Type: ${purchase.ticketType}</p>
            <p>Quantity: ${purchase.quantity}</p>
            <p>Total Price: $${purchase.totalPrice.toFixed(2)}</p>
            <p>Date: ${purchase.date}</p>
        </li>
    `;
        purchaseList.innerHTML += listItemHTML;
    });

    purchaseHistoryDiv.scrollTop = purchaseHistoryDiv.scrollHeight;
};


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('pay-button').addEventListener('click', calculateOrder);
    updatePurchaseHistory();
});
