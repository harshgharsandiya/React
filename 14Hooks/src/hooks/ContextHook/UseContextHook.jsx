import React, { createContext } from 'react';
import MainApplication from './MainApplication';
import LoginContextProvider from './context/LoginContextProvider';

function UseContextHook() {
    return (
        <LoginContextProvider>
            <MainApplication />
        </LoginContextProvider>
    );
}

export default UseContextHook;
