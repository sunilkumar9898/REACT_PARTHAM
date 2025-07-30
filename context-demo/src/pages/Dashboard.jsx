import React from "react";
import { useUser } from "../context/userContext/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../context/postContext/postProvider";

const Dashboard = () => {
    const { user } = useUser();
    const {postData ,setPostData} = usePost()
    const navigate = useNavigate();


    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const result = await res.json();
            setPostData(result);
        } catch (error) {
            console.log(error);
        }
    };

    const goToPost = () => {
        navigate("/secure/post");
    };
    return (
        <div>
            <Link to="/">Home</Link>
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>

            <div>
                <button onClick={() => fetchData()}>get Post</button>
                <button
                    disabled={postData.length === 0}
                    onClick={() => goToPost()}>
                    Go Post
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
