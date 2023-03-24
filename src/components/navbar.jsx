import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-14 border ">
        <div className="container px-10 h-full flex justify-between items-center  mx-auto">
          <h1 className="text-xl font-semibold text-black">Sindhu Biswal</h1>
          <button className="border text-sm font-semibold border-black py-2 px-3 rounded hover:shadow-black hover:ease-out ">
            ✨ Claim your link
          </button>
        </div>
      </div>
    </>
  );
};
