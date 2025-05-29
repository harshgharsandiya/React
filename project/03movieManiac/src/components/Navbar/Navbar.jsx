import React from 'react'

import './Navbar.css'
import DarkMode from '../DarkMode/DarkMode';
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>MovieManiac</h1>
        <div className="navbar_links">
            <DarkMode />
            <a href="#popular">Popular 
                <img 
                src={Fire} 
                alt="fire emogi" 
                className='navbar_emogi' />
            </a>
            <a href="#top_rated">Top Rated 
                <img 
                src={Star} 
                alt="star emogi" 
                className='navbar_emogi' />
            </a>
            <a href="#upcoming">Upcoming 
                <img 
                src={Party} 
                alt="party face emogi" 
                className='navbar_emogi' />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
