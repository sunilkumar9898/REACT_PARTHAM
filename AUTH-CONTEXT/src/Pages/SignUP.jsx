import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserList } from '../Context/UserListProvider';
import toast from 'react-hot-toast';
import myImage from '../assets/signup.png'
const INTIAL_FORM_VALUE = {
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword:""
}
const SignUP = () => {
    const navigate  = useNavigate()
    const { userList, setUserList } = useUserList();
    console.log(userList,'userList');

    const [formData, setFormData] = useState(INTIAL_FORM_VALUE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=>({...prev,[name]:value}))
    }

        const validate = () => {
            let newArr = {};
            if (!formData?.fname?.trim()) newArr.fname = "Please fill first name field";
            if (!formData?.lname?.trim()) newArr.lname = "Please fill last name field";
            if (!formData?.gender?.trim()) newArr.gender = "Please select gender";
            if (!formData?.email?.trim()) newArr.email = "Please fill email field";
            if (!formData?.password?.trim()) newArr.password = "Please fill password field";
            if (!formData?.confirmPassword?.trim()) newArr.confirmPassword = "Please fill confirmPassword field";
            return newArr;
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existUser = userList.find((exist) => exist?.email === formData?.email)
      if (existUser) {
          toast.error("This email is already registered");
          return;
      }
        let newArrError = validate()
        if (Object.keys(newArrError).length > 0) {
            Object.values(newArrError).find((err) => toast.error(err));

        } else if (formData?.password!==formData?.confirmPassword) {
            toast.error("Not Matched Your Confirm Password from Current Password")

        } else {
            toast.success("Successfully submited");
            setUserList((prev) => [...prev, formData]);
            setFormData(INTIAL_FORM_VALUE);
            navigate("/login");
        }

    }
  return (
      <div className="min-h-screen p-6 bg-gradient-to-l from-purple-100 via-pink-200 to-yellow-100">
          <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 mt-15">
              <h2 className="text-2xl flex items-center justify-center font-bold mb-6 text-center text-indigo-600">
                  Sign Up
                  <img
                      src={myImage}
                      alt="My Pic"
                      className="w-10 mx-4 rounded-xl shadow-md"
                  />
              </h2>

              <form action="" onSubmit={handleSubmit} className="space-y-6">
                  <label
                      htmlFor=""
                      className="block font-semibold mb-1 text-gray-700">
                      first Name <span className="text-red-600">*</span>
                  </label>
                  <input
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      value={formData?.fname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />

                  <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-1">
                      last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                      type="text"
                      placeholder="last Name"
                      name="lname"
                      value={formData?.lname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />

                  <label className="block text-gray-700 font-semibold mb-1">
                      Gender <span className="text-red-600">*</span>
                  </label>
                  <div className="flex justify-between">
                      <label className=" text-gray-900 font-semibold mb-1">
                          <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={formData.gender === "male"}
                              onChange={handleChange}
                              className="px-4 mx-2 cursor-pointer py-2 border border-gray-300 rounded-md focus:outline-none "
                          />
                          Male
                      </label>
                      <label className=" text-gray-900 font-semibold mb-1">
                          <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={formData.gender === "female"}
                              onChange={handleChange}
                              className="px-4 mx-2 cursor-pointer py-2 border border-gray-300 rounded-md focus:outline-none "
                          />
                          Female
                      </label>
                      <label className=" text-gray-900 font-semibold mb-1">
                          <input
                              type="radio"
                              name="gender"
                              value="other"
                              checked={formData.gender === "other"}
                              onChange={handleChange}
                              className="px-4 mx-2 py-2 border border-gray-300 rounded-md focus:outline-none cursor-pointer "
                          />
                          Other
                      </label>
                  </div>
                  <label
                      htmlFor=""
                      className="block font-semibold mb-1 text-gray-700">
                      email <span className="text-red-600">*</span>
                  </label>
                  <input
                      type="email"
                      name="email"
                      value={formData?.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <label
                      htmlFor=""
                      className="font-semibold text-gray-700 mb-1 block">
                      password <span className="text-red-600">*</span>
                  </label>
                  <input
                      type="text"
                      name="password"
                      value={formData?.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <div>
                      <label
                          htmlFor=""
                          className="font-semibold text-gray-700 mb-1 block">
                          Confirm password{" "}
                          <span className="text-red-600">*</span>
                      </label>
                      <input
                          type="text"
                          name="confirmPassword"
                          value={formData?.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                  </div>
                  <div className="text-center ">
                      <button
                          type="submit"
                          className="text-white font-semibold px-6 py-2 rounded-md w-130 shadow-md  cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                          Sign Up
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
}

export default SignUP
