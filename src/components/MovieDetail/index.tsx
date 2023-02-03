import { StarIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { useGetMovieDetailQuery } from '../../services/movie';
import { NumericFormat } from 'react-number-format';
import './style.css';

const MovieDetail = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetMovieDetailQuery(id);
  console.log(data);
  return (
    <div
      className='moviedetail__wrapper'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
      }}>
      <div className='moviedetail__data'>
        <div className='container moviedetail__container'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt=''
            className='moviedetail__image'
          />
          <div>
            <h1>{data?.title}</h1>
            <p className='moviedetail__date-genre'>
              {data?.release_date} -{' '}
              {data?.genres?.map((genre) => genre.name).join(', ')}
            </p>

            <div className='moviedetail__rating'>
              <StarIcon className='moviedetail__star' />
              {data?.vote_average && Math.floor(data.vote_average * 10) / 10} /
              10
            </div>

            <div className='moviedetail__overview'>
              <h2>Overview</h2>
              <p>{data?.overview}</p>
            </div>

            <div className='moviedetail__stats'>
              <div className='moviedetail__status'>
                <h3>Status</h3>
                Released
              </div>
              <div className='moviedetail__budget'>
                <h3>Budget</h3>
                {data?.budget ? (
                  <NumericFormat
                    value={data?.budget}
                    displayType='text'
                    thousandsGroupStyle='thousand'
                    thousandSeparator=','
                    prefix='$'
                  />
                ) : (
                  '-'
                )}
              </div>
              <div className='moviedetail__revenue'>
                <h3>Revenue</h3>
                {data?.revenue ? (
                  <NumericFormat
                    value={data?.revenue}
                    displayType='text'
                    thousandsGroupStyle='thousand'
                    thousandSeparator=','
                    prefix='$'
                  />
                ) : (
                  '-'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
