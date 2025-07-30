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
        if (!createPost?.title) newArr.title = "Please Fill Title Field";
        if (!createPost?.body) newArr.body = "Please fill body Filed";
        if (!createPost?.author) newArr.author = "Please select role";
        return newArr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArrError = validate();
        if (Object.keys(newArrError).length > 0) {
            const firstError = Object.values(newArrError).find((err) => err);
            toast.error(firstError);
        } else {
            setPostData((prev) => [...prev, createPost]);
            setCreatePost(INITIAL_FORM_VALUE);
            navigate("/post");
        }
    };

    return (
        <div>
            <h1 class="text-3xl font-bold text-amber-600 underline">Hello world!</h1>

            <Navbar />
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={createPost.title}
                    onChange={handleChange}
                />
                <label>Body</label>
                <span>*</span>
                <input
                    type="text"
                    name="body"
                    value={createPost.body}
                    onChange={handleChange}
                />
                <label>Author</label>
                <input
                    type="text"
                    name="author"
                    value={createPost.author}
                    onChange={handleChange}
                    readOnly // ✅ Optional: make it read-only so user can't change
                />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
