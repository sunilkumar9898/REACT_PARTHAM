import React from "react";
import DynamicSelect from "../components/DynamicSelect";
import { useForm } from "../customHooks/useform";
import DynamicInput from "../components/DynamicInput";
import DynamicRadio from "../components/DynamicRadio";

const INTIAL_VALUE_DISTRICT = ["JAIPUR", "SIKAR", "DAUSA", "TONK"];
const INTIAL_VALUE_GENDER = ["MALE", "FEMALE", "OTHERS"];

const UserForm = () => {
    const { value, handleChange, resetValue } = useForm({
        district: "",
        firstName: "",
        lastName: "",
        gender: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted!");
        resetValue();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg space-y-6 border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    📝 User Registration
                </h2>

                <div className="grid grid-cols-1 gap-4">
                    <DynamicSelect
                        label="District"
                        name="district"
                        value={value?.district}
                        onChange={handleChange}
                        options={INTIAL_VALUE_DISTRICT}
                    />

                    <DynamicInput
                        label="First Name"
                        name="firstName"
                        value={value?.firstName}
                        onChange={handleChange}
                    />

                    <DynamicInput
                        label="Last Name"
                        name="lastName"
                        value={value?.lastName}
                        onChange={handleChange}
                    />

                    <DynamicRadio
                        label="Gender"
                        name="gender"
                        value={value?.gender}
                        onChange={handleChange}
                        options={INTIAL_VALUE_GENDER}
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                         Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
