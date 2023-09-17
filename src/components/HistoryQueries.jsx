import React, { useContext, useEffect, useState } from "react";
import { get_history_queries } from "../utils/data";
import { MyContext } from "../context/context";

function HistoryQueries() {
  const { setCurrentQuery, historyQueries, setOutput, dark, output } =
    useContext(MyContext);
  useEffect(() => {
    console.log("HERE", output);
  }, [output]);
  return (
    <div className="mx-2  scrollhide h-80 overflow-scroll items-center py-4 flex flex-col gap-4 ">
      <div className="font-bold underline">History</div>
      <div className="flex flex-col gap-2">
        {historyQueries.map((query, index) => (
          <button
            className={`${
              dark === true
                ? "bg-stone-800 text-[#01c3d1]"
                : "bg-stone-100 text-[#0047d1]"
            } px-2 rounded-xl text-xs py-2  text-left text-sm`}
            onClick={() => {
              setCurrentQuery(query.query);
              setOutput(query.output);
            }}
            key={index}
          >
            {query.query}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HistoryQueries;
