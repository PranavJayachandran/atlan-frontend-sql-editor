import React, { useEffect, useState } from "react";
import Queries from "../components/Queries";
import HistoryQueries from "../components/HistoryQueries";
import Edit from "../components/Edit";
import { get_default_query } from "../utils/data";
import Output from "../components/Output";

const Editor = () => {
  const [currentQuery, setCurrentQuery] = useState({});
  useEffect(() => {
    setCurrentQuery({
      query: get_default_query(),
      output: "",
    });
  }, []);
  return (
    <div className="">
      <div>This is nav</div>
      <div className="border flex h-full w-full">
        <div className="flex flex-col justify-center0 w-1/6">
          <Queries
            currentQuery={currentQuery}
            setCurrentQuery={setCurrentQuery}
          />
          <HistoryQueries setCurrentQuery={setCurrentQuery} />
        </div>
        <div className="h-full flex w-5/6">
          <div className="flex h-full flex-col gap-10 w-3/5">
            <Edit
              currentQuery={currentQuery}
              setCurrentQuery={setCurrentQuery}
            />
            <Output currentQuery={currentQuery} />
          </div>
          <div className="">Tables</div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
