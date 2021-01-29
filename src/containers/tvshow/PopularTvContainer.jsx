import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvPopular } from '../../actions/index';
import NetflixMovie from '../../components/movies/NetflixMovie';


const TopRatedTvContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTvPopular());
    },[]);

    const topRatedData = useSelector(state => state.popular.movies, []) || [];
    
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

export default TopRatedTvContainer;
