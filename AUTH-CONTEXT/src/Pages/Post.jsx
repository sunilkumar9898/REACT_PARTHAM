import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { usePost } from "../Context/PostProvider";


const Post = () => {
    const navigate = useNavigate();
    const { postData } = usePost();

  return (
      <>
          <Navbar />

          <div className="post-container">
              <button
                  className="create-btn"
                  onClick={() => navigate("/createpost")}>
                  Create Post
              </button>

              <div className="post-grid">
                  {postData.map((item, index) => (
                      <div className="post-card" key={index}>
                          <p>
                              <strong>Title:</strong> {item?.title}
                          </p>
                          <p>
                              <strong>Body:</strong> {item?.body}
                          </p>
                          <p>
                              <strong>Author:</strong> {item?.author}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </>
  );
};

export default Post;
