import React from "react";

export const HeroSection = () => {
  return (
    <>
      <div className="container px-12 mx-auto flex justify-between items-center h-[30rem] ">
        <div className="w-72 h-72 ml-20 bg-purple-800 rounded-full"></div>
        <div className="flex flex-col px-20">
          <h1 className="text-6xl font-semibold text-black">Sindhu Biswal</h1>
          <p className="text-xl font-semibold text-black">Growth Leader @Jupiter, Betterhalf, FilterCopy, PayTm Insider, Dice Media | Mentored 1000+ professionals, students & first time founders</p>
        </div>
      </div>
    </>
  );
};
