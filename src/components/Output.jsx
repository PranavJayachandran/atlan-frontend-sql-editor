import React from "react";

function Output({ currentQuery }) {
  return (
    <div className="px-4 bg-[#f9fafc] h-72">
      <div className="pt-2 pb-1 text-lg font-bold border-b">Output</div>
      <div className="py-2">
        {currentQuery.output === "" ? (
          <div>Run the query for output</div>
        ) : (
          <div>{currentQuery.output}</div>
        )}
      </div>
    </div>
  );
}

export default Output;
