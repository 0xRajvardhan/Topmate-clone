import React from "react";
import { Calender } from "./calender";
import { Describe } from "./describe";

const Selection = () => {
  return (
    <>
      <div className=" min-h-screen w-full bg-[#fef8ed]">
        <div className="max-w-[74rem] bg-white  min-h-screen mx-auto flex justify-center">
          <div className="border-r border-gray-400 min-h-screen w-[60%]">
            <Describe />
          </div>
          <div className=" min-h-screen w-[40%]">
            <Calender />
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
