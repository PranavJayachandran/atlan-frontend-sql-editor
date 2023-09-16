import React from "react";

function Table({ table }) {
  let header = Object.keys(table.table[0]);
  let isoutput = table.name[table.name.length - 1] == "y" ? false : true;
  return (
    <div className=" ">
      <div className="font-bold mb-2">{isoutput ? table.name : ""}</div>
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
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs bg-white">
            {table.table.map((row, index) => (
              <tr key={index}>
                {index < 2 ? (
                  header.map((header, index) => (
                    <td className="p-2 text-center border" key={index}>
                      {row[header]}
                    </td>
                  ))
                ) : (
                  <></>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
