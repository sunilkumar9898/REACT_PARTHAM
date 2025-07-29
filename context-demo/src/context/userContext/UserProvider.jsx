/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        email:""
    })



    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
export const useUser = () => useContext(UserContext);