import React, { useContext, useState } from "react";
import Table from "./Table";
import { MyContext } from "../context/context";

function Output() {
  const { output, dark } = useContext(MyContext);
  return (
    <div
      className={` ${
        dark === true ? "bg-[#1f2023]" : " bg-[#f9fafc]"
      } px-4 h-[330px] sm:h-[300px] border border-stone-500`}
    >
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
