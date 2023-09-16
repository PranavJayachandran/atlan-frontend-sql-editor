import React from "react";
import Table from "./Table";
import { get_table } from "../utils/data";

function Output({ output }) {
  return (
    <div className="px-4 bg-[#f9fafc] h-72">
      <div className="pt-2 pb-1 text-lg font-bold border-b">Output</div>
      <div className="py-2">
        {output === "" ? (
          <div>Run the query for output</div>
        ) : (
          <div>
            <Table table={get_table(output)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Output;
