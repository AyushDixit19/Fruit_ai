import React from 'react';
import { Link } from 'react-router-dom';
import vector from "../assets/Vector.png"
const About = () => {
    return (
        <div className="bg-gradient-to-r from-purple-300 via-purple-100 to-blue-200 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-t-3xl shadow-lg p-8 text-center max-w-md mx-auto">
                <div className="mb-5">
                    <img
                        src={vector}
                        alt="Blurry logo of Fruit.AI"
                        className="mx-auto"
                    />
                </div>
                <h1 className="text-2xl font-bold mb-4">Fruit.AI</h1>
                <p className="text-gray-600 mb-8">
                    Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
                </p>
                <Link to="/home">
                    <button className="bg-black text-white py-2 px-6 rounded-full font-bold">
                        ABOUT
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;