import React from "react";

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className={`myButton bg-gray-600 hover:bg-gray-500 ${
        darkMode ? "active" : ""
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
export default DarkMode;
