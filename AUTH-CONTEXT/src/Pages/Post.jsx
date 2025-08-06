import React from "react";
import Navbar from "./Navbar";
import { usePost } from "../Context/PostProvider";

const Post = () => {
    const { postData } = usePost();

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 p-6 ">
                {postData?.length ? (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {postData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-transparent hover:border-indigo-400 rounded-1xl shadow-md hover:shadow-xl p-5 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                                <h2 className="text-lg font-bold  mb-2">
                                    Title:
                                    <span className="text-black font-medium px-2">
                                        {item?.title}
                                    </span>
                                </h2>
                                <p className="mb-2">
                                    <span className="font-semibold text-gray-700 px-2">
                                        Body:
                                    </span>
                                    {item?.body}
                                </p>
                                <p>
                                    <span className="font-semibold text-gray-700 px-2">
                                        Author:
                                    </span>
                                    <span className="text-pink-600">{item?.author}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-2xl font-semibold text-red-500 mt-20">
                        Please First Create Post
                    </h1>
                )}
            </div>
        </>
    );
};

export default Post;

