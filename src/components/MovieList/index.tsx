import { useEffect, useState } from 'react';
import MovieItem from '../MovieItem';
import { useGetAllMovieQuery } from '../../services/movie';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import './style.css';
import { Movie } from '../../typings';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const MovieList = () => {
  const [page, setPage] = useState(1);
  const search = useSelector((state: RootState) => state.search.value);
  const [args, setArgs] = useState({
    input: '',
    page: 1,
  });

  useEffect(() => {
    setArgs({
      ...args,
      input: search,
    });
  }, [search]);

  useEffect(() => {
    setArgs({
      ...args,
      page,
    });
  }, [page]);

  const { data, error, isLoading } = useGetAllMovieQuery(args);

  console.log(data);
  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;

  return (
    <>
      <div className='container movielist__container'>
        {data?.results.map(
          ({ title, poster_path, id, release_date }: Movie) => (
            <MovieItem
              key={id}
              title={title}
              poster_path={poster_path}
              id={id}
              release_date={release_date}
            />
          )
        )}
      </div>
      <div className='pagination'>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className='pagination__button'>
          <ChevronLeftIcon className='pagination__button-icon' />
        </button>
        <div className='pagination__page'>
          {page} / {data?.total_pages}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className='pagination__button'>
          <ChevronRightIcon className='pagination__button-icon' />
        </button>
      </div>
    </>
  );
};

export default MovieList;
