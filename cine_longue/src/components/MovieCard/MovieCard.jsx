import React from 'react'
import { Link } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './MovieCard.css'

const imagesURL = import.meta.env.VITE_IMG;

function MovieCard({ movie, showLink = true }) {
  return (
    <div className="movie-card">
        <img className='movie-card-image' src={imagesURL + movie.poster_path} alt={movie.title} />
        <h2 className='movie-card-title'>{movie.title}</h2>
        <p className='movie-rating'>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <button className='button-movie-details'><Link className='movie-details' to={`/movie/${movie.id}`}>Detalhes</Link></button>}
    </div>
  )
}

export default MovieCard