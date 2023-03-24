import React from "react";

export const Card = () => {
  return (
    <>
      <div className="bg-white w-[34rem] h-48 rounded-lg p-3 flex justify-between flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10" />
            <div className="flex flex-col">
              <h1 className="text-base font-bold text-black">
                Career Mentorship - for students, professionals
              </h1>
              <p className="text-sm text-black">Video Meeting | 30min </p>
            </div>
          </div>
          <button className="border border-black p-2.5 rounded-full hover:bg-black hover:text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </button>
        </div>
        <div className="border-t h-10 flex justify-end items-center ">
          <p className="text-black text-base bg-gray-200 mt-2 py-1 rounded-full px-3 w-max">
            ₹300
          </p>
        </div>
      </div>
    </>
  );
};
