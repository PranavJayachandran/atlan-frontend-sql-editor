import React from "react";

function Navbar() {
  return (
    <div className="px-10 py-2  font-bold text-blue-700 flex justify-between">
      <div className="text-xl">Atlan Front end Task</div>
      <button className="text-white bg-[#0047d1] px-2 py-1 rounded-xl transition hover:text-blue-700 hover:bg-white border-blue-700 border">
        Github Repo
      </button>
    </div>
  );
}

export default Navbar;
