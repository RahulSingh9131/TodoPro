"use client";

import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-300 t0-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
        <div className="flex font-bold w-44 md:w-56 pb-10 md:pb-0 ml-1 md:ml-3">
          <h1 className="text-2xl md:text-xl text-black">Todo</h1>
          <span className="text-2xl md:text-xl ml-1 text-purple-600">Pro</span>
        </div>
        <div className="flex items-center space-x-5 justify-end w-full">
          {/* Searchbar */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-semibold pr-5 p-5 shadow-xl rounded-xl w-fit mr-1 bg-white italic max-w-3xl text-purple-500">
          <UserCircleIcon className="inline-block h-10 w-10 text-purple-400 mr-1" />
          GPT is summarizing your task for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
