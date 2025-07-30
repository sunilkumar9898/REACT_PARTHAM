/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const postContext = createContext();

const PostProvider = ({children}) => {
    const [postData, setPostData] = useState(() => {
        const savePost = localStorage.getItem("postData");
        return savePost ? JSON.parse(savePost) : []
    });

    useEffect(() => {
if(postData?.length) localStorage.setItem('postData' ,JSON.stringify(postData))
    },[postData])

    return (
        <postContext.Provider value={{ postData, setPostData }}>
            {children}
        </postContext.Provider>
    )
}

export default PostProvider;
export const usePost=()=> useContext(postContext)