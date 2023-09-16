import React, { useEffect, useState } from "react";
import { get_history_queries } from "../utils/data";

function HistoryQueries({ setCurrentQuery, historyQueries, setOutput }) {
  return (
    <div className="mx-2 scrollhide h-full overflow-y-scroll items-center py-4 flex flex-col gap-4 border-b">
      <div className="font-bold underline">History</div>
      <div className="flex flex-col gap-2">
        {historyQueries.map((query) => (
          <button
            className="text-left bg-stone-100 px-2 rounded-xl text-xs py-2 text-[#0047d1]"
            onClick={() => {
              setCurrentQuery(query.query);
              setOutput(query.output);
            }}
          >
            {query.query}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HistoryQueries;
