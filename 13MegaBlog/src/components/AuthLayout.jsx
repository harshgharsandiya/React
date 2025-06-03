import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from './index';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        // true && false !== true
        // If you expect login, but status says not logged in → /login
        if (authentication && authStatus !== authentication) {
            navigate('/login');
        }
        //!true && true !== true
        //If you expect logout, but status says logged in → /
        else if (!authentication && authStatus !== authentication) {
            navigate('/');
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <Loader /> : <>{children}</>;
}
