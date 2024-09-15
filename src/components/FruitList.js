import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useDarkMode } from '../context/DarkModeContext';
import Tangerine from '../assets/z9vkyDW9brw.png';
import Orange from '../assets/nibgG33H0F8.png';
import Cucumber from '../assets/Za9HGBK5ALA.png';

const fruits = [
  { id: 1, name: 'Orange', price: 8.00, img: Orange, description: 'Oranges are rich in Vitamin C, fiber, and antioxidants that boost your immune system and aid in digestion.' },
  { id: 2, name: 'Cucumber', price: 11.76, img: Cucumber, description: 'Cucumbers are hydrating and low in calories. They provide antioxidants and essential nutrients that help maintain skin health and reduce inflammation.' },
  { id: 3, name: 'Tangerine', price: 6.40, img: Tangerine, description: 'Tangerines are a good source of Vitamin C and fiber. They support immune health, aid in digestion, and provide a refreshing flavor.' },
];

const FruitList = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => {
      const currentQuantity = prevQuantities[id] || 1;
      const newQuantity = Math.max(1, currentQuantity + delta);
      return {
        ...prevQuantities,
        [id]: newQuantity
      };
    });
  };

  return (
    <div
      className={`flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen items-center justify-center`}
    >
      <div className="flex-1 p-4 max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-4xl font-extrabold ${
            isDarkMode ? 'text-red-400' : 'text-blue-700'
          }`}>
            Fruits List
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`fixed top-4 right-4 px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-300 text-gray-800'
            } border-4 border-gray-600 hover:bg-gray-500 transition-colors duration-300 text-md font-bold`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className={`w-full p-4 rounded-lg flex items-center shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } relative border-4 border-${isDarkMode ? 'white-500' : 'green-500'} bg-gradient-to-r ${isDarkMode ? 'from-gray-800 to-gray-900' : 'from-white to-gray-100'}`}
            >
              <img
                src={fruit.img}
                alt={fruit.name}
                className="w-16 h-16 rounded-full border-4 border-red-600 mr-4 transition-transform duration-300 transform hover:rotate-12"
              />
              <div className="flex-1">
                <Link to={`/fruits/${fruit.id}`}>
                  <h3 className={`text-xl font-bold mb-2 cursor-pointer ${
                    isDarkMode ? 'text-yellow-400' : 'text-green-800'
                  }`}>{fruit.name}</h3>
                </Link>
                <div className="flex flex-col items-start mb-2">
                  <div className={`text-lg font-bold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    ${((quantities[fruit.id] || 1) * fruit.price).toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center ml-4 space-x-3">
                <button
                  onClick={() => handleQuantityChange(fruit.id, -1)}
                  className={`w-8 h-8 flex items-center justify-center bg-red-700 text-white text-xl font-bold rounded-full hover:bg-red-800 transition-colors duration-300 ${
                    isDarkMode ? 'border border-gray-800' : 'border border-gray-500'
                  }`}
                >
                  -
                </button>
                <span className="text-xl font-bold">
                  {quantities[fruit.id] || 1}
                </span>
                <button
                  onClick={() => handleQuantityChange(fruit.id, 1)}
                  className={`w-8 h-8 flex items-center justify-center bg-green-700 text-white text-xl font-bold rounded-full hover:bg-green-800 transition-colors duration-300 ${
                    isDarkMode ? 'border border-gray-800' : 'border border-gray-500'
                  }`}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FruitList;