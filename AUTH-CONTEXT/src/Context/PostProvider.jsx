/* eslint-disable react-refresh/only-export-components */

import React, { useContext, useEffect, useState, createContext } from "react";
const PostContext = createContext();
export const usePost = () => useContext(PostContext);
const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState(() => {
    const saved = localStorage.getItem("postData");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (postData?.length) {
      localStorage.setItem("postData", JSON.stringify(postData));
    }
  }, [postData]);

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

