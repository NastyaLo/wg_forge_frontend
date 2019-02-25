// this is an example of improting data from JSON
// import 'orders' from '../data/orders.json';

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

// Format time from ms to DD/MM/YYYY hh:mm:ss
function formattingDate(ms) {
    const date = new Date(ms);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day > 9 ? day : `0${day}` }/${month > 9 ? month : `0${month}`}/${year} ${hour > 9 ? hour : `0${hour}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
}

function cardNumberFormatter(cardNumber) {
    const starsAmount = cardNumber.length - 6;

    let resultStr = cardNumber.slice(0, 2);
    for (let i = 0; i < starsAmount; i++) resultStr += '*'
    resultStr += cardNumber.slice(cardNumber.length - 4);

    return resultStr;
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
    userInfo.innerText = order.user_id;
    orderDate.innerText = formattingDate(Number(order.created_at));
    orderAmount.innerText = order.total;
    cardNumber.innerText = cardNumberFormatter(String(order.card_number));
    cardType.innerHTML = order.card_type;
    location.innerHTML = order.order_country + order.order_ip;

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
