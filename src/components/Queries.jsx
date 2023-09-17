import React, { useContext, useEffect, useState } from "react";
import { get_queries } from "../utils/data";
import { MyContext } from "../context/context";

const Queries = () => {
  let queries = get_queries();
  const { setCurrentQuery, setOutput, dark } = useContext(MyContext);
  return (
    <div className="mx-6 sm:-mt-10  items-center py-4 flex flex-col gap-4 border-b border-stone-500">
      <div className="font-bold underline">Queries</div>
      <div className="flex flex-col gap-2">
        {queries.map((query, index) => (
          <button
            className={`${
              dark === true
                ? "bg-stone-800 text-[#01c3d1]"
                : "bg-stone-100 text-[#0047d1]"
            } px-2 rounded-xl text-xs py-2  text-left text-sm`}
            onClick={() => {
              setCurrentQuery(query);
              setOutput("");
            }}
            aria-label="query"
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
