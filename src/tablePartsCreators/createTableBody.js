// importing handling functions
import cardNumberFormatter from '../dataHandling/cardNumberFormatter';
import getUserInfo from '../dataHandling/getUserInfo';

// Loading jsons
const orders = require('../../data/orders.json');

//
const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};

// Creating orders rows
function createTableBody() {
    const orderTableBody = document.createElement('tbody');

    orders.forEach((order) => {
        // Creating row element
        const orderRow = document.createElement('tr');
    
        // Adding special id to each order
        orderRow.setAttribute('id', `order_${order.id}`);
    
        // Creating order columns elements
        const transactionId = document.createElement('td');
        const userInfo = getUserInfo(order.user_id);
        const orderDate = document.createElement('td');
        const orderAmount = document.createElement('td');
        const cardNumber = document.createElement('td');
        const cardType = document.createElement('td');
        const location = document.createElement('td');
    
        // Setting info to order columns
        transactionId.innerText = order.transaction_id;
        orderDate.innerText = (new Date(Number(order.created_at))).toLocaleString('en', dateOptions);
        orderAmount.innerText = `$${order.total}`;
        cardNumber.innerText = cardNumberFormatter(String(order.card_number));
        cardType.innerText = order.card_type;
        location.innerText = `${order.order_country} (${order.order_ip})`;
    
        // Inserting order columns into order row
        orderRow.appendChild(transactionId);
        orderRow.appendChild(userInfo);
        orderRow.appendChild(orderDate);
        orderRow.appendChild(orderAmount);
        orderRow.appendChild(cardNumber);
        orderRow.appendChild(cardType);
        orderRow.appendChild(location);
    
        // Inserting order row into table body
        orderTableBody.appendChild(orderRow);
    });

    return orderTableBody;
}

export default createTableBody;
