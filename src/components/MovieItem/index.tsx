import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import './style.css';
import { Movie } from '../../typings';

const index = ({ id, title, poster_path, release_date }: Movie) => {
  return (
    <Link to={`movie/${id}`}>
      <div className='movieitem'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=''
          className='movieitem__image'
        />
        <div className='movieitem__content'>
          <div className='movieitem__detail'>
            <h2 className='movieitem__title'>{title}</h2>
            <p className='movieitem__date'>{release_date}</p>
          </div>
          <button className='movieitem__button'>
            <PlusIcon className='movieitem__button-icon' />
            <p>Add To Watchlist</p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default index;
