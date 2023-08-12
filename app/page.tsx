"use client";
import React from "react";
import Image from "next/image";
import Nav from "./nav";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      {/* <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="flex justify-center items-center h-full">
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div> */}

      <div className="max-w-[120rem] mx-auto">
        <div
          id="head"
          className="border-2 border-slate-300 w-full h-52 flex items-start justify-center md:justify-end pt-12 px-12"
        >
          <div id="navigationMenu" className="">
            <ul className="flex flex-wrap items-center justify-center text-xl font-semibold text-gray-900 dark:text-white gap-8 md:gap-12">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-8 relative">
          <div id="aside" className="border-2 border-yellow-100 w-5/6 mx-auto relative -top-10 h-96">
            <div id="profile">profile</div>
          </div>
          <div id="content" className="border-2 border-red-200 flex-grow">
            content
          </div>
        </div>
      </div>
    </>
  );
}
