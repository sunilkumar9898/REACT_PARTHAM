import React, { useState, useEffect } from "react";
import { usePost } from "../Context/PostProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useLogin } from "../Context/LoginUserProvider";
import toast from "react-hot-toast";

const INITIAL_FORM_VALUE = {
    title: "",
    body: "",
    author: "",
};

const CreatePost = () => {
    const { userLogin } = useLogin();
    const { setPostData } = usePost();
    const navigate = useNavigate();
    const [createPost, setCreatePost] = useState(INITIAL_FORM_VALUE);

    useEffect(() => {
        if (userLogin?.fname) {
            setCreatePost((prev) => ({
                ...prev,
                author: userLogin.fname,
            }));
        }
    }, [userLogin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreatePost((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let newArr = {};
        if (!createPost?.title?.trim()) newArr.title = "Please fill Title field";
        if (!createPost?.body?.trim()) newArr.body = "Please fill Body field";
        if (!createPost?.author?.trim()) newArr.author = "Please select author";
        return newArr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArrError = validate();
        if (Object.keys(newArrError).length > 0) {
            Object.values(newArrError).find((err) => toast.error(err));
        } else {
                toast.success("Successfully Created Post");
            setPostData((prev) => [...prev, createPost]);
            setCreatePost(INITIAL_FORM_VALUE);
            navigate("/secure/post");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            <Navbar />

            <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 mt-25">
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                    Create New Post
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={createPost.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter title"
                        />
                    </div>

                    {/* Body */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Body <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="body"
                            value={createPost.body}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Write your post content here..."></input>
                    </div>

                    {/* Author */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={createPost.author}
                            onChange={handleChange}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded-md"
                        />
                    </div>


                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-200 cursor-pointer">
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
