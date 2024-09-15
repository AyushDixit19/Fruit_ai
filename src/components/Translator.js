import React, { useEffect } from "react";
import countries from "./data";

const Translate = () => {
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const selectTags = document.querySelectorAll("select");
    const translateBtn = document.querySelector("button");

    selectTags.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "hi-IN"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTags[0].value;
      let translateTo = selectTags[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          toText.setAttribute("placeholder", "Translation");
        });
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 min-h-screen h-full flex items-center justify-center">
      <div className="wrapper bg-gradient-to-br from-pink-100 via-blue-200 to-red-300 shadow-2xl rounded-3xl p-12 max-w-4xl w-full transform hover:scale-105 transition-transform duration-300">
        <div className="text-input mb-10">
          <textarea
            spellCheck="false"
            className="from-text w-full h-40 p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-90 hover:shadow-lg transition-shadow duration-200 placeholder-gray-700"
            placeholder="Enter text"
          ></textarea>
          <textarea
            spellCheck="false"
            readOnly
            className="to-text w-full h-40 p-4 mt-6 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-90 hover:shadow-lg transition-shadow duration-200 placeholder-gray-700"
            placeholder="Translation"
          ></textarea>
        </div>
        <ul className="controls flex justify-between items-center mb-10">
          <li className="row from flex flex-col">
            <div className="icons flex space-x-4 text-2xl">
              <i id="from" className="fas fa-volume-up text-green-600 cursor-pointer hover:text-green-800 transition-colors duration-300"></i>
              <i id="from" className="fas fa-copy text-green-600 cursor-pointer hover:text-green-800 transition-colors duration-300"></i>
            </div>
            <select className="mt-2 p-3 rounded-lg bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 text-gray-700 text-center appearance-none transition-colors duration-200 shadow-md">
            </select>
          </li>
          <li className="row to flex flex-col">
            <select className="p-3 rounded-lg bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 text-gray-700 text-center appearance-none transition-colors duration-200 shadow-md">
            </select>
            <div className="icons flex space-x-4 text-2xl mt-3">
              <i id="to" className="fas fa-volume-up text-green-600 cursor-pointer hover:text-green-800 transition-colors duration-300"></i>
              <i id="to" className="fas fa-copy text-green-600 cursor-pointer hover:text-green-800 transition-colors duration-300"></i>
            </div>
          </li>
        </ul>
        <button
          className="w-full py-5 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 transform"
        >
          Translate Text
        </button>
      </div>
    </div>
  );
};

export default Translate;