import React, { createContext, useState ,useEffect} from 'react';
export const UserContext = createContext();


export const UserProvider = ({ children }) => {

const [user,setUser]=useState(JSON.parse(localStorage.getItem("token")));

//     useEffect(() => {

//     const user=localStorage.getItem("token");

//     setUser(user);
//   }, []);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};