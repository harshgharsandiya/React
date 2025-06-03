import React, { useContext } from 'react';
import { LoginContext } from './context/LoginContextProvider';

function SinglePost() {
    const login = useContext(LoginContext);
    console.log(login);

    return <div>Single Post</div>;
}

export default SinglePost;
