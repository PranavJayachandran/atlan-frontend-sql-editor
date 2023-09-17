import React from "react";

function Navbar() {
  return (
    <div className="sm:text-base text-sm px-4 sm:px-10 py-2  font-bold text-blue-700 flex items-center justify-between">
      <div className="text-base sm:text-xl">Atlan Front end Task</div>
      <a
        className="text-white bg-[#0047d1] px-2 py-1 rounded-xl transition hover:text-blue-700 hover:bg-white border-blue-700 border"
        href="https://github.com/PranavJayachandran/atlan-frontend-sql-editor"
        target="_blank"
      >
        Github Repo
      </a>
    </div>
  );
}

export default Navbar;
