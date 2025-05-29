import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import './MovieList.css'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieList({type, title, emogi}) {

    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    });

    useEffect(() => {
        fetchMovies();
    }, [])

    useEffect(() => {
        if(sort.by !== "default") {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
            setFilterMovies(sortedMovies);

        }
    }, [sort]);
    
    const fetchMovies = async  () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
        );

        const data = await response.json();
        setMovies(data.results);
        setFilterMovies(data.results);
    }

    const handleFilter = rate => {
        if(rate === minRating) {
            setMinRating(0);
            setFilterMovies(movies);
        } else {
            setMinRating(rate);
    
            const filtered = movies.filter(movie => movie.vote_average >= rate)
            setFilterMovies(filtered);
        }
    }

    const handleSort = e => {
        const {name, value} = e.target;
        setSort(prev => ({...prev, [name]: value}))
    }

  return (
    <section className='movie_list' id={type}>
        {/* Header */}
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>
                {title}
                <img 
                    src={emogi} 
                    alt={`${emogi} icon`}
                    className='navbar_emogi'
                />
            </h2>
            <div className="align_center movie_list_fs">
                
                <FilterGroup 
                    minRating={minRating} 
                    onRatingClick={handleFilter}
                    ratings={[8,7,6,5,4]}
                />

                <select name="by" id="" 
                    onChange={handleSort} 
                    value={sort.by}
                    className="movie_sorting">
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" 
                    onChange={handleSort}
                    value={sort.order}
                    className="movie_sorting">
                    <option value="asc">Asceding</option>
                    <option value="desc">Desceding</option>
                </select>
            </div>
        </header>
        
        {/* Movie Card List */}
        <div className="movie_cards">
            {/* <MovieCard /> */}
            {
                filterMovies.map(movie => 
                <MovieCard 
                    key={movie.id} 
                    movie={movie}
                />)
            }
        </div>

    </section>
  )
}

export default MovieList
