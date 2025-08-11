import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/actions/authAction";

const INTIAL_VALUE = {
    userName: "",
    password: "",
};


const Login = () => {
    const [formData, setFormData] = useState(INTIAL_VALUE);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

console.log(data,'data');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData?.userName.trim() === "" ||
            formData?.password.trim() === ""
        ) {
            toast.error("Please Submit first userName or Password");
            return
        }
        const user = {
            userName:formData.userName
        }
        dispatch(login(user));
        setData(formData);
        setFormData(INTIAL_VALUE);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {/* Username Field */}
                <div className="mb-4">
                    <label
                        htmlFor="userName"
                        className="block text-gray-700 font-medium mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your username"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
