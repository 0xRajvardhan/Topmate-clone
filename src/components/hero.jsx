import React from "react";
import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div className="container px-12 ml-[7rem] mx-auto flex justify-between gap-10 items-center h-[30rem] ">
        <div className="w-72 h-72  bg-purple-800 rounded-full"></div>
        <div className="flex flex-col w-9/12  mb-12">
          <h1 className="text-5xl font-bold text-black pb-7">Sindhu Biswal</h1>
          <p className="text-base  text-black w-4/5 ">
            Growth Leader @Jupiter, Betterhalf, FilterCopy, PayTm Insider, Dice
            Media | Mentored 1000+ professionals, students & first time founders
          </p>
          <div className="flex flex-row mt-10">
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <BsLinkedin className=" w-5 h-5 mx-auto mt-2" />
            </div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <BsTwitter className=" w-5 h-5 mx-auto mt-2" />
            </div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <BsYoutube className=" w-5 h-5 mx-auto mt-2" />
            </div>
            <div className="bg-slate-200 rounded-full mx-1 h-10 w-10">
              <BsInstagram className=" w-5 h-5 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
