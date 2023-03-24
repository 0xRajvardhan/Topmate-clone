import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-slate-100 text-gray-400 py-14">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">

          <form className="mx-auto">
            <p className="pb-5 ml-5 text-xl font-bold text-black">Start your contact page</p>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-slate-300 rounded-2xl px-14 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400"
              placeholder="topmate.io/ yourname"
            />

          </form>
        </div>
      </footer>
    </>
  );
};
