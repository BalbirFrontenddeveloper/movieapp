import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <>
    <div className='movie'>
        <div>
          <h2>{movie.Year}</h2>
        </div>
        <div>
          <img 
          src={movie.Poster}
          alt='movie poster'
          />
        </div>
        <div>
          <h3>{movie.Type}</h3>
          <p>{movie.Title}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard