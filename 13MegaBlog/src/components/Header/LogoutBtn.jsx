import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/authService';
import { logout } from '../../features/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService
            .logout()
            .then(() => dispatch(logout())
            )
            .catch((error) => {
            console.error("logout error", error)
        });
    };

    return (
      <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
      >Logout</button>
    )
}

export default LogoutBtn
