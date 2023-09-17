import React, { useContext } from "react";
import Table from "./Table";
import { get_table } from "../utils/data";
import { MyContext } from "../context/context";

function Output() {
  const { output } = useContext(MyContext);
  return (
    <div className="px-4 bg-[#f9fafc] h-72">
      <div className="pt-2 pb-1 text-lg font-bold border-b">Output</div>
      <div className="py-2">
        {output === "" ? (
          <div>Run the query for output</div>
        ) : (
          <div>
            <Table table={output} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Output;
