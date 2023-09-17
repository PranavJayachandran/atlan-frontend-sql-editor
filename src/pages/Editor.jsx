import React, { useContext, useEffect, useState } from "react";
import Queries from "../components/Queries";
import HistoryQueries from "../components/HistoryQueries";
import Edit from "../components/Edit";
import Output from "../components/Output";
import Tables from "../components/Tables";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/context";

const Editor = () => {
  const { dark } = useContext(MyContext);
  return (
    <div
      className={`font-Nunito ${
        dark === true ? "text-white bg-[#1f2023]" : ""
      }`}
    >
      <Navbar />
      <div className="border border-stone-500 sm:flex-row flex-col flex h-full w-full">
        <div className=" border-r border-stone-500 flex flex-col justify-center sm:w-1/6">
          <Queries />
          <HistoryQueries />
        </div>
        <div className="h-full sm:flex-row flex-col flex sm:w-5/6">
          <div className="flex h-full flex-col gap-10 sm:w-3/5 border-r border-stone-500">
            <Edit />
            <Output />
          </div>
          <div className="sm:w-2/5 ">
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
