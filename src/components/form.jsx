import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { RxPencil1 } from "react-icons/rx";

const Form = () => {
    return (
        <>
            <div className="bg-[#fbdebe] h-screen flex justify-center items-center">
                <div className="bg-white h-max w-[30rem] p-10 rounded-xl">
                    <div className="flex">
                        <BsArrowLeft className="text-green-600 font-extrabold text-4xl" />
                        <div className="bg-purple-800 rounded-full w-10 h-10 ml-5 " />
                        <div className="font-xl font-semibold mt-2 ml-5">Sindhu Biswal</div>
                    </div>

                    <hr class="h-px my-4 bg-gray-200 dark:bg-gray-700"></hr>

                    <div className="flex mb-7">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold">Career Mentorship - For Students, Professionals</h1>
                            <p className="text-slate-400 text-sm font-semibold">Video Meeting . 30mins</p>
                        </div>
                        <div className="mt-4">
                            <div className="bg-slate-200 rounded-full h-9 w-14">
                                <p className="font-bold pt-1 pl-2">₹899</p>
                            </div>
                        </div>
                    </div>

                    <div className="appearance-none border border-green-700 rounded-lg w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex justify-between bg-green-100">
                        <p className="font-bold text-green-800 text-sm flex"><MdDateRange className="mr-2 text-lg"/>Mon, 27 Mar | 8:30 - 9:00PM (GMT +05:30)</p>
                        <RxPencil1 className="text-green-800" />
                    </div>

                    <form className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-normal mb-2" htmlFor="name">
                                Your name
                            </label>
                            <input
                                className="appearance-none border border-slate-700 rounded-lg w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-normal mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border border-slate-700 rounded-lg w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-normal mb-2" htmlFor="text">
                                Phone number
                            </label>
                            <input
                                className="appearance-none border border-slate-700 rounded-lg w-[25rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="text"
                                placeholder="Enter phone number"
                                required
                            />

                        </div>
                    </form>
                    <hr class="h-px my-8 bg-gray-200 dark:bg-gray-700 w-full drop-shadow-xl"></hr>

                    <div className="flex justify-between">
                        <p className="text-lg font-bold mt-2">₹899</p>
                        <button
                            className="bg-black hover:bg-slate-800 text-white text-sm font-semibold py-3 px-7 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Confirm and Pay
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
