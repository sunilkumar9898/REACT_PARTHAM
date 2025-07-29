/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


export const postContext = createContext();

const PostProvider = ({children}) => {
    const [postData, setPostData] = useState([]);
    return (
        <postContext.Provider value={{ postData, setPostData }}>
            {children}
        </postContext.Provider>
    )
}

export default PostProvider;
export const usePost=()=> useContext(postContext)