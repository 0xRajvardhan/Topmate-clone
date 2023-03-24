import React from "react";

export const About = () => {
    return (
        <>
            <div className="container px-12 mb-12 mx-auto flex justify-between items-center h-max">
                <div className="h-full mr-14 flex flex-col">
                    <p className="text-4xl font-bold mx-auto pb-14">About me</p>
                    <div className="bg-red-400 w-60 h-60 ml-20 pt-0" />
                </div>
                <div className="flex flex-col px-20 mb-12 text-xl font text-black mt-12">
                    <p className="mt-11">I am Sindhu! I have scaled various consumer internet startups such as Betterhalf, PayTm Insider, FilterCopy, Dice Media, Gobble , Nutshell, Imumz. </p>
                    <p className="mt-11">What have I done? 🔥 </p>
                    <p className="mt-11">👉 Scaled Betterhalf app - Y combinator, Kunal Shah backed startup.</p>
                    <p className="mt-11">👉 Scaled FilterCopy, Dice Media monthly views from 300 million to 500 million.</p>
                    <p className="mt-11">👉 Promoted large-scale projects - Indian Super League, Pro Kabaddi League, Martin Garrix music festival, Arijit Singh Copncert, IPL, and 20 more events.</p>
                    <p className="mt-11">👉 I am a mentor at Growth School and have taught more than 500 working professionals and college students.</p>
                    <p className="mt-11">👉 Have mentored 25 first-time founders and leaders on startup scaling, app growth, social media strategy.</p>
                    <p className="mt-11">👉 Linked In's Global Vice President named me as Top Creator.</p>
                </div>
            </div>
        </>
    );
};
