import customers from "../assets/customers.csv";
import orders from "../assets/orders.csv";
import customersquery from "../assets/customersquery.csv";
import ordersquery from "../assets/ordersquery.csv";

const get_queries = () => {
    let queries = [
        "SELECT companyName,contactName FROM customers;",
        "SELECT orderID, customerID from orders;"
    ]
    return queries;
}
const get_history_queries = () => {
    let queries = [
        { query: "SELECT companyName,contactName FROM customers;", output: "customersquery" },
        { query: "SELECT orderID, customerID from orders;", output: "ordersquery" }
    ]
    return queries;
}

const get_default_query = () => {
    return "SELECT companyName,contactName FROM customers;";
}

const get_tables = () => {
    return [{ name: "customers", table: customers }, { name: "order", table: orders }]
}
const get_table = (table_name) => {
    console.log(table_name);
    if (table_name == "customersquery") { console.log("REturn"); return { name: "customersquery", table: customersquery }; }
    else
        return { name: "orderquery", table: ordersquery };
}
export { get_queries, get_history_queries, get_default_query, get_tables, get_table };