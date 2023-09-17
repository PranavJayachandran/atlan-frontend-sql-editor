import React, { useEffect, useState } from "react";
import { get_size, get_table } from "../utils/data";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Table({ table }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [data, setData] = useState(get_table(table, start, end));

  let header = Object.keys(data.table[0]);
  let isoutput = data.name[data.name.length - 1] == "y" ? false : true;

  const left = () => {
    if (start > 0) {
      setStart(start - 10);
      setEnd(end - 10);
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
  }, [start, end]);
  return (
    <div className=" ">
      <div className="font-bold mb-2 flex justify-between">
        <div>{isoutput ? table : ""}</div>
        <div className="flex gap-4">
          <button onClick={left}>
            <AiFillCaretLeft />
          </button>
          <div>
            {start}:{end}
          </div>
          <button onClick={right}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
      <div
        className={`flex ${
          isoutput ? "" : "justify-center"
        } overflow-scroll h-60`}
      >
        <table className="rounded-md bg-blue-100 ">
          <thead className="text-sm">
            <tr className="rounded-xl">
              {header.map((header, index) => (
                <th className="p-2 border-r" key={index}>
                  {header.substr(0, 10)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs bg-white">
            {data.table.map((row, index) => (
              <tr key={index}>
                {header.map((header, index) => (
                  <td className="p-2 text-center border" key={index}>
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
