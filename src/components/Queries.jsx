import React, { useEffect, useState } from "react";
import { get_queries } from "../utils/data";

const Queries = ({ currentQuery, setCurrentQuery, setOutput }) => {
  const [queries, setQueires] = useState([]);
  useEffect(() => {
    setQueires(get_queries());
  }, []);
  return (
    <div className="mx-6  h-full  items-center py-4 flex flex-col gap-4 border-b">
      <div className="font-bold underline">Queries</div>
      <div className="flex flex-col gap-2">
        {queries.map((query) => (
          <button
            className="bg-stone-100 px-2 rounded-xl text-xs py-2 text-[#0047d1] text-left text-sm"
            onClick={() => {
              setCurrentQuery(query);
              setOutput("");
            }}
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Queries;
