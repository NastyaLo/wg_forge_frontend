// importing table creating functions
import createTableHeader from './createTableHeader';
import createTableBody from './createTableBody';

function createTable() {
    // Creating base table elements
    const ordersTable = document.createElement('table');
    const ordersHeader = document.createElement('thead');

    // Inserting header row to <thead> tag
    ordersHeader.appendChild(createTableHeader());

    // Inseting <thead> to table
    ordersTable.appendChild(ordersHeader);

    // Inserting table body into table
    ordersTable.appendChild(createTableBody());

    return ordersTable;
}

export default createTable;