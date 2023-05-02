import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();


return(
    <UserContext.Provider 
        value={{currentUser, setCurrentUser}}
        >
            {children}
        </UserContext.Provider>
);
}