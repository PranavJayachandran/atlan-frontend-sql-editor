import React from "react";

function Edit({ currentQuery, setCurrentQuery }) {
  return (
    <div className="h-60 ">
      <div className="flex">
        <div className="w-2/12 bg-stone-100">
          <h2 className="  text-lg font-bold px-4 py-1 border-r">Input</h2>
        </div>
        <div className="w-10/12 flex justify-end items-center border-b">
          <button className="py-1 text-sm bg-[#0047d1] rounded-xl text-white px-4 transition border border-[#0047d1] hover:bg-white hover:text-[#0047d1]">
            Run SQL
          </button>
        </div>
      </div>
      <div className="h-full ">
        <textarea
          className="w-full py-2 h-full bg-stone-100 px-4"
          value={currentQuery.query}
          onChange={(e) => {
            setCurrentQuery((prev) => ({
              query: e.target.value,
              ...prev.output,
            }));
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default Edit;
