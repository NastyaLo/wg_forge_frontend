// this is an example of improting data from JSON
// import 'orders' from '../data/orders.json';

const orders = require('../data/orders.json');
const companies = require('../data/companies.json');
const users = require('../data/users.json');

const ordersTable = document.createElement('table');
const orderTableBody = document.createElement('tbody');

const ordersHeader = document.createElement('thead');
const ordersHeaderRow = document.createElement('tr');

const headerTransactionId = document.createElement('td');
const headerUserInfo = document.createElement('td');
const headerOrderDate = document.createElement('td');
const headerOrderAmount = document.createElement('td');
const headerCardNumber = document.createElement('td');
const headerCardType = document.createElement('td');
const headerLocation = document.createElement('td');

headerTransactionId.innerText = 'Transaction ID';
headerUserInfo.innerText = 'User Info';
headerOrderDate.innerText = 'Order Date';
headerOrderAmount.innerText = 'Order Amount';
headerCardNumber.innerText = 'Card Number';
headerCardType.innerHTML = 'Card Type';
headerLocation.innerHTML = 'Location';

ordersHeaderRow.appendChild(headerTransactionId);
ordersHeaderRow.appendChild(headerUserInfo);
ordersHeaderRow.appendChild(headerOrderDate);
ordersHeaderRow.appendChild(headerOrderAmount);
ordersHeaderRow.appendChild(headerCardNumber);
ordersHeaderRow.appendChild(headerCardType);
ordersHeaderRow.appendChild(headerLocation);

ordersHeader.appendChild(ordersHeaderRow);
ordersTable.appendChild(ordersHeader);

orders.forEach((order) => {
    const orderRow = document.createElement('tr');
    orderRow.setAttribute('id', `order_${order.id}`);

    const transactionId = document.createElement('td');
    const userInfo = document.createElement('td');
    const orderDate = document.createElement('td');
    const orderAmount = document.createElement('td');
    const cardNumber = document.createElement('td');
    const cardType = document.createElement('td');
    const location = document.createElement('td');

    transactionId.innerText = order.transaction_id;
    userInfo.innerText = order.user_id;
    orderDate.innerText = order.created_at;
    orderAmount.innerText = order.total;
    cardNumber.innerText = order.card_number;
    cardType.innerHTML = order.card_type;
    location.innerHTML = order.order_country + order.order_ip;

    orderRow.appendChild(transactionId);
    orderRow.appendChild(userInfo);
    orderRow.appendChild(orderDate);
    orderRow.appendChild(orderAmount);
    orderRow.appendChild(cardNumber);
    orderRow.appendChild(cardType);
    orderRow.appendChild(location);

    orderTableBody.appendChild(orderRow);
});

ordersTable.appendChild(orderTableBody);

export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only
    document.getElementById("app").appendChild(ordersTable);
}());
