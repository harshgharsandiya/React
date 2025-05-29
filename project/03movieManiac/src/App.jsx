import React from 'react'

import './App.css'
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'


function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <MovieList type="popular" title="Popular" emogi={Fire}/>
        <MovieList type="top_rated" title="Top Rated" emogi={Star}/>
        <MovieList type="upcoming" title="Upcoming" emogi={Party}/>
      </main>
    </div>
  )
}

export default App
