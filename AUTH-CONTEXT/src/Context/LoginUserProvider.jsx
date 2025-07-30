
/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const userLoginContext = createContext();

const UserLoginProvider = ({children}) => {
    const [userLogin, setUserLogin] = useState(() => {
        const savePost = localStorage.getItem("LogInUser");
        return savePost ? JSON.parse(savePost) : null
    });

    useEffect(() => {
        if (userLogin)
            localStorage.setItem("LogInUser", JSON.stringify(userLogin));
    }, [userLogin]);

    return (
        <userLoginContext.Provider value={{ userLogin, setUserLogin }}>
            {children}
        </userLoginContext.Provider>
    );
}

export default UserLoginProvider;
export const useLogin = () => useContext(userLoginContext);