import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Form = () => {
    return (
        <>
            <div className="bg-[#F4E1D6] h-screen flex justify-center items-center">
                <div className="bg-white h-max w-[45rem] p-10">
                    <div className="flex">
                        <BsArrowLeft className="text-green-600 font-extrabold text-4xl" />
                        <div className="bg-purple-800 rounded-full w-10 h-10 ml-5 " />
                        <div className="font-xl font-semibold mt-2 ml-5">Sindhu Biswal</div>
                    </div>
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <form className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none border rounded w-[30rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-[30rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
                                Text
                            </label>
                            <textarea
                                className="appearance-none border rounded w-[30rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="text"
                                rows="4"
                            />
                        </div>
                        <div className="flex justify-between shadow-lg">
                            <p className="text-lg font-bold ">₹899</p>
                            <button
                                className="bg-black hover:bg-slate-800 text-white text-sm font-semibold py-3 px-7 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Confirm and Pay
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
