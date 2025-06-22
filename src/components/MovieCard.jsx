import React from 'react'

const MovieCard = ({movie: {title,vote_average,poster_path,release_date,original_language} }) => {
    const imageUrl = poster_path
    ? `https://movieproxy-production.up.railway.app/api/image/${poster_path.replace(/^\//, '')}`
    : '/no-poster.png';
  return (
    <div className='movie-card'>
      <img src={imageUrl} alt={title}  />
      <div className='mt-4'>
        <h3>{title}</h3>
        <div className='content'>
            <div className='rating'>
                <img src='star.svg' alt='Star Icon' />
                <p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
            </div>
            <span>•</span>
            <p className='lang'>{original_language}</p>
            <span>•</span>
            <p className='year'>{release_date ? release_date.split('-')[0]:'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard