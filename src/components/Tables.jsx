import React, { useEffect, useState } from "react";
import { get_tables } from "../utils/data";
import Table from "./Table";

function Tables() {
  const [tables, setTables] = useState(get_tables());
  useEffect(() => {
    console.log("TAble re");
  });
  return (
    <div className="">
      <div className="border-b px-4 ">
        <h2 className="text-lg font-bold py-1 ">Available Tables</h2>
      </div>
      <div className="px-4 pt-4 flex flex-col gap-4">
        {tables.map((table, index) => (
          <Table table={table} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Tables;
