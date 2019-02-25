// importing handling functions
import formattingDate from './dataHandling/formattingDate';
import cardNumberFormatter from './dataHandling/formattingDate';

// Loading jsons
const orders = require('../data/orders.json');
const companies = require('../data/companies.json');
const users = require('../data/users.json');

// Creating base table elements
const ordersTable = document.createElement('table');
const ordersHeader = document.createElement('thead');
const orderTableBody = document.createElement('tbody');

// Creating header row element
const ordersHeaderRow = document.createElement('tr');

// Creating header columns elements
const headerTransactionId = document.createElement('td');
const headerUserInfo = document.createElement('td');
const headerOrderDate = document.createElement('td');
const headerOrderAmount = document.createElement('td');
const headerCardNumber = document.createElement('td');
const headerCardType = document.createElement('td');
const headerLocation = document.createElement('td');

// Setting names to header columns
headerTransactionId.innerText = 'Transaction ID';
headerUserInfo.innerText = 'User Info';
headerOrderDate.innerText = 'Order Date';
headerOrderAmount.innerText = 'Order Amount';
headerCardNumber.innerText = 'Card Number';
headerCardType.innerHTML = 'Card Type';
headerLocation.innerHTML = 'Location';

// Inserting header columns into header row
ordersHeaderRow.appendChild(headerTransactionId);
ordersHeaderRow.appendChild(headerUserInfo);
ordersHeaderRow.appendChild(headerOrderDate);
ordersHeaderRow.appendChild(headerOrderAmount);
ordersHeaderRow.appendChild(headerCardNumber);
ordersHeaderRow.appendChild(headerCardType);
ordersHeaderRow.appendChild(headerLocation);

// Inserting header row to <thead> tag
ordersHeader.appendChild(ordersHeaderRow);

// Inseting <thead> to table
ordersTable.appendChild(ordersHeader);

function getUserInfo(userId) {
    const link = document.createElement('a');
    let userName;
    let userSex;

    link.setAttribute('href', '#');

    users.forEach((user) => {
        if (user.id === userId) {
            userName = `${user.first_name} ${user.last_name}`;
            userSex = user.gender;
        }
    })

    link.innerText = userSex === 'Male' ? `Mr. ${userName}` : `Ms. ${userName}`;
    
    return link;
}

// Creating orders rows
orders.forEach((order) => {
    // Creating row element
    const orderRow = document.createElement('tr');

    // Adding special id to each order
    orderRow.setAttribute('id', `order_${order.id}`);

    // Creating order columns elements
    const transactionId = document.createElement('td');
    const userInfo = document.createElement('td');
    const orderDate = document.createElement('td');
    const orderAmount = document.createElement('td');
    const cardNumber = document.createElement('td');
    const cardType = document.createElement('td');
    const location = document.createElement('td');

    // Setting info to order columns
    transactionId.innerText = order.transaction_id;
    userInfo.appendChild(getUserInfo(order.user_id));
    orderDate.innerText = formattingDate(Number(order.created_at));
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

// Inserting table body into table
ordersTable.appendChild(orderTableBody);

export default (function () {
    // Inserting table into element with 'app' id
    document.getElementById('app').appendChild(ordersTable);
}());
