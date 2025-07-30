/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("userData");
        return savedUser ? JSON.parse(savedUser) : {name:"",email:""}
    })

    useEffect(() => {
        if (user?.name?.length) {
    localStorage.setItem("userData" , JSON.stringify(user))
}
},[user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
export const useUser = () => useContext(UserContext);