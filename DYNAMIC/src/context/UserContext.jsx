import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


export const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "sunil",
        email: "sunil@gmail.com",
        age: 28,
        gender:"Male"
    })

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
       </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)
export default UserProvider;