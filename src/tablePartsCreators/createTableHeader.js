function createTableHeader() {
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

    return ordersHeaderRow;
}

export default createTableHeader;
