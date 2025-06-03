import React, { createContext, useState } from 'react';

// Create a context
export const LoginContext = createContext();

function LoginContextProvider({ children }) {
    const [userDetails, setUserDetails] = useState(true);
    return (
        <LoginContext.Provider value={userDetails}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;
