import React, { useEffect, useState } from "react";
import Queries from "../components/Queries";
import HistoryQueries from "../components/HistoryQueries";
import Edit from "../components/Edit";
import { get_default_query } from "../utils/data";
import Output from "../components/Output";
import Tables from "../components/Tables";

const Editor = () => {
  const [currentQuery, setCurrentQuery] = useState("");
  const [output, setOutput] = useState("");
  const [historyQueries, setHistoryQueries] = useState([]);
  useEffect(() => {
    setCurrentQuery(get_default_query());
  }, []);
  return (
    <div className="">
      <div>This is nav</div>
      <div className="border flex h-full w-full">
        <div className="flex flex-col justify-center0 w-1/6">
          <Queries
            currentQuery={currentQuery}
            setCurrentQuery={setCurrentQuery}
            setOutput={setOutput}
          />
          <HistoryQueries
            setCurrentQuery={setCurrentQuery}
            historyQueries={historyQueries}
            setOutput={setOutput}
          />
        </div>
        <div className="h-full flex w-5/6">
          <div className="flex h-full flex-col gap-10 w-3/5">
            <Edit
              currentQuery={currentQuery}
              setCurrentQuery={setCurrentQuery}
              setHistoryQueries={setHistoryQueries}
              setOutput={setOutput}
            />
            <Output output={output} />
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
