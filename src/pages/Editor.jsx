import React, { useEffect, useState } from "react";
import Queries from "../components/Queries";
import HistoryQueries from "../components/HistoryQueries";
import Edit from "../components/Edit";
import Output from "../components/Output";
import Tables from "../components/Tables";

const Editor = () => {
  return (
    <div className="font-Nunito">
      <div>This is nav</div>
      <div className="border flex h-full w-full">
        <div className="flex flex-col justify-center0 w-1/6">
          <Queries />
          <HistoryQueries />
        </div>
        <div className="h-full flex w-5/6">
          <div className="flex h-full flex-col gap-10 w-3/5">
            <Edit />
            <Output />
          </div>
          <div className="w-2/5 ">
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
