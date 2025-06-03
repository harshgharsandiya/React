import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService';
import { login, logout } from './features/authSlice'
import { Header, Footer, Loader } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.error("Error fetching current user:", error);
      dispatch(logout());
    })
    .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    //loading --> false display
    <div 
      className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : 
  (
    //loading --> true not display
    <div>
      <Header />
      <Loader />
      <Footer />
    </div>
  )
  
}

export default App
