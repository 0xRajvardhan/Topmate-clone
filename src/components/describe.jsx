import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export const Describe = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex w-full justify-start items-center gap-3 p-6 border-b border-gray-300">
          <BsArrowLeft className="text-green-600 font-extrabold text-4xl" />
          <div className="bg-purple-800 rounded-full w-8 h-8  " />
          <div className="font-xl font-semibold">Sindhu Biswal</div>
        </div>
        <div className="bg-[#F6C873] h-24 w-[80%] mx-auto mt-7 flex justify-center items-center text-2xl text-white font-bold">
          <p>Career Mentorship - for students, professionals</p>
        </div>
        <div className="w-[80%] border-b mx-auto border-r border-l flex justify-center">
          <div className="flex justify-start items-center w-full p-2">
            <p>₹300</p>
          </div>
          <div className="flex justify-start items-center w-full p-2 border-l">
            <p>₹300</p>
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-10">
          <p>Have doubts regarding your career?</p>
          <p>Don't know - where to start, how to start? </p>
          <p>
            Confused - should I do performance marketing or social media
            marketing? or want to transition into growth marketing?
          </p>
        </div>
        <div className="w-[80%] mx-auto my-10">
          <p>I have been there, done that.</p>
          <p>Ask me specific questions. Any questions!?</p>
          <br />
          <br />
          <p>Let me help you!</p>
        </div>
        <hr />
        <div className="w-[80%] mx-auto flex justify-between items-center my-10">
          <div className=" flex flex-col justify-start gap-3">
            <h1 className="text-3xl font-bold">Let's connect!</h1>
            <div className="flex justify-start gap-2 ">
              <div className="bg-[#F6C873] px-6  rounded-full ">
                <h1 className="font-bold">4</h1>
                <h1 className="">Love it</h1>
              </div>
              <div className="bg-[#F6C873] px-6  rounded-full ">
                <h1 className="font-bold">4</h1>
                <h1 className="">Love it</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-purple-800 rounded-full w-20 h-20  " />
          </div>
        </div>
        <div className="w-[80%] mx-auto bg-[#DDA134]  mb-10 h-44"></div>
      </div>
    </>
  );
};
