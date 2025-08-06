import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: App Logo or Name */}
                <div className="text-xl font-bold">
                    <Link to="/">MyApp</Link>
                </div>

                {/* Right: Navigation Buttons */}
                <div className="flex gap-4">
                    <Link
                        to="/secure/post"
                        className="bg-gray-100 text-indigo-600 font-medium px-4 py-2 rounded hover:bg-indigo-100 transition duration-200">
                        Post Data
                    </Link>
                    <Link
                        to="/secure/createpost"
                        className="bg-gray-100 text-indigo-600 font-medium px-4 py-2 rounded hover:bg-indigo-100 transition duration-200">
                        Create Post
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
