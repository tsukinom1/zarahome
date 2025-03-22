"use client"
import { createContext, useState, useMemo } from "react";

export const LoginContext = createContext(null);

export function LoginContextProvider({ children }) {
    const [user, setUser] = useState({ email: "", password: "" });

    const contextValue = useMemo(() => ({
        user,
        setUser,
        isAuth: !!user.email,
    }), [user]);

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}
