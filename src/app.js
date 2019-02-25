import createTable from './tablePartsCreators/createTable';

const ordersTable = createTable()

export default (function () {
    // Inserting table into element with 'app' id
    document.getElementById('app').appendChild(ordersTable);
}());
