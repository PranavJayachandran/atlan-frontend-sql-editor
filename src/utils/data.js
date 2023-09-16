const get_data = () => {
    ;
}
const get_queries = () => {
    let queries = [
        "SELECT * FROM ABC",
        "SELECT id, name from customers"
    ]
    return queries;
}
const get_history_queries = () => {
    let queries = [
        { query: "SELECT * FROM abc;", output: "table1" },
        { query: "SELECT id, name from customers;", output: "table2" }
    ]
    return queries;
}

const get_default_query = () => {
    return "SELECT * from abc;";
}
const get_default_table = () => {
    return "Table 1"
}

export { get_data, get_queries, get_history_queries, get_default_query, get_default_table };