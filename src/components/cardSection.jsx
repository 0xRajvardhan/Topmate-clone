import React from "react";
import { Card } from "./card";

export const CardSection = () => {
  return (
    <>
      <div className="bg-[#F4E1D6] w-full h-full">
        <div className="container pt-10 mx-auto px-10 h-[30rem]  flex flex-wrap justify-between">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
