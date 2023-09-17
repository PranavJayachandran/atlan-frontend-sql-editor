import React, { useContext } from "react";
import { MyContext } from "../context/context";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";

function Edit() {
  const {
    currentQuery,
    setCurrentQuery,
    setHistoryQueries,
    setOutput,
    dark,
    setDark,
  } = useContext(MyContext);
  const runquery = () => {
    if (currentQuery === "SELECT companyName,contactName FROM customers;") {
      let update_query = {
        query: currentQuery,
        output: "customersquery",
      };
      setOutput("customersquery");
      setHistoryQueries((prev) => [update_query, ...prev]);
    } else if (currentQuery === "SELECT orderID, customerID from orders;") {
      let update_query = {
        query: currentQuery,
        output: "ordersquery",
      };
      setOutput("ordersquery");
      setHistoryQueries((prev) => [update_query, ...prev]);
    } else {
      alert("Choose a valid command from the queries seciton");
    }
  };
  return (
    <div className="h-48">
      <div className="flex">
        <div className="w-2/12 bg-stone-100">
          <h2
            className={`text-lg ${
              dark === true ? "bg-[#1f2023]" : ""
            } text-center font-bold px-4 py-1 border-r border-stone-500`}
          >
            Input
          </h2>
        </div>
        <div className="w-10/12 flex gap-4  justify-end items-center border-stone-500 border-b">
          <button
            className={`border border-stone-500 ${
              dark ? "text-white" : ""
            } border-stone-300 py-1 px-2`}
            onClick={() => setDark(!dark)}
          >
            {dark === false ? <BsMoon /> : <BsFillMoonFill />}
          </button>
          <button
            className="py-1 text-sm bg-[#0047d1] rounded-xl text-white px-4 transition border border-[#0047d1] hover:bg-white hover:text-[#0047d1]"
            onClick={runquery}
          >
            Run SQL
          </button>
        </div>
      </div>
      <div className="h-full ">
        <textarea
          label="editor"
          className="w-full py-2 h-full bg-stone-100 px-4"
          value={currentQuery}
          onChange={(e) => {
            setCurrentQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Edit;
