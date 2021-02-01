import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieTopRated } from '../../actions/index';
import NetflixMovie from '../../components/movies/NetflixMovie';


const TopRatedContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieTopRated());
    },[]);

    const topRatedData = useSelector(state => state.topRated.movies, []) || [];
    
    return (
        <div>
            <p>오늘의 TOP 10 콘텐츠</p>
            <div className="netflixContainer">
                { topRatedData.results && topRatedData.results.map(movie => (
                    <NetflixMovie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default TopRatedContainer;
