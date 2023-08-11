"use client"
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
      <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
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
    </div>
    </>
  );
}
