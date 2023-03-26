import React from "react";
export const About = () => {
  return (
    <>
      <div className="container pt-10 px-12 mb-12 mx-auto flex justify-center items-start h-max">
        <div className="h-full  w-[47%] pt-12 flex flex-col">
          <p className="text-3xl font-bold  pb-14">About me</p>
          <div className="bg-red-400 w-60 h-60  pt-0" />
        </div>
        <div className="flex flex-col w-full mb-12 gap-10 text-lg  text-black ">
          <p className="">
            I am Sindhu! I have scaled various consumer internet startups such
            as Betterhalf, PayTm Insider, FilterCopy, Dice Media, Gobble ,
            Nutshell, Imumz.{" "}
          </p>
          <p className="">What have I done? 🔥 </p>
          <p className="">
            👉 Scaled Betterhalf app - Y combinator, Kunal Shah backed startup.
          </p>
          <p className="">
            👉 Scaled FilterCopy, Dice Media monthly views from 300 million to
            500 million.
          </p>
          <p className="">
            👉 Promoted large-scale projects - Indian Super League, Pro Kabaddi
            League, Martin Garrix music festival, Arijit Singh Copncert, IPL,
            and 20 more events.
          </p>
          <p className="">
            👉 I am a mentor at Growth School and have taught more than 500
            working professionals and college students.
          </p>
          <p className="">
            👉 Have mentored 25 first-time founders and leaders on startup
            scaling, app growth, social media strategy.
          </p>
          <p className="">
            👉 Linked In's Global Vice President named me as Top Creator.
          </p>
        </div>
      </div>
    </>
  );
};
