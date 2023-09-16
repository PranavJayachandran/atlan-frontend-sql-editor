import React, { useContext, useEffect, useState } from "react";
import { get_queries } from "../utils/data";
import { MyContext } from "../context/context";

const Queries = () => {
  let queries = get_queries();
  const { setCurrentQuery, setOutput } = useContext(MyContext);
  return (
    <div className="mx-6  h-full  items-center py-4 flex flex-col gap-4 border-b">
      <div className="font-bold underline">Queries</div>
      <div className="flex flex-col gap-2">
        {queries.map((query, index) => (
          <button
            className="bg-stone-100 px-2 rounded-xl text-xs py-2 text-[#0047d1] text-left text-sm"
            onClick={() => {
              setCurrentQuery(query);
              setOutput("");
            }}
            key={index}
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Queries;
