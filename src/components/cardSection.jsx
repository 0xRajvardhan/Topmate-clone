import React from "react";
import { Card } from "./card";

export const CardSection = () => {
  return (
    <>
      <div className="bg-[#F4E1D6] w-full h-full pb-10">
        <div className="container pt-10 mx-auto px-10 h-max gap-4 flex flex-wrap justify-between xl:px-10 2xl:px-0">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
