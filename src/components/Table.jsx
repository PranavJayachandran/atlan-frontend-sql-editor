import React, { useContext, useEffect, useState } from "react";
import { get_size, get_table } from "../utils/data";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { MyContext } from "../context/context";

function Table({ table }) {
  const { dark, output } = useContext(MyContext);
  const [speed, setSpeed] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [data, setData] = useState(get_table(table, start, end));
  let header = Object.keys(data.table[0]);
  let isoutput = data.name[data.name.length - 1] == "y" ? false : true;

  const left = () => {
    let table_size = get_size(table);
    if (start > 0) {
      if (end == table_size && start != end - 10) setStart(end - 10);
      else {
        if (start - 10 < 0) {
          setStart(0);
          setEnd(10);
        } else {
          setStart(start - 10);
          setEnd(end - 10);
        }
      }
    }
  };
  const right = () => {
    let table_size = get_size(table);
    if (end + 10 < table_size) {
      setStart(start + 10);
      setEnd(end + 10);
    } else if (end + 10 > table_size && end != table_size) {
      setStart(start + 10);
      setEnd(table_size);
    }
  };
  useEffect(() => {
    setData(get_table(table, start, end));
  }, [start, end, output]);
  useEffect(() => {
    setStart(0);
    setEnd(10);
    if (table[table.length - 1] == "y") {
      setSpeed(get_size(table) + " rows in (0.03sec)");
    }
  }, [table]);
  return (
    <div className="">
      <div className="font-bold mb-2 flex justify-between">
        <div>
          {isoutput ? (
            table
          ) : (
            <div className={`${dark === true ? "text-stone-300" : ""} text-xs`}>
              {speed}
            </div>
          )}
        </div>
        <div className="flex gap-4">
          <button onClick={left} aria-label="right">
            <AiFillCaretLeft />
          </button>
          <div>
            {start}:{end}
          </div>
          <button onClick={right} aria-label="left">
            <AiFillCaretRight />
          </button>
        </div>
      </div>

      <div
        className={`flex h-[200px] overflow-auto  ${
          isoutput ? "" : "justify-center"
        }`}
      >
        <table
          className={`rounded-md  ${
            dark === true ? "bg-stone-800" : "bg-blue-100"
          } `}
        >
          <thead className="text-sm ">
            <tr className="rounded-xl">
              {header.map((element, index) => (
                <th className="p-2 border-r border-stone-500" key={index}>
                  {element.substr(0, 10)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={`text-xs ${dark === true ? "bg-[#1f2023]" : "bg-white"}`}
          >
            {data.table.map((row, index) => (
              <tr key={index}>
                {header.map((header, index) => (
                  <td
                    className="p-2 text-center border border-stone-500"
                    key={index}
                  >
                    {row[header].substr(0, 15)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
