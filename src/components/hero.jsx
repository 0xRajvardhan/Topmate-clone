import React from "react";
import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div className="container px-12 mx-auto flex justify-between items-center h-[30rem] ">
        <div className="w-60 h-60 ml-20 bg-purple-800 rounded-full"></div>
        <div className="flex flex-col px-20 mb-12">
          <h1 className="text-6xl font-semibold text-black pb-7">Sindhu Biswal</h1>
          <p className="text-l font-semibold text-black">Growth Leader @Jupiter, Betterhalf, FilterCopy, PayTm Insider, Dice Media | Mentored 1000+ professionals, students & first time founders</p>
          <div className="flex flex-row mt-10">
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10"><BsLinkedin className=" w-5 h-5 mx-auto mt-2" /></div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10"><BsTwitter className=" w-5 h-5 mx-auto mt-2" /></div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10"><BsYoutube className=" w-5 h-5 mx-auto mt-2" /></div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10"><BsInstagram className=" w-5 h-5 mx-auto mt-2" /></div>
          </div>
        </div>
      </div>
    </>
  );
};
