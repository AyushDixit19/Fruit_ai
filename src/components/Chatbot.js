// src/pages/Chatbot.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import logo from '../assets/Logo.png';

const Chatbot = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex items-center justify-center h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="text-center">
        <div className="flex flex-col items-center mb-8">
          <Link to="/fruits">
            <img
              src={logo}
              alt="Chatbot Logo"
              className={`w-15 h-15 mb-4 cursor-pointer ${
                isDarkMode ? 'filter brightness-90' : 'filter brightness-100'
              }`}
            />
          </Link>
          <h1 className="text-3xl font-semibold">Chatbot</h1>
          <h2 className="text-3xl font-semibold text-purple-500">Click the image to view Fruits List.</h2>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;