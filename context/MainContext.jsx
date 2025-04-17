"use client"

import { createContext, useContext, useState, useEffect } from "react";


export const AppContext = createContext();

export function MainContext({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [address, setAddress] = useState("");
    const [firstTimeLogin, setFirstTimeLogin] = useState(true);

    return (
        <AppContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            loggedIn, setLoggedIn,
            isMounted, setIsMounted,
            address, setAddress,
            firstTimeLogin, setFirstTimeLogin
        }}>
            {children}
        </AppContext.Provider>
    );
}