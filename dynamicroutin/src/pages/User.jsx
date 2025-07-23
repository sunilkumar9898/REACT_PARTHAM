import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const User = () => {
    const [post, setPost] = useState([]);




const navigate = useNavigate()

    const fetchPostData = async () => {
        try {
            const responce = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
          );
          console.log(responce);

            const parseData = await responce.json();
            setPost(parseData);
        } catch (error) {
            console.log(error, "erroe");
        }
    };

    useEffect(() => {
        fetchPostData();
    }, []);
    return (
        <div>
            {post?.map((post) => {
                return (
                    <ul key={post?.id}>
                        <li
                            onClick={() => {
                                navigate(`/post/${post?.id}?userId=${post?.id}`);
                            }}>
                            {post?.title}
                        </li>
                        {/* <li>
                            <Link to={`/user/${post?.id}`}>{post?.title}</Link>
                        </li> */}
                    </ul>
                );
            })}
        </div>
    );
};

export default User;
