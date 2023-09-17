import customers from "../assets/customers.csv";
import orders from "../assets/orders.csv";
import customersquery from "../assets/customersquery.csv";
import ordersquery from "../assets/ordersquery.csv";
import table1 from "../assets/table1.csv";

const get_queries = () => {
  let queries = [
    "SELECT companyName,contactName FROM customers;",
    "SELECT orderID, customerID from orders;",
  ];
  return queries;
};
const get_history_queries = () => {
  let queries = [
    {
      query: "SELECT companyName,contactName FROM customers;",
      output: "customersquery",
    },
    { query: "SELECT orderID, customerID from orders;", output: "ordersquery" },
  ];
  return queries;
};

const get_default_query = () => {
  return "SELECT companyName,contactName FROM customers;";
};

const get_table_names = () => {
  return ["customers", "order"];
};
const get_full_table = (table_name, start, end) => {
  return [
    { name: "customers", table: table1.slice(0, 100) },
    { name: "order", table: orders.slice(0, 100) },
  ];
};
const get_size = (table_name) => {
  if (table_name == "customersquery") {
    return customersquery.length;
  } else if (table_name == "ordersquery") return ordersquery.length;
  else if (table_name == "customers") {
    return customers.length;
  } else if (table_name == "order") return orders.length;
};
const get_table = (table_name, start, stop) => {
  console.log(start, stop);
  if (table_name == "customersquery") {
    return { name: "customersquery", table: customersquery.slice(start, stop) };
  } else if (table_name == "ordersquery")
    return { name: "ordersquery", table: ordersquery.slice(start, stop) };
  else if (table_name == "customers") {
    return { name: "cutomers", table: customers.slice(start, stop) };
  } else if (table_name == "order")
    return { name: "order", table: orders.slice(start, stop) };
};

export {
  get_queries,
  get_history_queries,
  get_default_query,
  get_table,
  get_table_names,
  get_size,
};
