import React from "react";
import { usePost } from "../context/postContext/postProvider";

const Post = () => {
    const { postData } = usePost();

      const scrollToTop = () => {
          window.scrollTo({
              top: 0,
              behavior: "smooth",
          });
      };
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Posts</h1>

            {/* Grid container for 5 columns */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "20px",
                    marginTop: "30px",
                }}>
                {postData.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "15px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            backgroundColor: "#f9f9f9",
                        }}>
                        <h4 style={{ fontSize: "16px", fontWeight: "bold" }}>
                            {item.title}
                        </h4>
                        <p style={{ fontSize: "14px" }}>{item.body}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    padding: "10px 15px",
                    fontSize: "20px",
                    cursor: "pointer",
                }}>
                ↑
            </button>
        </div>
    );
};

export default Post;
