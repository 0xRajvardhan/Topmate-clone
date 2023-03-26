import React from "react";
import { Calender } from "./calender";
import { Describe } from "./describe";

const Selection = () => {
  return (
    <>
      <div className=" min-h-screen w-full bg-[#F4E1D6]">
        <div className="max-w-7xl bg-white  min-h-screen mx-auto flex justify-center">
          <div className="border-r border-gray-400 min-h-screen w-[55%]">
            <Describe />
          </div>
          <div className=" min-h-screen w-[45%]">
            <Calender />
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
