import React from "react";

export const HeroSection = () => {
  return (
    <>
      <div className="container px-12 mx-auto flex justify-between items-center h-[30rem] ">
        <div className="w-60 h-60 ml-20 bg-purple-800 rounded-full"></div>
        <div className="flex flex-col px-20 mb-12">
          <h1 className="text-6xl font-semibold text-black pb-7">Sindhu Biswal</h1>
          <p className="text-l font-semibold text-black">Growth Leader @Jupiter, Betterhalf, FilterCopy, PayTm Insider, Dice Media | Mentored 1000+ professionals, students & first time founders</p>
        </div>
      </div>
    </>
  );
};
