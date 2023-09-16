import React, { useEffect, useState } from "react";
import { get_history_queries } from "../utils/data";

function HistoryQueries({ setCurrentQuery }) {
  const [queries, setQueires] = useState([{}]);
  useEffect(() => {
    setQueires(get_history_queries());
  }, []);
  return (
    <div className="mx-6 h-full  items-center py-4 flex flex-col gap-4 border-b">
      <div className="font-bold underline">Histor</div>
      <div>
        {queries.map((query) => (
          <button
            className="text-left text-sm"
            onClick={() => {
              setCurrentQuery(query);
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
