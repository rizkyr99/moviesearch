import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import { setSearch } from '../../features/search/searchSlice';
import './style.css';

const Header = () => {
  const search = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
  return (
    <header className='navbar'>
      <div className='navbar__container container'>
        <Link to='/'>
          <div className='navbar__brands'>
            Movie<span>DB</span>
          </div>
        </Link>
        <div className='navbar__search'>
          <input
            type='text'
            className='navbar__search-input'
            placeholder='Search'
            onChange={(e) => dispatch(setSearch(e.target.value))}
            onSubmit={() => alert('s')}
          />
        </div>
        <a href='/watchlist' className='navbar__watchlist'>
          <HeartIcon className='navbar__watchlist-icon' />
          <span>Watchlist</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
