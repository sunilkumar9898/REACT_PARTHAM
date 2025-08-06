import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserList } from "../Context/UserListProvider";
import { useLogin } from "../Context/LoginUserProvider";
import toast from "react-hot-toast";
import MyImage from "../assets/login.png";

const INTIAL_FORM_VALUE = {
    email: "",
    password: "",
};

const Login = () => {
    const { userList } = useUserList()
    const { setUserLogin } = useLogin();


  const navigate = useNavigate()

    const [formData, setFormData] = useState(INTIAL_FORM_VALUE);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

        const validate = () => {
            let newArr = {};
            if (!formData?.email.trim()) newArr.title = "Please fill email field";
            if (!formData?.password?.trim()) newArr.body = "Please fill password field";
            return newArr;
        };


    const handleSubmit = (e) => {
        e.preventDefault();
        let newArrError = validate();
        if (Object.keys(newArrError).length > 0) {
            Object.values(newArrError).find((err) => toast.error(err));
            return;
        }
        const matchedEmailUser = userList.find(
            (user) => user.email === formData.email
        );

        if (!matchedEmailUser) {
            setMessage(
                <span>
                    Email not found or incorrect email address. Please
                    <button
                        className="text-blue-900 font-bold  underline border-none bg-none cursor-pointer"
                        onClick={() => navigate("/signup")}>
                        Sign Up
                    </button>
                </span>
            );
            return;
        }

        if (matchedEmailUser.password !== formData.password) {
            setMessage("Wrong password.");
            return;
        }
        setMessage("Login successful!");
        setUserLogin(matchedEmailUser);
        navigate("/secure/post");
        setFormData(INTIAL_FORM_VALUE);
    };

    return (
        <div className="min-h-screen bg-gray-200 p-6 bg-gradient-to-l from-purple-100 via-pink-200 to-yellow-100">
            <div className="max-w-md mx-auto  bg-white shadow-md rounded-lg p-8 mt-50">
                <h2 className="text-2xl flex items-center justify-center font-bold mb-6 text-center text-indigo-600">
                    Log in
                    <img
                        src={MyImage}
                        alt="My Pic"
                        className="w-10 mx-4 rounded-xl shadow-md"
                    />
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="block text-gray-700 font-semibold mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <label className="block text-gray-700 mb-1 font-semibold">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <p className="text-red-500">{message}</p>
                    <div className="text-center">
                        <button
                            type="submit"
                            className=" w-95 text-white font-semibold px-6 py-2 rounded-md shadow-md  cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                            log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
