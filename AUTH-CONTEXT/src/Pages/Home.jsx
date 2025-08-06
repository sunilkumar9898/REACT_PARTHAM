import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center gap-4 bg-gradient-to-l from-purple-100 via-pink-200 to-yellow-100">
            <h1 className="text-6xl font-extrabold mb-4  text-green-500 font-sans">
                Welcome !
            </h1>
            <div className="flex gap-4">
                <button
                    onClick={() => navigate("/login")}
                    className=" cursor-pointer px-6 py-2  text-white rounded hover:bg-indigo-700  bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Login
                </button>
                <button
                    onClick={() => navigate("/signup")}
                    className=" cursor-pointer px-6 py-2 text-white rounded hover:bg-indigo-700  bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Home;
